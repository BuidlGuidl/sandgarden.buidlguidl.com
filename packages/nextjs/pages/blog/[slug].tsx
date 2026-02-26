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
  code: ({ children }: { children?: React.ReactNode }) => <code className={codeCls}>{children}</code>,
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
      </Head>

      <article className="max-w-2xl px-4 py-12 mx-auto">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4 font-mono text-sm text-white/35">
            <span>{meta.date}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-white">{meta.title}</h1>
        </header>

        {/* Body */}
        <div className="space-y-5 text-white/70 leading-relaxed text-sm sm:text-base">
          <MDXRemote {...source} components={components} />
        </div>

        {/* Footer */}
        <div className="mt-16 pt-6 border-t border-white/10 font-mono text-sm text-white/35">
          <p>
            Questions or want to build together?{" "}
            <a href="mailto:sandgarden@buidlguidl.com" className="link link-primary">
              sandgarden@buidlguidl.com
            </a>
          </p>
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
