import React, { useState } from "react";
import { Share_Tech_Mono } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
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
const SideNav = ({ activeSlide }: { activeSlide: string }) => (
  <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
    {slides.map(slide => (
      <a
        key={slide.id}
        href={`#${slide.id}`}
        className={`flex items-center gap-3 transition-colors duration-200 text-sm ${
          activeSlide === slide.id ? "text-primary-content" : "text-neutral-content/40 hover:text-neutral-content/70"
        }`}
      >
        <span
          className={`block w-1.5 h-1.5 transition-colors duration-200 ${
            activeSlide === slide.id ? "bg-primary" : "bg-neutral-content/30"
          }`}
        />
        <span>{slide.title}</span>
      </a>
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
    <section id="speedrun" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-60" />

      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-0 relative z-10">
        {/* Section indicator */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs text-neutral-content/40 uppercase tracking-[0.3em]">Project 01</span>
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
    <section id="scaffold-eth" className="min-h-screen flex items-center relative overflow-hidden py-16 lg:py-0">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-primary to-secondary opacity-60" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section indicator */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs text-neutral-content/40 uppercase tracking-[0.3em]">Project 02</span>
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

// Third slide: Other Educational Initiatives
const EducationalSlide = () => {
  return (
    <section id="educational" className="min-h-screen flex items-center relative overflow-hidden py-16 lg:py-0">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-60" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section indicator */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs text-neutral-content/40 uppercase tracking-[0.3em]">Project 03</span>
          <span className="w-48 lg:w-64 h-px bg-neutral-content/20" />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-primary-content">Other Educational</span>
          <br />
          <span className="text-primary">Initiatives</span>
        </h1>

        {/* Two-column layout for CTF and Workshops */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* CTF Column */}
          <div className="border border-neutral-content/20 p-6">
            <div className="flex items-center gap-2 text-neutral-content/30 text-xs mb-4">
              <span>┌</span>
              <span className="flex-1 border-t border-neutral-content/20" />
              <span>3.1</span>
            </div>

            <h2 className="text-2xl font-bold text-primary-content mb-4">Capture The Flag</h2>

            <p className="text-neutral-content/70 text-sm leading-relaxed mb-6">
              Hands-on security learning platform that challenges developers to solve real-world Web3 vulnerabilities.
              In 2025, we launched the CTF as a live, always-on platform and expanded it with a second season.
            </p>

            {/* CTF Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center py-3 border border-neutral-content/10">
                <span className="text-2xl font-bold text-primary-content">4,400</span>
                <p className="text-neutral-content/50 text-xs mt-1">unique visitors</p>
              </div>
              <div className="text-center py-3 border border-neutral-content/10">
                <span className="text-2xl font-bold text-secondary">1,645</span>
                <p className="text-neutral-content/50 text-xs mt-1">flags minted</p>
              </div>
            </div>

            {/* CTF Milestones - Always visible */}
            <p className="text-xs text-neutral-content/40 uppercase tracking-widest mb-3">Milestones</p>
            <div className="grid gap-3 border-l border-neutral-content/20 pl-4">
              <div className="flex items-start gap-3 text-neutral-content/70">
                <span className="text-primary text-xs mt-0.5 w-8">Jan</span>
                <span className="text-sm">Opened Devcon CTF as a live platform for anyone to play at any moment</span>
              </div>
              <div className="flex items-start gap-3 text-neutral-content/70">
                <span className="text-primary text-xs mt-0.5 w-8">Nov</span>
                <span className="text-sm">Created new CTF for Devconnect Argentina, played with 30 teams</span>
              </div>
              <div className="flex items-start gap-3 text-neutral-content/70">
                <span className="text-primary text-xs mt-0.5 w-8">Dec</span>
                <span className="text-sm">Added S2 (Buenos Aires) to live platform - now choose between S1 or S2</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-neutral-content/30 text-xs mt-4">
              <span>└</span>
              <span className="flex-1 border-t border-neutral-content/20" />
              <span>┘</span>
            </div>
          </div>

          {/* Workshops Column */}
          <div className="border border-neutral-content/20 p-6">
            <div className="flex items-center gap-2 text-neutral-content/30 text-xs mb-4">
              <span>┌</span>
              <span className="flex-1 border-t border-neutral-content/20" />
              <span>3.2</span>
            </div>

            <h2 className="text-2xl font-bold text-primary-content mb-4">Workshops</h2>

            <p className="text-neutral-content/70 text-sm leading-relaxed mb-4">
              Not a core focus in 2025, but we played a key supporting role at Devconnect—planning and executing
              BuidlGuidl{"'"}s four-day Builder Bootcamp in Buenos Aires.
            </p>

            {/* Builder Bootcamp Schedule Image */}
            <div className="mb-6">
              <p className="text-xs text-neutral-content/40 uppercase tracking-widest mb-3">
                Builder Bootcamp at Devconnect • Nov 18-21
              </p>
              <a
                href="https://devconnect.buidlguidl.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block max-w-40 border border-neutral-content/20 hover:border-primary/50 overflow-hidden transition-all"
              >
                <Image
                  src="/bootcamp-schedule.png"
                  alt="Builder Bootcamp 4-day schedule showing packed workshop sessions"
                  width={160}
                  height={200}
                  className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
                />
              </a>
              <p className="text-neutral-content/40 text-xs mt-2">
                4 days • 19 workshops •{" "}
                <a
                  href="https://devconnect.buidlguidl.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary/70 hover:text-primary"
                >
                  View full schedule →
                </a>
              </p>
            </div>

            {/* Workshop sections - side by side on larger screens */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Sand Garden Workshops */}
              <div>
                <p className="text-xs text-neutral-content/40 uppercase tracking-widest mb-3">
                  Sand Garden at Devconnect
                </p>
                <div className="grid gap-2 border-l border-neutral-content/20 pl-4">
                  <div className="flex items-start gap-3 text-neutral-content/70">
                    <span className="text-secondary mt-0.5 text-xs">◆</span>
                    <span className="text-sm">Unveiling Scaffold UI</span>
                  </div>
                  <div className="flex items-start gap-3 text-neutral-content/70">
                    <span className="text-secondary mt-0.5 text-xs">◆</span>
                    <span className="text-sm">Leveraging AI to build on Ethereum</span>
                  </div>
                  <div className="flex items-start gap-3 text-neutral-content/70">
                    <span className="text-secondary mt-0.5 text-xs">◆</span>
                    <span className="text-sm">Capture the Flag session</span>
                  </div>
                </div>
              </div>

              {/* Personal Workshops */}
              <div>
                <p className="text-xs text-neutral-content/40 uppercase tracking-widest mb-3">Other Workshops</p>
                <div className="grid gap-2 border-l border-neutral-content/20 pl-4">
                  <div className="flex items-start gap-3 text-neutral-content/70">
                    <span className="text-neutral-content/30 mt-0.5 text-xs">◇</span>
                    <span className="text-sm">aigentsbcn event support (Feb)</span>
                  </div>
                  <div className="flex items-start gap-3 text-neutral-content/50">
                    <span className="text-neutral-content/30 mt-0.5 text-xs">◇</span>
                    <span className="text-sm italic">Shiv personal workshop (placeholder)</span>
                  </div>
                  <div className="flex items-start gap-3 text-neutral-content/50">
                    <span className="text-neutral-content/30 mt-0.5 text-xs">◇</span>
                    <span className="text-sm italic">Carlos personal workshop Malaga (placeholder)</span>
                  </div>
                  <div className="flex items-start gap-3 text-neutral-content/50">
                    <span className="text-neutral-content/30 mt-0.5 text-xs">◇</span>
                    <span className="text-sm italic">Damu personal workshops (placeholder)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-neutral-content/30 text-xs mt-4">
              <span>└</span>
              <span className="flex-1 border-t border-neutral-content/20" />
              <span>┘</span>
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
  return (
    <section id="ecosystem" className="min-h-screen flex items-center relative overflow-hidden py-16 lg:py-0">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-primary to-secondary opacity-60" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section indicator */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs text-neutral-content/40 uppercase tracking-[0.3em]">Project 04</span>
          <span className="w-48 lg:w-64 h-px bg-neutral-content/20" />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          <span className="text-primary-content">Ecosystem</span>
          <br />
          <span className="text-secondary">Collaborations</span>
        </h1>

        {/* Asymmetric Bento Grid - Featured + Stacked Cards */}
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* ENS Builder Grants - Featured (spans 3 cols) */}
          <div className="lg:col-span-3 border border-neutral-content/20 p-6 lg:p-8">
            <div className="flex items-center gap-2 text-neutral-content/30 text-xs mb-4">
              <span>┌</span>
              <span className="flex-1 border-t border-neutral-content/20" />
              <span>Featured</span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold text-primary-content mb-4">ENS Builder Grants</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <div className="grid gap-3 border-l border-neutral-content/20 pl-4">
                  <div className="flex items-start gap-3 text-neutral-content/70">
                    <span className="text-secondary mt-0.5 text-xs">◆</span>
                    <span className="text-sm">Launched new milestone-based USDC grants features</span>
                  </div>
                  <div className="flex items-start gap-3 text-neutral-content/70">
                    <span className="text-secondary mt-0.5 text-xs">◆</span>
                    <span className="text-sm">Added milestones and enhanced admin workflow to ETH grants</span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="py-4 border border-neutral-content/10">
                  <span className="text-2xl font-bold text-primary-content">4.1k</span>
                  <p className="text-neutral-content/50 text-xs mt-1">visitors</p>
                </div>
                <div className="py-4 border border-neutral-content/10">
                  <span className="text-2xl font-bold text-secondary">241</span>
                  <p className="text-neutral-content/50 text-xs mt-1">applications</p>
                </div>
                <div className="py-4 border border-neutral-content/10">
                  <span className="text-2xl font-bold text-primary">42</span>
                  <p className="text-neutral-content/50 text-xs mt-1">approved</p>
                </div>
              </div>
            </div>

            <div className="inline-block px-4 py-2 border border-primary/20 bg-primary/5">
              <span className="text-primary-content font-bold">~50 ETH + 65k USDC</span>
              <span className="text-neutral-content/50 text-sm ml-2">granted to projects</span>
            </div>

            <div className="flex items-center gap-2 text-neutral-content/30 text-xs mt-6">
              <span>└</span>
              <span className="flex-1 border-t border-neutral-content/20" />
              <span>┘</span>
            </div>
          </div>

          {/* Right column - 3 stacked compact cards (spans 2 cols) */}
          <div className="lg:col-span-2 grid gap-4">
            {/* Arbitrum Collaboration */}
            <div className="border border-neutral-content/20 p-4 hover:border-neutral-content/40 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-primary-content mb-2">Arbitrum Collaboration</h3>
                  <p className="text-neutral-content/60 text-sm">
                    Launched{" "}
                    <a
                      href="https://arbitrum.buidlguidl.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary/70 hover:text-primary"
                    >
                      Arbitrum Cohort
                    </a>{" "}
                    to build dapps on Arbitrum
                  </p>
                </div>
                <div className="text-right text-xs text-neutral-content/40">
                  <p>2 projects</p>
                  <p className="text-neutral-content/30">WIP</p>
                </div>
              </div>
              <div className="flex gap-3 mt-3 text-xs">
                <a
                  href="https://dev-creds.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary/60 hover:text-primary border border-neutral-content/10 px-2 py-1"
                >
                  DevCreds →
                </a>
                <span className="text-neutral-content/40 border border-neutral-content/10 px-2 py-1">Governance</span>
              </div>
            </div>

            {/* Ethereum Job Board */}
            <div className="border border-neutral-content/20 p-4 hover:border-neutral-content/40 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-primary-content mb-2">Ethereum Job Board</h3>
                  <p className="text-neutral-content/60 text-sm">
                    <a
                      href="https://www.ethereumjobboard.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary/70 hover:text-primary"
                    >
                      ethereumjobboard.com
                    </a>{" "}
                    with Geode Labs
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xl font-bold text-primary-content">8.1k</span>
                  <p className="text-neutral-content/40 text-xs">visitors</p>
                </div>
              </div>
            </div>

            {/* Ethereum.org */}
            <div className="border border-neutral-content/20 p-4 hover:border-neutral-content/40 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-primary-content mb-2">Ethereum.org</h3>
                  <p className="text-neutral-content/60 text-sm mb-2">
                    Built{" "}
                    <a
                      href="https://ethereum.org/collectibles/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary/70 hover:text-primary"
                    >
                      Collectibles site
                    </a>{" "}
                    for contributors
                  </p>
                  <p className="text-neutral-content/50 text-xs">
                    SE + SE-2 featured on{" "}
                    <a
                      href="https://ethereum.org/developers/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary/60 hover:text-primary"
                    >
                      /developers
                    </a>
                  </p>
                </div>
                <div className="text-2xl text-neutral-content/20">◈</div>
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

const Page2025: NextPage = () => {
  return (
    <>
      <Head>
        <title>2025 Year in Review | Sand Garden</title>
        <meta
          name="description"
          content="Explore Sand Garden's 2025 achievements and impact on the Ethereum ecosystem"
        />
      </Head>

      <div className={`min-h-screen bg-base-100 text-base-content ${shareTechMono.className}`}>
        <SideNav activeSlide="speedrun" />

        {/* Back to main site */}
        <Link
          href="/"
          className="fixed top-6 left-6 z-50 text-neutral-content/50 hover:text-primary-content transition-colors text-sm flex items-center gap-2 group"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity">Back to site</span>
        </Link>

        {/* Title card / Hero */}
        <header className="min-h-[60vh] flex items-center justify-center relative">
          <div className="text-center px-6">
            <p className="text-primary text-sm uppercase tracking-[0.4em] mb-4">Sand Garden</p>
            <h1 className="text-6xl md:text-8xl font-bold text-primary-content mb-6">2025</h1>
            <p className="text-neutral-content/60 max-w-md mx-auto">
              A year of building, learning, and growing the Ethereum ecosystem together.
            </p>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-content/30">
            <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
            <span className="animate-bounce">↓</span>
          </div>
        </header>

        {/* Slides container */}
        <main>
          <SpeedrunSlide />
          <ScaffoldEthSlide />
          <EducationalSlide />
          <EcosystemSlide />
        </main>

        {/* Footer */}
        <footer className="py-16 text-center text-neutral-content/40 text-sm">
          <p>Built with 💜 by Sand Garden</p>
        </footer>
      </div>
    </>
  );
};

export default Page2025;
