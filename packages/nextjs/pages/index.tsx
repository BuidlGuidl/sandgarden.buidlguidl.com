import React from "react";
import Link from "next/link";
import type { NextPage } from "next";
import { POST as aiNativePost } from "~~/pages/blog/ai-native-ethereum-stack";

const BLOG_POSTS = [aiNativePost];

const Home: NextPage = () => {
  return (
    <>
      <div className="max-w-3xl px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-primary-content bg-primary inline-block p-2">Sand Garden</h1>

        <div className="space-y-6 mb-10">
          <section className="space-y-2">
            <p>We&apos;re a small team building the AI layer of the Ethereum developer stack.</p>
            <p>
              We explore the edges of AI, researching how to practically apply it to developer tooling and education.
            </p>
          </section>

          <section className="space-y-1">
            <h2 className="text-lg font-semibold text-secondary">Tooling</h2>
            <p>
              We&apos;re turning years of Scaffold-ETH and BuidlGuidl experience into open-source AI building blocks:
              skills, MCPs, and prompts that give AI the context it needs to build dapps &quot;the Ethereum way&quot;.
            </p>
          </section>

          <section className="space-y-1">
            <h2 className="text-lg font-semibold text-secondary">Education</h2>
            <p>We&apos;re bringing AI tutors into Speedrun Ethereum.</p>
            <p>
              Think personalized guidance that adapts to your pace. It empowers builders to ship dapps without the
              friction of a coding environment, while letting cracked devs dive as deep as they want.
            </p>
            <p>All while keeping the rigor of onchain automated grading.</p>
          </section>

          <section className="space-y-1">
            <h2 className="text-lg font-semibold text-secondary">Research</h2>
            <p>The agent ecosystem moves fast, so we try to stay close to the primitives.</p>
            <p>
              No heavy frameworks. We focus on small, composable pieces: minimal tools, clean RAG pipelines, and
              laser-focused agent skills.
            </p>
          </section>

          <section className="space-y-2">
            <p>
              Build, test, adjust, repeat. See what we&apos;re currently building at{" "}
              <Link href="/projects" className="link link-primary">
                /projects
              </Link>
              .
            </p>
            <p>
              If you&apos;re building something interesting and see an overlap,{" "}
              <a href="mailto:sandgarden@buidlguidl.com" className="link link-primary">
                let&apos;s talk.
              </a>
            </p>
          </section>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Latest Posts</h2>
          <div className="space-y-3">
            {BLOG_POSTS.map((post, i) => (
              <a
                key={i}
                href={post.url}
                className="block py-3 border-b border-base-200 hover:border-primary transition-colors group"
              >
                <span className="block text-base text-base-content group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </span>
                <span className="flex items-center gap-2 mt-1 text-sm text-base-content/50">
                  <span>{post.date}</span>
                  {post.tags.length > 0 && (
                    <>
                      <span>·</span>
                      {post.tags.map(tag => (
                        <span key={tag} className="text-primary/70">
                          {tag}
                        </span>
                      ))}
                    </>
                  )}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
