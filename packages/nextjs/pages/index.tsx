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
        <div className="space-y-4 mb-10">
          <p>
            We&apos;re a small team building the AI layer for the Ethereum developer stack. Born from BuidlGuidl, our
            focus sits across three pillars: making Ethereum dev tooling AI-native, rebuilding how developers learn
            Solidity with AI, and going deep on the AI research.
          </p>
          <p>
            On the dev tooling side, we&apos;re turning years of{" "}
            <a href="https://scaffoldeth.io" className="link link-primary">
              Scaffold-ETH
            </a>{" "}
            and BuidlGuidl knowledge into an open-source plugin any builder can drop into their agent workflow. AI
            writes Ethereum code the way the best contributors in the ecosystem would, using our curated set of skills,
            MCPs and prompts.
          </p>
          <p>
            On the education side, we&apos;re adding AI tutors to{" "}
            <a href="https://speedrunethereum.com" className="link link-primary">
              Speedrun Ethereum
            </a>
            . Personalized guidance that adapts it&apos;s pace to each learner&apos;s level, letting builders to ship
            without the friction of coding environments, and letting cracked devs go as deep as they want. All of this
            without replacing the rigor of onchain automated grading.
          </p>
          <p>
            On the research side, the agent ecosystem moves fast and heavy abstractions go stale quickly. So we work
            close to the primitives, building minimal tools, RAG pipelines, and agent skills scoped to specific
            problems.
          </p>
          <p>
            Quality over quantity, always iterating. Learn more about our work at{" "}
            <Link href="/projects" className="link link-primary">
              /projects
            </Link>
            .
          </p>
          <p>
            We&apos;re always up for building with good teams.{" "}
            <a href="mailto:sandgarden@buidlguidl.com" className="link link-primary">
              Get in touch.
            </a>
          </p>
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
