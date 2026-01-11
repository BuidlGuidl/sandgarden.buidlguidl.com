import { SlideSection } from "../SlideSection";
import { StatCard } from "../StatCard";
import { TerminalWindow } from "../TerminalWindow";

const CTF_CONTENT = (
  <>
    <p className="text-neutral-content/70 text-sm leading-relaxed mb-6">
      Hands-on security learning platform that challenges developers to solve real-world Web3 vulnerabilities. In 2025,
      we launched the CTF as a live, always-on platform and expanded it with a second season.
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

    {/* CTF Timeline */}
    <p className="text-xs text-neutral-content/40 uppercase tracking-widest mb-3">Timeline</p>
    <div className="grid gap-3">
      <div className="flex items-start gap-3 text-neutral-content/70">
        <span className="text-primary text-xs mt-0.5 font-mono w-10">Jan</span>
        <span className="text-sm">
          Opened Devcon CTF as a{" "}
          <a
            href="https://ctf.buidlguidl.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-content hover:text-primary underline"
          >
            live platform
          </a>{" "}
          for anyone to play at any moment
        </span>
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
);

const WORKSHOPS_CONTENT = (
  <>
    <p className="text-neutral-content/70 text-sm leading-relaxed mb-6">
      Not a core focus in 2025, but we played a key supporting role at Devconnect planning and executing BuidlGuidl
      {"'"}s four-day Builder Bootcamp in Buenos Aires.
    </p>

    {/* Devconnect Highlight */}
    <div className="mb-6 p-4 border border-neutral-content/10 bg-neutral-content/5">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-neutral-content/40 uppercase tracking-widest">Builder Bootcamp • Nov 18-21</span>
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
    <p className="text-xs text-neutral-content/40 uppercase tracking-widest mb-3">Sand Garden Sessions at Devconnect</p>
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

    {/* Other Events */}
    <p className="text-xs text-neutral-content/40 uppercase tracking-widest mb-3">Other Events</p>
    <div className="grid gap-2">
      <div className="flex items-start gap-3 text-neutral-content/70">
        <span className="text-neutral-content/40 text-xs">◇</span>
        <span className="text-sm">aigentsbcn event support</span>
      </div>
    </div>
  </>
);

const TABS = [
  {
    id: "ctf",
    title: "Capture The Flag",
    content: CTF_CONTENT,
    linkUrl: "https://github.com/BuidlGuidl/ctf.buidlguidl.com",
    linkLabel: "Github",
  },
  { id: "workshops", title: "Workshops", content: WORKSHOPS_CONTENT },
];

export const EducationalSlide = () => (
  <SlideSection id="educational" trackName="EDUCATION / DEV ONBOARDING TRACK">
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
      {/* Left column */}
      <div className="lg:w-2/5">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-primary-content">Educational</span>
          <br />
          <span className="text-primary">Initiatives</span>
        </h1>

        <p className="text-base md:text-lg text-neutral-content/70 mb-8 leading-relaxed">
          <span className="text-primary-content">Beyond our flagship products.</span> In 2025, we ran security
          challenges through our CTF platform and contributed to key community events, including BuidlGuidl{"'"}s
          Builder Bootcamp at Devconnect Buenos Aires.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <StatCard value="1,600+" label="" growth="Flags minted" />
          <StatCard value="20+" label="" growth="Workshops" />
        </div>
      </div>

      {/* Right column - terminal */}
      <div className="lg:w-1/2">
        <TerminalWindow tabs={TABS} defaultTab="ctf" />
      </div>
    </div>
  </SlideSection>
);
