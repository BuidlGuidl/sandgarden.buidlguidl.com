import { SlideSection } from "../SlideSection";
import { TaskList } from "../TaskList";
import { TerminalWindow } from "../TerminalWindow";

const ENS_CONTENT = (
  <>
    <p className="text-neutral-content/70 text-sm leading-relaxed mb-6">
      ETH Grants platform implemented adhoc for ENS in 2024, we improved it with milestone-based USDC grants in 2025 and
      enhanced admin workflow.
    </p>

    <TaskList
      tasks={[
        "Launched the new milestone-based USDC grants features",
        "Added milestones and enhanced admin workflow to ETH grants",
      ]}
    />

    {/* 2025 Stats */}
    <p className="text-xs text-neutral-content/40 uppercase tracking-widest mb-3 mt-6">2025 Stats</p>
    <div className="mb-6">
      <div className="flex items-center gap-4 mb-4 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="text-primary text-xl font-bold">4.1k</span>
          <span className="text-neutral-content/50 text-xs">visitors</span>
        </div>
        <span className="text-neutral-content/20">│</span>
        <div className="flex items-center gap-2">
          <span className="text-secondary text-xl font-bold">42 of 241</span>
          <span className="text-neutral-content/50 text-xs">grants approved</span>
        </div>
        <span className="text-neutral-content/20">│</span>
        <div className="flex items-center gap-2">
          <span className="text-primary text-xl font-bold">$200k+</span>
          <span className="text-neutral-content/50 text-xs">granted</span>
        </div>
      </div>
    </div>
  </>
);

const ARBITRUM_CONTENT = (
  <>
    <p className="text-neutral-content/70 text-sm leading-relaxed mb-6">
      Launched the Arbitrum Cohort to build dapps on Arbitrum. Currently developing two projects for the ecosystem.
    </p>

    <p className="text-xs text-white uppercase tracking-widest mb-3">Projects in Development</p>
    <div className="grid gap-4">
      <div className="p-4 border border-neutral-content/20">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-primary-content text-sm font-medium">DevCreds</span>
            <p className="text-neutral-content/70 text-xs mt-1">Developer reputation dapp for the Arbitrum ecosystem</p>
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
);

const JOBBOARD_CONTENT = (
  <>
    <p className="text-neutral-content/70 text-sm leading-relaxed mb-6">
      Curated job board connecting developers with opportunities across the Ethereum ecosystem.
    </p>

    <TaskList tasks={["Launched the Ethereum Job Board in collaboration with Geode Labs"]} />

    {/* 2025 Stats */}
    <p className="text-xs text-neutral-content/40 uppercase tracking-widest mb-3 mt-6">2025 Stats</p>
    <div className="mb-6">
      <div className="flex items-center gap-4 mb-4 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="text-primary text-xl font-bold">8.1k</span>
          <span className="text-neutral-content/50 text-xs">visitors</span>
        </div>
      </div>
    </div>
  </>
);

const ETHEREUMORG_CONTENT = (
  <>
    <TaskList
      tasks={[
        <>
          Built the{" "}
          <a
            href="https://ethereum.org/collectibles/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-content hover:text-primary underline"
          >
            Collectibles
          </a>{" "}
          site for contributors
        </>,
        <>
          Speedrun Ethereum and Scaffold-ETH are featured as main themes on{" "}
          <a
            href="https://ethereum.org/developers/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-content hover:text-primary underline"
          >
            ethereum.org/developers/
          </a>
        </>,
      ]}
    />
  </>
);

const TABS = [
  {
    id: "ens",
    title: "ENS Grants",
    content: ENS_CONTENT,
    linkUrl: "https://builder.ensgrants.xyz/",
    linkLabel: "Website",
  },
  {
    id: "arbitrum",
    title: "Arbitrum",
    content: ARBITRUM_CONTENT,
    linkUrl: "https://arbitrum.buidlguidl.com/",
    linkLabel: "Website",
  },
  {
    id: "jobboard",
    title: "Job Board",
    content: JOBBOARD_CONTENT,
    linkUrl: "https://www.ethereumjobboard.com/",
    linkLabel: "Website",
  },
  { id: "ethereumorg", title: "Ethereum.org", content: ETHEREUMORG_CONTENT },
];

export const EcosystemSlide = () => (
  <SlideSection id="ecosystem" trackName="DAPP BUILDING TRACK">
    <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">
      {/* Left column */}
      <div className="lg:w-2/5">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-primary-content">Ecosystem</span>
          <br />
          <span className="text-primary">Collabs</span>
        </h1>

        <p className="text-base md:text-lg text-neutral-content/70 mb-8 leading-relaxed">
          <span className="text-primary-content">Partnering with key players to expand Ethereum{"'"}s reach.</span> In
          2025, we partnered with ENS, Arbitrum, Geode Labs, and Ethereum.org building grant platforms, cohort programs,
          and developer resources that benefit the broader ecosystem.
        </p>
      </div>

      {/* Right column - terminal */}
      <div className="lg:w-1/2">
        <TerminalWindow tabs={TABS} defaultTab="ens" />
      </div>
    </div>
  </SlideSection>
);
