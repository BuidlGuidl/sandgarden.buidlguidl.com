import fs from "fs";
import matter from "gray-matter";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogMeta {
  title: string;
  date: string;
  description: string;
  slug: string;
  url: string;
}

export function getAllBlogSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter(f => f.endsWith(".md"))
    .map(f => f.replace(/\.md$/, ""));
}

export function getAllBlogs(): BlogMeta[] {
  return getAllBlogSlugs()
    .map(slug => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.md`), "utf8");
      const { data } = matter(raw);
      return {
        title: data.title,
        date: data.date,
        description: data.description,
        slug,
        url: `/blog/${slug}`,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getBlogBySlug(slug: string): { meta: BlogMeta; content: string } {
  const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);
  return {
    meta: {
      title: data.title,
      date: data.date,
      description: data.description,
      slug,
      url: `/blog/${slug}`,
    },
    content,
  };
}
