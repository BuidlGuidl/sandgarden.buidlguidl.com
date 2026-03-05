import Head from "next/head";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { BlogMeta, getAllBlogSlugs, getBlogBySlug } from "~~/services/blog";

const codeCls = "bg-white/5 text-primary-content px-1 py-0.5 rounded text-[0.85em] font-mono";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const components: Record<string, any> = {
  h2: ({ children }: { children?: React.ReactNode }) => (
    <h2 className="text-secondary font-bold text-lg sm:text-xl mt-10 mb-1">{children}</h2>
  ),
  h3: ({ children }: { children?: React.ReactNode }) => (
    <h3 className="text-white/90 font-semibold text-base sm:text-lg mt-8 mb-1">{children}</h3>
  ),
  blockquote: ({ children }: { children?: React.ReactNode }) => (
    <blockquote className="border-l-2 border-secondary/40 pl-4 py-1 my-4 bg-white/[0.03] rounded-r text-white/50 italic">
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
  pre: ({ children }: { children?: React.ReactNode }) => (
    <pre className="bg-white/5 rounded-lg p-4 overflow-x-auto text-[0.85em] font-mono text-primary-content my-4">
      {children}
    </pre>
  ),
  code: ({ children, className }: { children?: React.ReactNode; className?: string }) => {
    // If inside a <pre> (fenced code block), render without inline styling
    if (className) return <code>{children}</code>;
    return <code className={codeCls}>{children}</code>;
  },
  strong: ({ children }: { children?: React.ReactNode }) => (
    <strong className="text-white font-semibold">{children}</strong>
  ),
  ul: ({ children }: { children?: React.ReactNode }) => <ul className="mt-4 space-y-3 list-none">{children}</ul>,
  li: ({ children }: { children?: React.ReactNode }) => (
    <li className="flex items-start gap-3">
      <span className="text-primary-content/40 font-mono shrink-0 mt-0.5">—</span>
      <span>{children}</span>
    </li>
  ),
  table: ({ children }: { children?: React.ReactNode }) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }: { children?: React.ReactNode }) => (
    <thead className="border-b border-white/10">{children}</thead>
  ),
  tbody: ({ children }: { children?: React.ReactNode }) => <tbody>{children}</tbody>,
  tr: ({ children }: { children?: React.ReactNode }) => <tr className="border-b border-white/5">{children}</tr>,
  th: ({ children }: { children?: React.ReactNode }) => (
    <th className="text-left py-2 px-3 text-white/90 font-semibold">{children}</th>
  ),
  td: ({ children }: { children?: React.ReactNode }) => <td className="py-2 px-3 text-white/70">{children}</td>,
};

interface Props {
  source: MDXRemoteSerializeResult;
  meta: BlogMeta;
}

const BlogPost: NextPage<Props> = ({ source, meta }) => {
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

      <article className="max-w-3xl px-4 py-8">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4 font-mono text-sm text-white/35">
            <span>{meta.date}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-white">{meta.title}</h1>
        </header>

        <div className="space-y-5 text-white/70 leading-relaxed text-sm sm:text-base mb-10">
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
  const { meta, content } = getBlogBySlug(slug);
  const source = await serialize(content);
  return { props: { source, meta } };
};

export default BlogPost;
