import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { BlogHeading, BlogMeta, getAllBlogSlugs, getBlogBySlug } from "~~/services/blog";
import { formatBlogDate } from "~~/utils/blog";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const components: Record<string, any> = {
  h2: ({ children, id }: { children?: React.ReactNode; id?: string }) => (
    <h2
      id={id}
      className="text-secondary font-bold text-2xl sm:text-3xl mt-16 mb-3 pt-8 border-t border-white/[0.06] scroll-mt-24"
    >
      {children}
    </h2>
  ),
  h3: ({ children, id }: { children?: React.ReactNode; id?: string }) => (
    <h3 id={id} className="text-white font-semibold text-lg sm:text-xl mt-10 mb-2 scroll-mt-24">
      {children}
    </h3>
  ),
  p: ({ children }: { children?: React.ReactNode }) => <p className="my-5 leading-[1.85]">{children}</p>,
  blockquote: ({ children }: { children?: React.ReactNode }) => (
    <blockquote className="relative border-l-2 border-secondary/30 pl-5 py-2 my-6 text-white/45 italic">
      {children}
    </blockquote>
  ),
  a: ({ href, children }: { href?: string; children?: React.ReactNode }) => {
    const isExternal = href?.startsWith("http");
    return (
      <a
        href={href}
        className="text-secondary underline decoration-secondary/30 underline-offset-[3px] hover:decoration-secondary/80 transition-all duration-200"
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  },
  pre: ({ children }: { children?: React.ReactNode }) => {
    const childProps = (children as any)?.props;
    const className = childProps?.className || "";
    const langMatch = className.match(/language-(\w+)/);
    const lang = langMatch ? langMatch[1] : null;

    return (
      <div className="relative my-7 rounded-lg overflow-hidden border border-white/[0.08]">
        {/* Terminal-style header bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-white/[0.04] border-b border-white/[0.06]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>
          {lang && <span className="text-[11px] font-mono text-white/25 uppercase tracking-wider">{lang}</span>}
        </div>
        <pre className="bg-white/[0.02] px-5 py-4 overflow-x-auto text-[0.84em] font-mono text-primary-content/90 leading-relaxed">
          {children}
        </pre>
      </div>
    );
  },
  code: ({ children, className }: { children?: React.ReactNode; className?: string }) => {
    if (className) return <code className={className}>{children}</code>;
    return (
      <code className="bg-white/[0.08] text-secondary/80 px-1.5 py-0.5 rounded text-[0.84em] font-mono border border-white/[0.06]">
        {children}
      </code>
    );
  },
  strong: ({ children }: { children?: React.ReactNode }) => (
    <strong className="text-white font-semibold">{children}</strong>
  ),
  ul: ({ children }: { children?: React.ReactNode }) => (
    <ul className="my-5 space-y-2.5 list-disc list-outside pl-5 marker:text-secondary/30">{children}</ul>
  ),
  li: ({ children }: { children?: React.ReactNode }) => <li className="leading-[1.85] pl-1">{children}</li>,
};

// Rehype plugin to add IDs to headings
function rehypeSlugify() {
  return (tree: any) => {
    function visit(node: any) {
      if (node.type === "element" && /^h[23]$/.test(node.tagName)) {
        const text = getTextContent(node);
        const id = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-");
        node.properties = node.properties || {};
        node.properties.id = id;
      }
      if (node.children) node.children.forEach(visit);
    }
    visit(tree);
  };
}

function getTextContent(node: any): string {
  if (node.type === "text") return node.value;
  if (node.children) return node.children.map(getTextContent).join("");
  return "";
}

function estimateReadTime(wordCount: number): string {
  const minutes = Math.ceil(wordCount / 230);
  return `${minutes} min read`;
}

interface Props {
  source: MDXRemoteSerializeResult;
  meta: BlogMeta;
  headings: BlogHeading[];
  wordCount: number;
}

// Reading progress bar
const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-50">
      <div
        className="h-full bg-gradient-to-r from-primary via-secondary to-secondary transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

const TableOfContents = ({ headings }: { headings: BlogHeading[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      entries => {
        // Find the first heading that is intersecting
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 },
    );

    headings.forEach(h => {
      const el = document.getElementById(h.id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <>
      {/* Mobile TOC */}
      <div className="xl:hidden mb-10">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 text-sm font-mono text-white/35 hover:text-white/55 transition-colors"
        >
          <svg
            className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clipRule="evenodd"
            />
          </svg>
          <span className="uppercase tracking-wider text-xs">Contents</span>
        </button>
        {isOpen && (
          <nav className="mt-4 ml-1 border-l border-white/[0.08] animate-[fadeIn_150ms_ease-out]">
            <ul className="space-y-1.5 py-1">
              {headings.map(h => (
                <li key={h.id}>
                  <a
                    href={`#${h.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`block text-sm py-0.5 transition-colors ${h.level === 3 ? "pl-6" : "pl-3"} ${
                      activeId === h.id
                        ? "text-secondary border-l border-secondary -ml-px"
                        : "text-white/30 hover:text-white/55"
                    }`}
                  >
                    {h.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* Desktop sticky TOC */}
      <aside className="hidden xl:block fixed left-[max(1.5rem,calc(50%-40rem))] top-28 w-52">
        <nav>
          <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em] mb-4">On this page</p>
          <ul className="space-y-0.5 border-l border-white/[0.06]">
            {headings.map(h => (
              <li key={h.id}>
                <a
                  href={`#${h.id}`}
                  className={`block text-[12.5px] leading-snug py-1 transition-all duration-200 ${
                    h.level === 3 ? "pl-5" : "pl-3"
                  } ${
                    activeId === h.id
                      ? "text-secondary border-l border-secondary -ml-px font-medium"
                      : "text-white/25 hover:text-white/50"
                  }`}
                >
                  {h.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

const BlogPost: NextPage<Props> = ({ source, meta, headings, wordCount }) => {
  return (
    <>
      <Head>
        <title>{meta.title} — Sand Garden</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={`${meta.title} — Sand Garden`} />
        <meta property="og:description" content={meta.description} />
        <meta
          property="og:image"
          content={`https://sandgarden.buidlguidl.com/api/og?title=${encodeURIComponent(meta.title)}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content={`https://sandgarden.buidlguidl.com/api/og?title=${encodeURIComponent(meta.title)}`}
        />
      </Head>

      <ProgressBar />

      <article className="max-w-[680px] mx-auto px-5 sm:px-6 py-10 sm:py-14">
        <header className="mb-14">
          <div className="flex items-center gap-3 mb-5 font-mono text-sm text-white/30">
            <span>{formatBlogDate(meta.date)}</span>
            <span className="text-white/10">|</span>
            <span>{estimateReadTime(wordCount)}</span>
          </div>
          <h1 className="text-3xl sm:text-[2.5rem] sm:leading-[1.15] font-bold text-white mb-4">{meta.title}</h1>
          <p className="text-base sm:text-lg text-white/40 leading-relaxed">{meta.description}</p>
        </header>

        <TableOfContents headings={headings} />

        <div className="text-white/65 text-base sm:text-[16.5px] leading-[1.85]">
          <MDXRemote {...source} components={components} />
        </div>
      </article>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllBlogSlugs();
  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  const { meta, content, headings } = getBlogBySlug(slug);
  const wordCount = content.split(/\s+/).filter(Boolean).length;
  const source = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeSlugify],
    },
  });
  return { props: { source, meta, headings, wordCount } };
};

export default BlogPost;
