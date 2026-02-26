import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { POST as aiNativePost } from "~~/pages/blog/ai-native-ethereum-stack";

const BLOG_POSTS = [aiNativePost];

const FEATURED_PROJECTS = [
  {
    name: "Scaffold-ETH 2",
    description: "An open-source toolkit for building decentralized applications on Ethereum.",
    href: "https://github.com/scaffold-eth/scaffold-eth-2",
  },
  {
    name: "SpeedRunEthereum",
    description: "A platform to learn how to build on Ethereum; the superpowers and the gotchas.",
    href: "https://speedrunethereum.com",
  },
  {
    name: "Capture the Flag",
    description: "Ethereum CTF challenges with seasons from Devcon Bangkok and Devconnect Buenos Aires.",
    href: "https://ctf.buidlguidl.com",
  },
];

const COLLABORATORS = [
  { name: "Ethereum Foundation", href: "https://ethereum.foundation", logo: "/logos/ef.png" },
  { name: "Arbitrum", href: "https://arbitrum.foundation/", logo: "/logos/arbitrum.svg" },
  { name: "ENS", href: "https://ens.domains", logo: "/logos/ens.png" },
  { name: "Optimism", href: "https://optimism.io", logo: "/logos/op-logo.svg" },
];

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 px-4 py-8 max-w-5xl">
        <div className="flex-1 max-w-3xl flex flex-col">
          {/* Hero */}
          <div className="order-1">
            <h1 className="text-4xl font-bold text-primary-content bg-primary inline-block p-2">Sand Garden</h1>
            <p className="text-sm uppercase tracking-widest text-base-content/50 font-semibold mt-1">
              Tooling · Education · Research
            </p>
          </div>

          <div className="space-y-6 mb-4 order-2">
            <section className="space-y-2">
              <p>
                We&apos;re a{" "}
                <a
                  href="https://buidlguidl.com"
                  className="link link-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BuidlGuidl
                </a>{" "}
                team working on the AI layer of the Ethereum developer stack, turning research into practical tools and
                education for builders.
              </p>
            </section>
          </div>

          {/* Latest Posts — inline on mobile, hidden on desktop (shown in sidebar) */}
          <div className="mb-10 order-3 lg:hidden border-l border-primary/30 pl-4">
            <h2 className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">Latest Posts</h2>
            <div className="space-y-3">
              {BLOG_POSTS.map((post, i) => (
                <a key={i} href={post.url} className="block group">
                  <span className="block text-sm text-base-content group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </span>
                  <span className="flex flex-wrap items-center gap-1.5 mt-1 text-xs text-base-content/70">
                    <span>{post.date}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="mb-10 order-4">
            <h2 className="text-lg lg:text-2xl font-bold mb-4 text-base-content/80">Featured Projects</h2>
            <div className="space-y-4">
              {FEATURED_PROJECTS.map(project => (
                <div key={project.name}>
                  <a
                    href={project.href}
                    className="font-bold text-secondary hover:underline underline-offset-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                  </a>
                  <p className="mt-0.5 text-sm text-base-content/70">{project.description}</p>
                </div>
              ))}
            </div>
            <Link href="/projects" className="inline-block mt-4 text-sm link link-primary">
              View all projects &rarr;
            </Link>
          </div>

          <div className="mb-10 order-5">
            <h2 className="text-lg lg:text-2xl font-bold mb-4 text-base-content/80">Collaborators</h2>
            <div className="flex flex-wrap items-center gap-6">
              {COLLABORATORS.map(client => (
                <a
                  key={client.name}
                  href={client.href}
                  className="opacity-90 hover:opacity-100 transition-opacity bg-white/90 rounded-md px-3 py-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={client.logo} alt={client.name} width={140} height={48} className="h-8 w-auto" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar — desktop only */}
        <aside className="hidden lg:block lg:w-56 lg:pt-20 shrink-0">
          <div className="lg:sticky lg:top-8 border-l border-primary/30 pl-4">
            <h2 className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">Latest Posts</h2>
            <div className="space-y-3">
              {BLOG_POSTS.map((post, i) => (
                <a key={i} href={post.url} className="block group">
                  <span className="block text-sm text-base-content group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </span>
                  <span className="flex flex-wrap items-center gap-1.5 mt-1 text-xs text-base-content/70">
                    <span>{post.date}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Home;
