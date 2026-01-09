import React, { useEffect, useRef, useState } from "react";
import { Share_Tech_Mono } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import type { NextPage } from "next";

const shareTechMono = Share_Tech_Mono({ subsets: ["latin"], weight: "400" });

// Slide data structure for future extensibility
const slides = [
  {
    id: "speedrun",
    title: "Speedrun Ethereum",
    shortTitle: "SRE",
  },
  {
    id: "scaffold-eth",
    title: "Scaffold-ETH 2",
    shortTitle: "SE2",
  },
  {
    id: "educational",
    title: "Educational Initiatives",
    shortTitle: "EDU",
  },
  {
    id: "ecosystem",
    title: "Ecosystem Collaborations",
    shortTitle: "ECO",
  },
  {
    id: "misc",
    title: "Misc",
    shortTitle: "MISC",
  },
];

// Stats component with terminal/linux aesthetic
const StatCard = ({ value, label, growth }: { value: string; label: string; growth?: string }) => (
  <div className="group">
    {/* Terminal-style card */}
    <div className="border border-neutral-content/20 px-4 py-2 transition-colors duration-200 hover:border-neutral-content/40">
      {/* Top bar like terminal window */}
      <div className="flex items-center gap-2 text-neutral-content/30 text-xs">
        <span>┌</span>
        <span className="flex-1 border-t border-neutral-content/20" />
        <span>─</span>
      </div>

      {/* Content - centered both vertically and horizontally */}
      <div className="flex flex-col py-4 items-center text-center">
        <span className="text-3xl md:text-4xl font-bold text-primary-content tracking-tight">{value}</span>
        {growth && <span className="text-secondary text-sm mt-1">{growth}</span>}
        <span className="text-neutral-content/50 text-sm mt-2">{label}</span>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center gap-2 text-neutral-content/30 text-xs">
        <span>└</span>
        <span className="flex-1 border-t border-neutral-content/20" />
        <span>┘</span>
      </div>
    </div>
  </div>
);

// Side navigation - larger with full project names
const SideNav = ({ activeSlide, onNavigate }: { activeSlide: string; onNavigate: (slideId: string) => void }) => (
  <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
    {slides.map(slide => (
      <button
        key={slide.id}
        onClick={() => onNavigate(slide.id)}
        className={`flex items-center gap-3 transition-all duration-200 text-sm ${
          activeSlide === slide.id ? "text-primary-content" : "text-neutral-content/40 hover:text-neutral-content/70"
        }`}
      >
        <span
          className={`block w-1.5 h-1.5 transition-all duration-200 ${
            activeSlide === slide.id ? "bg-primary scale-125" : "bg-neutral-content/30"
          }`}
        />
        <span className={`transition-all duration-200 ${activeSlide === slide.id ? "font-medium" : ""}`}>
          {slide.title}
        </span>
      </button>
    ))}
  </nav>
);

// First slide: Speedrun Ethereum
const SpeedrunSlide = () => {
  const tasks = [
    "Migrate challenges to extensions for easier maintenance and compatibility with future Scaffold-ETH 2 upgrades (July)",
    "Launch Speedrun Ethereum v2 built with Scaffold-ETH 2 (April - May)",
    "Added builder portfolio page and side quests",
    "Migrate old builds from BuidlGuidl v3 + categorization",
    "Created 23 Solidity guides and launched Google Ads campaigns (~100% organic traffic increase)",
    "Improve conversion tracking and traffic sources",
    "Supported the launch of 5 new challenges",
    "Gather feedback from Speedrunners (SRE impact on their careers and feedback gathering on SRE platform)",
  ];

  return (
    <section
      id="speedrun"
      className="min-h-screen pt-20 pb-16 lg:pt-16 lg:pb-0 lg:h-screen lg:snap-start lg:snap-always flex items-center relative overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-0 relative z-10">
        {/* Section indicator */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs text-white/80 uppercase tracking-[0.3em]">Project 01</span>
          <span className="w-48 lg:w-64 h-px bg-neutral-content/20" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left column - main content */}
          <div className="flex-1 max-w-2xl">
            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-primary-content">Speedrun</span>
              <br />
              <span className="text-primary">Ethereum</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-neutral-content/70 mb-12 leading-relaxed">
              <span className="text-primary-content">Our flagship educational product.</span> In 2025, we doubled down
              by upgrading to Scaffold-ETH 2 and shipping targeted UX, SEO, and gamification improvements—increasing
              reach, signups, and challenge submissions.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <StatCard value="92.4k" label="Unique Visitors" growth="+74% from 2024" />
              <StatCard value="5,700" label="Unique Signups" growth="+114% from 2024" />
              <StatCard value="5,900" label="Challenge Submissions" growth="+40% from 2024" />
            </div>
          </div>

          {/* Right column - tasks & achievements */}
          <div className="lg:w-96">
            <div className="border-l border-neutral-content/20 pl-6">
              <p className="text-xs text-neutral-content/40 uppercase tracking-widest mb-4">Tasks & Achievements</p>
              <div className="grid gap-3">
                {tasks.map((task, index) => (
                  <div key={index} className="flex items-start gap-3 text-neutral-content/70">
                    <span className="text-secondary mt-0.5 text-xs">◆</span>
                    <span className="text-sm leading-relaxed">{task}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-content/30">
        <span className="text-xs uppercase tracking-widest">More projects below</span>
        <span className="animate-bounce">↓</span>
      </div>
    </section>
  );
};

// Second slide: Scaffold-ETH 2 Ecosystem
const ScaffoldEthSlide = () => {
  const [activeTab, setActiveTab] = useState<string | null>("toolkit");

  const subgroups = [
    {
      id: "toolkit",
      title: "Toolkit",
      tasks: [
        "Allowing SE-2 to deploy to IPFS",
        "SE-2 added in Mastering Ethereum v2 book",
        "Tailwind v4 + Daisy v5 Migration",
        "Encrypted Private Key",
        "Migration toward Next 15",
        "Makes docs more AI compatible with llm-full.txt files (Mar)",
        'Add custom Cursor rules to enhance DX (easier to "1shot" dapps) (Apr)',
        "Migrate the docs to viem framework for better style, more AI compatibility (like ask ChatGPT), dynamic unfurl etc.",
      ],
    },
    {
      id: "create-eth",
      title: "create-eth CLI",
      tasks: [
        "Better documentation for extension creators with an args file example",
        "Normalize all the template args + allow more extensible system for extension developers",
        "Fix the github api rate limit error",
        "Expose the selected variable by user to extension developer via global variables",
        "Main extensions added: porto, x402, eip-5792",
      ],
    },
    {
      id: "website",
      title: "Website",
      tasks: [
        "Built Scaffold-ETH 2 usage tracker and sent over 5000 repos using SE-2 to electric-capital/open-dev-data (Nov + Dec)",
        "Shipped projects.scaffoldeth.io with SE-2 usage stats (Dec), with stats and direct link from SE-2 homepage",
        'Added "Build an app on Ethereum in 8 minutes" video to the website',
      ],
    },
    {
      id: "scaffold-ui",
      title: "Scaffold-UI",
      tasks: [
        "Shipped this standalone package of reusable hooks and UI components extracted from Scaffold-ETH",
        "Monorepo setup with docs + example setup + packages setup",
        "3 npm packages available (components, hooks, debug-contracts)",
      ],
    },
    {
      id: "burner-connector",
      title: "Burner Connector",
      tasks: ["Maintenance", "Add compatibility with EIP-5792"],
    },
  ];

  return (
    <section
      id="scaffold-eth"
      className="min-h-screen py-16 lg:py-0 lg:h-screen lg:snap-start lg:snap-always flex items-center relative overflow-hidden border-t border-neutral-content/10"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section indicator */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs text-white/80 uppercase tracking-[0.3em]">Project 02</span>
          <span className="w-48 lg:w-64 h-px bg-neutral-content/20" />
        </div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left column - title and description */}
          <div className="lg:w-2/5">
            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-primary-content">Scaffold-ETH 2</span>
              <br />
              <span className="text-primary">Ecosystem</span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-neutral-content/70 mb-8 leading-relaxed">
              <span className="text-primary-content">
                Our modular toolkit for bootstrapping full-stack Ethereum apps.
              </span>{" "}
              In 2025, we simplified the core, extracted reusable packages, expanded extensions to better support
              onboarding and ecosystem integrations, and made it AI-ready.
            </p>

            {/* Main stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <StatCard value="2,243+" label="Public and Tracked" growth="repositories created" />
              <StatCard value="78k" label="Burner Connector package" growth="npm downloads" />
            </div>
          </div>

          {/* Right column - terminal-style tabbed interface */}
          <div className="lg:w-1/2">
            {/* Terminal window frame */}
            <div className="border border-neutral-600 rounded-lg overflow-hidden">
              {/* Terminal title bar */}
              <div className="flex items-stretch bg-neutral-700 border-b border-neutral-600">
                {/* Window controls (decorative) */}
                <div className="flex items-center gap-2 px-3 py-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                {/* Tab headers - macOS terminal style */}
                {subgroups.map(group => (
                  <button
                    key={group.id}
                    onClick={() => setActiveTab(group.id)}
                    className={`flex-1 min-w-0 flex items-center justify-center px-2 text-xs whitespace-nowrap border-l border-neutral-600 transition-all duration-200 ${
                      activeTab === group.id ? "text-white font-medium" : "text-neutral-400 hover:text-neutral-200"
                    }`}
                    style={{
                      backgroundColor: activeTab === group.id ? "#6b7280" : "transparent",
                    }}
                    title={group.title}
                  >
                    {group.title}
                  </button>
                ))}
              </div>

              {/* Terminal content area - black background */}
              <div className="bg-black p-6">
                {/* Active tab content */}
                <div className="animate-fadeIn">
                  {subgroups
                    .filter(g => g.id === activeTab)
                    .map(group => (
                      <div key={group.id}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="flex items-center gap-2 text-primary text-sm">
                            <span>$</span>
                            <span className="text-neutral-content/70">cat</span>
                            <span className="text-secondary">
                              {group.title.toLowerCase().replace(/\s+/g, "-")}-accomplished-tasks.md
                            </span>
                          </div>
                        </div>

                        <div className="grid gap-2 mt-2">
                          {group.tasks.map((task, index) => (
                            <div key={index} className="flex items-start gap-3 text-neutral-content/70">
                              <span className="text-secondary text-xs">◆</span>
                              <span className="text-sm leading-relaxed">{task}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-content/30">
        <span className="text-xs uppercase tracking-widest">More projects below</span>
        <span className="animate-bounce">↓</span>
      </div>
    </section>
  );
};

// Third slide: Educational Initiatives
const EducationalSlide = () => {
  const [activeTab, setActiveTab] = useState<string | null>("ctf");

  const initiatives = [
    {
      id: "ctf",
      title: "Capture The Flag",
      content: (
        <>
          <p className="text-neutral-content/70 text-sm leading-relaxed mb-6">
            Hands-on security learning platform that challenges developers to solve real-world Web3 vulnerabilities. In
            2025, we launched the CTF as a live, always-on platform and expanded it with a second season.
          </p>

          {/* CTF Highlights */}
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-primary text-xl font-bold">4,400</span>
                <span className="text-neutral-content/50 text-xs">visitors</span>
              </div>
              <span className="text-neutral-content/20">│</span>
              <div className="flex items-center gap-2">
                <span className="text-secondary text-xl font-bold">1,645</span>
                <span className="text-neutral-content/50 text-xs">flags minted</span>
              </div>
            </div>
          </div>

          {/* CTF Milestones Timeline */}
          <p className="text-xs text-neutral-content/40 uppercase tracking-widest mb-3">Timeline</p>
          <div className="grid gap-3">
            <div className="flex items-start gap-3 text-neutral-content/70">
              <span className="text-primary text-xs mt-0.5 font-mono w-10">Jan</span>
              <span className="text-sm">Opened Devcon CTF as a live platform for anyone to play at any moment</span>
            </div>
            <div className="flex items-start gap-3 text-neutral-content/70">
              <span className="text-primary text-xs mt-0.5 font-mono w-10">Nov</span>
              <span className="text-sm">Created new CTF for Devconnect Argentina, played with 30 teams</span>
            </div>
            <div className="flex items-start gap-3 text-neutral-content/70">
              <span className="text-primary text-xs mt-0.5 font-mono w-10">Dec</span>
              <span className="text-sm">Added S2 (Buenos Aires) to live platform - now choose between S1 or S2</span>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "workshops",
      title: "Workshops",
      content: (
        <>
          <p className="text-neutral-content/70 text-sm leading-relaxed mb-6">
            Not a core focus in 2025, but we played a key supporting role at Devconnect planning and executing
            BuidlGuidl{"'"}s four-day Builder Bootcamp in Buenos Aires.
          </p>

          {/* Devconnect Highlight */}
          <div className="mb-6 p-4 border border-neutral-content/10 bg-neutral-content/5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-neutral-content/40 uppercase tracking-widest">
                Builder Bootcamp • Nov 18-21
              </span>
              <a
                href="https://devconnect.buidlguidl.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary/70 hover:text-primary text-xs"
              >
                View schedule →
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-primary text-xl font-bold">4</span>
                <span className="text-neutral-content/50 text-xs">days</span>
              </div>
              <span className="text-neutral-content/20">│</span>
              <div className="flex items-center gap-2">
                <span className="text-secondary text-xl font-bold">19</span>
                <span className="text-neutral-content/50 text-xs">workshops</span>
              </div>
            </div>
          </div>

          {/* Sand Garden Sessions */}
          <p className="text-xs text-neutral-content/40 uppercase tracking-widest mb-3">
            Sand Garden Sessions at Devconnect
          </p>
          <div className="grid gap-2 mb-6">
            <div className="flex items-start gap-3 text-neutral-content/70">
              <span className="text-secondary text-xs">◆</span>
              <span className="text-sm">Unveiling Scaffold UI</span>
            </div>
            <div className="flex items-start gap-3 text-neutral-content/70">
              <span className="text-secondary text-xs">◆</span>
              <span className="text-sm">Leveraging AI to build on Ethereum</span>
            </div>
            <div className="flex items-start gap-3 text-neutral-content/70">
              <span className="text-secondary text-xs">◆</span>
              <span className="text-sm">Capture the Flag session</span>
            </div>
          </div>

          {/* Other workshops */}
          <p className="text-xs text-neutral-content/40 uppercase tracking-widest mb-3">Other Events</p>
          <div className="grid gap-2">
            <div className="flex items-start gap-3 text-neutral-content/70">
              <span className="text-neutral-content/40 text-xs">◇</span>
              <span className="text-sm">aigentsbcn event support (Feb)</span>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <section
      id="educational"
      className="min-h-screen py-16 lg:py-0 lg:h-screen lg:snap-start lg:snap-always flex items-center relative overflow-hidden border-t border-neutral-content/10"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section indicator */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs text-white/80 uppercase tracking-[0.3em]">Project 03</span>
          <span className="w-48 lg:w-64 h-px bg-neutral-content/20" />
        </div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left column - title and description */}
          <div className="lg:w-2/5">
            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-primary-content">Educational</span>
              <br />
              <span className="text-primary">Initiatives</span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-neutral-content/70 mb-8 leading-relaxed">
              <span className="text-primary-content">Beyond our flagship products.</span> In 2025, we ran security
              challenges through our CTF platform and contributed to key community events, including BuidlGuidl{"'"}s
              Builder Bootcamp at Devconnect Buenos Aires.
            </p>

            {/* Main stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <StatCard value="1,600+" label="" growth="Flags minted" />
              <StatCard value="20+" label="" growth="Workshops" />
            </div>
          </div>

          {/* Right column - terminal-style tabbed interface */}
          <div className="lg:w-1/2">
            {/* Terminal window frame */}
            <div className="border border-neutral-600 rounded-lg overflow-hidden">
              {/* Terminal title bar */}
              <div className="flex items-stretch bg-neutral-700 border-b border-neutral-600">
                {/* Window controls (decorative) */}
                <div className="flex items-center gap-2 px-3 py-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                {/* Tab headers - macOS terminal style */}
                {initiatives.map(initiative => (
                  <button
                    key={initiative.id}
                    onClick={() => setActiveTab(initiative.id)}
                    className={`flex-1 min-w-0 flex items-center justify-center px-4 text-xs whitespace-nowrap border-l border-neutral-600 transition-all duration-200 ${
                      activeTab === initiative.id ? "text-white font-medium" : "text-neutral-400 hover:text-neutral-200"
                    }`}
                    style={{
                      backgroundColor: activeTab === initiative.id ? "#6b7280" : "transparent",
                    }}
                    title={initiative.title}
                  >
                    {initiative.title}
                  </button>
                ))}
              </div>

              {/* Terminal content area - black background */}
              <div className="bg-black p-6">
                {/* Active tab content */}
                <div className="animate-fadeIn">
                  {initiatives
                    .filter(i => i.id === activeTab)
                    .map(initiative => (
                      <div key={initiative.id}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="flex items-center gap-2 text-primary text-sm">
                            <span>$</span>
                            <span className="text-neutral-content/70">cat</span>
                            <span className="text-secondary">
                              {initiative.title.toLowerCase().replace(/\s+/g, "-")}-2025.md
                            </span>
                          </div>
                        </div>
                        {initiative.content}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-content/30">
        <span className="text-xs uppercase tracking-widest">More projects below</span>
        <span className="animate-bounce">↓</span>
      </div>
    </section>
  );
};

// Fourth slide: Ecosystem Collaborations
const EcosystemSlide = () => {
  const [activeTab, setActiveTab] = useState<string | null>("ens");

  const collaborations = [
    {
      id: "ens",
      title: "ENS Grants",
      tasks: [
        "Launched the new milestone-based USDC grants features",
        "Added milestones and enhanced admin workflow to ETH grants",
        "⇒ 4,100 unique visitors",
        "⇒ 241 applications submitted in 2025, 42 approved",
        "⇒ ~50 ETH and 65k USDC granted to projects",
      ],
    },
    {
      id: "arbitrum",
      title: "Arbitrum",
      content: (
        <>
          <p className="text-neutral-content/70 text-sm leading-relaxed mb-6">
            Launched the Arbitrum Cohort to build dapps on Arbitrum. Currently developing two key projects for the
            ecosystem.
          </p>

          <p className="text-xs text-white uppercase tracking-widest mb-3">Projects in Development</p>
          <div className="grid gap-4">
            <div className="p-4 border border-neutral-content/20">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-primary-content text-sm font-medium">DevCreds</span>
                  <p className="text-neutral-content/70 text-xs mt-1">
                    Developer reputation dapp for the Arbitrum ecosystem
                  </p>
                </div>
                <a
                  href="https://dev-creds.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary text-xs whitespace-nowrap"
                >
                  View →
                </a>
              </div>
            </div>
            <div className="p-4 border border-neutral-content/20">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-primary-content text-sm font-medium">Governance Dashboard</span>
                  <p className="text-neutral-content/70 text-xs mt-1">
                    Dashboard for Arbitrum governance participation and tracking
                  </p>
                </div>
                <span className="text-secondary text-xs whitespace-nowrap">WIP</span>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "jobboard",
      title: "Job Board",
      tasks: ["Launched the Ethereum Job Board in collaboration with Geode Labs", "⇒ 8,100 unique visitors"],
    },
    {
      id: "ethereumorg",
      title: "Ethereum.org",
      tasks: [
        "Built the Collectibles site for contributors",
        "Speedrun Ethereum and Scaffold-ETH are featured as main themes on ethereum.org/developers/",
      ],
    },
  ];

  return (
    <section
      id="ecosystem"
      className="min-h-screen py-16 lg:py-0 lg:h-screen lg:snap-start lg:snap-always flex items-center relative overflow-hidden border-t border-neutral-content/10"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section indicator */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs text-white/80 uppercase tracking-[0.3em]">Project 04</span>
          <span className="w-48 lg:w-64 h-px bg-neutral-content/20" />
        </div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left column - title and description */}
          <div className="lg:w-2/5">
            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-primary-content">Ecosystem</span>
              <br />
              <span className="text-primary">Collaborations</span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-neutral-content/70 mb-8 leading-relaxed">
              <span className="text-primary-content">Partnering with key players to expand Ethereum{"'"}s reach.</span>{" "}
              In 2025, we deepened our collaborations with ENS, Arbitrum, Geode Labs, and Ethereum.org building grant
              platforms, cohort programs, and developer resources that benefit the broader ecosystem.
            </p>
          </div>

          {/* Right column - terminal-style tabbed interface */}
          <div className="lg:w-1/2">
            {/* Terminal window frame */}
            <div className="border border-neutral-600 rounded-lg overflow-hidden">
              {/* Terminal title bar */}
              <div className="flex items-stretch bg-neutral-700 border-b border-neutral-600">
                {/* Window controls (decorative) */}
                <div className="flex items-center gap-2 px-3 py-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                {/* Tab headers - macOS terminal style */}
                {collaborations.map(collab => (
                  <button
                    key={collab.id}
                    onClick={() => setActiveTab(collab.id)}
                    className={`flex-1 min-w-0 flex items-center justify-center px-2 text-xs whitespace-nowrap border-l border-neutral-600 transition-all duration-200 ${
                      activeTab === collab.id ? "text-white font-medium" : "text-neutral-400 hover:text-neutral-200"
                    }`}
                    style={{
                      backgroundColor: activeTab === collab.id ? "#6b7280" : "transparent",
                    }}
                    title={collab.title}
                  >
                    {collab.title}
                  </button>
                ))}
              </div>

              {/* Terminal content area - black background */}
              <div className="bg-black p-6">
                {/* Active tab content */}
                <div className="animate-fadeIn">
                  {collaborations
                    .filter(c => c.id === activeTab)
                    .map(collab => (
                      <div key={collab.id}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="flex items-center gap-2 text-primary text-sm">
                            <span>$</span>
                            <span className="text-neutral-content/70">cat</span>
                            <span className="text-secondary">
                              {collab.title.toLowerCase().replace(/\s+/g, "-")}-highlights.md
                            </span>
                          </div>
                        </div>

                        {"content" in collab ? (
                          collab.content
                        ) : (
                          <div className="grid gap-2 mt-2">
                            {collab.tasks.map((task, index) => (
                              <div key={index} className="flex items-start gap-3 text-neutral-content/70">
                                <span className="text-secondary text-xs">
                                  {task.startsWith("⇒") || task.startsWith("◇") ? "" : "◆"}
                                </span>
                                <span className="text-sm leading-relaxed">{task}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-content/30">
        <span className="text-xs uppercase tracking-widest">More projects below</span>
        <span className="animate-bounce">↓</span>
      </div>
    </section>
  );
};

// Fifth slide: Misc
const MiscSlide = () => {
  const [activeTab, setActiveTab] = useState<string | null>("abi-ninja");

  const miscItems = [
    {
      id: "abi-ninja",
      title: "Abi Ninja",
      content: (
        <>
          <p className="text-neutral-content/70 text-sm leading-relaxed mb-6">
            Our tool for interacting with any smart contract on any EVM chain. In 2025, we focused on maintenance and
            incremental improvements to keep it running smoothly.
          </p>

          {/* Highlights */}
          <p className="text-xs text-neutral-content/40 uppercase tracking-widest mb-3">Highlights</p>
          <div className="grid gap-2 mb-6">
            <div className="flex items-start gap-3 text-neutral-content/70">
              <span className="text-secondary text-xs">◆</span>
              <span className="text-sm">Maintenance and small features</span>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "farcaster",
      title: "Farcaster Miniapps",
      content: (
        <>
          <p className="text-neutral-content/70 text-sm leading-relaxed mb-6">
            Exploring the miniapp ecosystem after our Farcaster day at Devconnect by launching experimental games and
            interactive experiences.
          </p>

          {/* Projects */}
          <p className="text-xs text-neutral-content/40 uppercase tracking-widest mb-3">Launched Miniapps</p>
          <div className="grid gap-3 mb-6">
            <div className="flex items-start gap-3 text-neutral-content/70">
              <span className="text-secondary text-xs">◆</span>
              <span className="text-sm">
                <span className="text-primary-content">Advent Calendar</span> — Holiday-themed miniapp game
              </span>
            </div>
            <div className="flex items-start gap-3 text-neutral-content/70">
              <span className="text-secondary text-xs">◆</span>
              <span className="text-sm">
                <span className="text-primary-content">Snowman / Not Snowman</span> — Spinoff farcaster game
              </span>
            </div>
            <div className="flex items-start gap-3 text-neutral-content/70">
              <span className="text-secondary text-xs">◆</span>
              <span className="text-sm">
                <span className="text-primary-content">Bubble Tap</span> — Interactive tap game
              </span>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "ideation",
      title: "2026 Ideation",
      content: (
        <>
          <p className="text-neutral-content/70 text-sm leading-relaxed mb-6">
            Looking ahead—exploring new directions and prototyping programs to launch in the coming year.
          </p>

          {/* Projects */}
          <p className="text-xs text-white uppercase tracking-widest mb-3">Prototypes & Concepts</p>
          <div className="grid gap-4">
            <div className="p-4 border border-neutral-content/20">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-primary-content text-sm font-medium">6-Month Acceleration Program</span>
                  <p className="text-neutral-content/70 text-xs mt-1">
                    Ideation and prototyping of a structured builder program
                  </p>
                </div>
                <a
                  href="https://hack-combinator.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary text-xs whitespace-nowrap"
                >
                  View prototype →
                </a>
              </div>
            </div>
            <div className="p-4 border border-neutral-content/20">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-primary-content text-sm font-medium">Enterprise Education</span>
                  <p className="text-neutral-content/70 text-xs mt-1">
                    Mockup for enterprise-focused Ethereum education
                  </p>
                </div>
                <a
                  href="https://eadc.ethereum.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary text-xs whitespace-nowrap"
                >
                  View prototype →
                </a>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <section
      id="misc"
      className="min-h-screen py-16 lg:py-0 lg:h-screen lg:snap-start lg:snap-always flex items-center relative overflow-hidden border-t border-neutral-content/10"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section indicator */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs text-white/80 uppercase tracking-[0.3em]">Project 05</span>
          <span className="w-48 lg:w-64 h-px bg-neutral-content/20" />
        </div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left column - title and description */}
          <div className="lg:w-2/5">
            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-primary-content">Miscellaneous</span>
              <br />
              <span className="text-primary">Projects</span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-neutral-content/70 mb-8 leading-relaxed">
              <span className="text-primary-content">Side projects and experiments.</span> Beyond our main initiatives,
              we maintained useful tools, explored emerging platforms like Farcaster, and started ideating programs for
              2026.
            </p>

            {/* Main stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <StatCard value="~20k" label="" growth="Abi Ninja users" />
              <StatCard value="3" label="" growth="Farcaster Miniapps" />
            </div>
          </div>

          {/* Right column - terminal-style tabbed interface */}
          <div className="lg:w-1/2">
            {/* Terminal window frame */}
            <div className="border border-neutral-600 rounded-lg overflow-hidden">
              {/* Terminal title bar */}
              <div className="flex items-stretch bg-neutral-700 border-b border-neutral-600">
                {/* Window controls (decorative) */}
                <div className="flex items-center gap-2 px-3 py-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                {/* Tab headers - macOS terminal style */}
                {miscItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex-1 min-w-0 flex items-center justify-center px-2 text-xs whitespace-nowrap border-l border-neutral-600 transition-all duration-200 ${
                      activeTab === item.id ? "text-white font-medium" : "text-neutral-400 hover:text-neutral-200"
                    }`}
                    style={{
                      backgroundColor: activeTab === item.id ? "#6b7280" : "transparent",
                    }}
                    title={item.title}
                  >
                    {item.title}
                  </button>
                ))}
              </div>

              {/* Terminal content area - black background */}
              <div className="bg-black p-6">
                {/* Active tab content */}
                <div className="animate-fadeIn">
                  {miscItems
                    .filter(i => i.id === activeTab)
                    .map(item => (
                      <div key={item.id}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="flex items-center gap-2 text-primary text-sm">
                            <span>$</span>
                            <span className="text-neutral-content/70">cat</span>
                            <span className="text-secondary">
                              {item.title.toLowerCase().replace(/\s+/g, "-")}-2025.md
                            </span>
                          </div>
                        </div>
                        {item.content}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Page2025: NextPage = () => {
  const [activeSlide, setActiveSlide] = useState<string>("speedrun");
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to track which slide is in view
  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Trigger when slide is in the middle 20% of viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const slideId = entry.target.getAttribute("id");
          if (slideId) {
            setActiveSlide(slideId);
          }
        }
      });
    }, options);

    // Observe all slide sections
    slides.forEach(slide => {
      const element = document.getElementById(slide.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Handle smooth scroll snap navigation
  const scrollToSlide = (slideId: string) => {
    const element = document.getElementById(slideId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Head>
        <title>2025 Year in Review | Sand Garden</title>
        <meta
          name="description"
          content="Explore Sand Garden's 2025 achievements and impact on the Ethereum ecosystem"
        />
      </Head>

      <div
        ref={containerRef}
        className={`min-h-screen lg:h-screen overflow-y-auto lg:snap-y lg:snap-mandatory bg-base-100 text-base-content ${shareTechMono.className}`}
      >
        <SideNav activeSlide={activeSlide} onNavigate={scrollToSlide} />

        {/* Fixed header bar */}
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-base-100/80 backdrop-blur-sm border-b border-neutral-content/10">
          {/* Back to main site */}
          <Link
            href="/"
            className="text-primary-content hover:text-primary transition-colors text-sm flex items-center gap-2 group"
          >
            <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to site</span>
          </Link>

          {/* Title */}
          <div className="flex items-center gap-3">
            <span className="text-primary uppercase tracking-[0.3em]">Sand Garden</span>
            <span className="text-primary-content font-bold text-lg">2025 recap</span>
          </div>

          {/* Spacer for balance */}
          <div className="w-24" />
        </header>

        {/* Slides container */}
        <main>
          <SpeedrunSlide />
          <ScaffoldEthSlide />
          <EducationalSlide />
          <EcosystemSlide />
          <MiscSlide />
        </main>
      </div>
    </>
  );
};

export default Page2025;
