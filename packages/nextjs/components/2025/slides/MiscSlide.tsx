import { SlideSection } from "../SlideSection";
import { StatCard } from "../StatCard";
import { TerminalWindow } from "../TerminalWindow";

const ABI_NINJA_CONTENT = (
  <>
    <p className="text-neutral-content/70 text-sm leading-relaxed mb-6">
      Our tool for interacting with any smart contract on any EVM chain. In 2025, we focused on maintenance and
      incremental improvements to keep it running smoothly.
    </p>

    <p className="text-xs text-neutral-content/40 uppercase tracking-widest mb-3">Highlights</p>
    <div className="grid gap-2 mb-6">
      <div className="flex items-start gap-3 text-neutral-content/70">
        <span className="text-secondary text-xs">◆</span>
        <span className="text-sm">Maintenance and small features</span>
      </div>
    </div>
  </>
);

const FARCASTER_CONTENT = (
  <>
    <p className="text-neutral-content/70 text-sm leading-relaxed mb-6">
      Exploring the miniapp ecosystem after our Farcaster day at Devconnect by launching experimental games and
      interactive experiences.
    </p>

    <p className="text-xs text-neutral-content/40 uppercase tracking-widest mb-3">Launched Miniapps</p>
    <div className="grid gap-3 mb-6">
      <div className="flex items-center gap-3 text-neutral-content/70">
        <span className="text-secondary text-xs">◆</span>
        <span className="text-sm flex-1">
          <span className="text-primary-content">Advent Calendar</span> — Holiday-themed miniapp game
        </span>
        <a
          href="https://farcaster.xyz/miniapps/mhdgdBnT4lR0/adventsfun-calendar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-content hover:text-primary text-xs whitespace-nowrap"
        >
          → Open Miniapp
        </a>
      </div>
      <div className="flex items-center gap-3 text-neutral-content/70">
        <span className="text-secondary text-xs">◆</span>
        <span className="text-sm flex-1">
          <span className="text-primary-content">Snowman / Not Snowman</span> — Spinoff farcaster game
        </span>
        <a
          href="https://farcaster.xyz/miniapps/q-h3sLIksfzg/snowman--not-snowman"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-content hover:text-primary text-xs whitespace-nowrap"
        >
          → Open Miniapp
        </a>
      </div>
      <div className="flex items-center gap-3 text-neutral-content/70">
        <span className="text-secondary text-xs">◆</span>
        <span className="text-sm flex-1">
          <span className="text-primary-content">Bubble Tap</span> — Interactive tap game
        </span>
        <a
          href="https://farcaster.xyz/miniapps/LTGZffIuAcG7/bubble-tap-game"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-content hover:text-primary text-xs whitespace-nowrap"
        >
          → Open Miniapp
        </a>
      </div>
    </div>
  </>
);

const IDEATION_CONTENT = (
  <>
    <p className="text-neutral-content/70 text-sm leading-relaxed mb-6">
      Looking ahead—exploring new directions and prototyping programs to launch in the coming year.
    </p>

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
            <p className="text-neutral-content/70 text-xs mt-1">Mockup for enterprise-focused Ethereum education</p>
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
);

const TABS = [
  {
    id: "abi-ninja",
    title: "Abi Ninja",
    content: ABI_NINJA_CONTENT,
    linkUrl: "https://abi.ninja/",
    linkLabel: "Website",
  },
  { id: "farcaster", title: "Farcaster Miniapps", content: FARCASTER_CONTENT },
  { id: "ideation", title: "2026 Ideation", content: IDEATION_CONTENT },
];

export const MiscSlide = () => (
  <SlideSection id="misc" trackName="DAPP BUILDING TRACK">
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
      {/* Left column */}
      <div className="lg:w-2/5">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-primary-content">Miscellaneous</span>
          <br />
          <span className="text-primary">Projects</span>
        </h1>

        <p className="text-base md:text-lg text-neutral-content/70 mb-8 leading-relaxed">
          <span className="text-primary-content">Side projects and experiments.</span> Beyond our main initiatives, we
          maintained useful tools, explored emerging platforms like Farcaster, and started ideating programs for 2026.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <StatCard value="~20k" label="" growth="Abi Ninja users" />
          <StatCard value="3" label="" growth="Farcaster Miniapps" />
        </div>
      </div>

      {/* Right column - terminal */}
      <div className="lg:w-1/2">
        <TerminalWindow tabs={TABS} defaultTab="abi-ninja" />
      </div>
    </div>
  </SlideSection>
);
