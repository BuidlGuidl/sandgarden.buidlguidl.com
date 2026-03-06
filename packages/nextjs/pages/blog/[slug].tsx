import { useState } from "react";
import Head from "next/head";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { BlogHeading, BlogMeta, getAllBlogSlugs, getBlogBySlug } from "~~/services/blog";

const components: Record<string, any> = {
  h2: ({ children, id }: { children?: React.ReactNode; id?: string }) => (
    <h2
      id={id}
      className="text-secondary font-bold text-xl sm:text-2xl mt-14 mb-3 pt-6 border-t border-white/[0.06] scroll-mt-8"
    >
      {children}
    </h2>
  ),
  h3: ({ children, id }: { children?: React.ReactNode; id?: string }) => (
    <h3 id={id} className="text-white/90 font-semibold text-lg sm:text-xl mt-10 mb-2 scroll-mt-8">
      {children}
    </h3>
  ),
  p: ({ children }: { children?: React.ReactNode }) => <p className="my-5 leading-[1.8]">{children}</p>,
  blockquote: ({ children }: { children?: React.ReactNode }) => (
    <blockquote className="border-l-2 border-secondary/40 pl-5 py-2 my-6 bg-white/[0.03] rounded-r text-white/50 italic">
      {children}
    </blockquote>
  ),
  a: ({ href, children }: { href?: string; children?: React.ReactNode }) => {
    const isExternal = href?.startsWith("http");
    return (
      <a
        href={href}
        className="link link-primary"
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  },
  pre: ({ children }: { children?: React.ReactNode }) => {
    // Extract language from the child code element's className
    const childProps = (children as any)?.props;
    const className = childProps?.className || "";
    const langMatch = className.match(/language-(\w+)/);
    const lang = langMatch ? langMatch[1] : null;

    return (
      <div className="relative my-6 group">
        {lang && (
          <div className="absolute top-0 right-0 px-3 py-1 text-xs font-mono text-white/30 bg-white/[0.05] rounded-bl-lg rounded-tr-lg">
            {lang}
          </div>
        )}
        <pre className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-5 overflow-x-auto text-[0.85em] font-mono text-primary-content leading-relaxed">
          {children}
        </pre>
      </div>
    );
  },
  code: ({ children, className }: { children?: React.ReactNode; className?: string }) => {
    if (className) return <code className={className}>{children}</code>;
    return (
      <code className="bg-white/[0.08] text-primary-content px-1.5 py-0.5 rounded-md text-[0.85em] font-mono">
        {children}
      </code>
    );
  },
  strong: ({ children }: { children?: React.ReactNode }) => (
    <strong className="text-white font-semibold">{children}</strong>
  ),
  ul: ({ children }: { children?: React.ReactNode }) => (
    <ul className="my-5 space-y-2.5 list-disc list-outside pl-5 marker:text-white/20">{children}</ul>
  ),
  li: ({ children }: { children?: React.ReactNode }) => <li className="leading-[1.8] pl-1">{children}</li>,
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

interface Props {
  source: MDXRemoteSerializeResult;
  meta: BlogMeta;
  headings: BlogHeading[];
}

const TableOfContents = ({ headings }: { headings: BlogHeading[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (headings.length === 0) return null;

  return (
    <>
      {/* Mobile TOC toggle */}
      <div className="xl:hidden mb-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-sm font-mono text-white/40 hover:text-white/60 transition-colors"
        >
          <span className="text-xs">{isOpen ? "▼" : "▶"}</span>
          Table of Contents
        </button>
        {isOpen && (
          <nav className="mt-3 pl-1 border-l border-white/[0.06]">
            <ul className="space-y-2">
              {headings.map(h => (
                <li key={h.id} className={h.level === 3 ? "pl-4" : ""}>
                  <a
                    href={`#${h.id}`}
                    onClick={() => setIsOpen(false)}
                    className="text-sm text-white/40 hover:text-white/70 transition-colors block leading-snug"
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
      <aside className="hidden xl:block fixed left-[max(1rem,calc(50%-38rem))] top-32 w-56">
        <nav>
          <p className="text-xs font-mono text-white/30 uppercase tracking-wider mb-3">On this page</p>
          <ul className="space-y-2 border-l border-white/[0.06]">
            {headings.map(h => (
              <li key={h.id} className={h.level === 3 ? "pl-6" : "pl-3"}>
                <a
                  href={`#${h.id}`}
                  className="text-[13px] text-white/30 hover:text-white/60 transition-colors block leading-snug"
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

const BlogPost: NextPage<Props> = ({ source, meta, headings }) => {
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

      <article className="max-w-3xl mx-auto px-4 py-8">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4 font-mono text-sm text-white/35">
            <span>{meta.date}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-white">{meta.title}</h1>
        </header>

        <TableOfContents headings={headings} />

        <div className="text-white/70 text-base sm:text-[17px] leading-[1.8]">
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
  const source = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeSlugify],
    },
  });
  return { props: { source, meta, headings } };
};

export default BlogPost;
