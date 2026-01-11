import { SlideSection } from "../SlideSection";
import { StatCard } from "../StatCard";
import { TaskList } from "../TaskList";

const TASKS = [
  "Launch Speedrun Ethereum v2 built with Scaffold-ETH 2",
  "Add builder portfolio page and side quests",
  "Migrate builds from BuidlGuidl v3 + categorization",
  "Migrate challenges to extensions for easier maintenance and compatibility with future Scaffold-ETH 2 upgrades",
  "Create 23 Solidity guides and extra landing pages, 100% organic traffic increase",
  "Launch Google Ads campaigns and referral traffic collaboration with Blockscout",
  "Improve conversion tracking and traffic sources",
  "Support the launch of 5 new challenges, test and platform adjustments",
  "Automate feedback gathering from past Speedrunners, to know the impact on their careers and improve the platform",
];

export const SpeedrunSlide = () => (
  <SlideSection id="speedrun" trackName="EDUCATION / DEV ONBOARDING TRACK">
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
      {/* Left column - main content */}
      <div className="flex-1 max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-primary-content">Speedrun</span>
          <br />
          <span className="text-primary">Ethereum</span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-content/70 mb-12 leading-relaxed">
          <span className="text-primary-content">Our flagship educational product.</span> In 2025, we doubled down by
          upgrading to Scaffold-ETH 2 and shipping targeted UX, SEO, and gamification improvements: increasing reach,
          signups, and challenge submissions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <StatCard value="92.4k" label="Unique Visitors" growth="+74% from 2024" />
          <StatCard value="5,700" label="Unique Signups" growth="+114% from 2024" />
          <StatCard value="5,900" label="Challenge Submissions" growth="+40% from 2024" />
        </div>
      </div>

      {/* Right column - tasks */}
      <div className="lg:w-96">
        <div className="border-l border-neutral-content/20 pl-6">
          <p className="text-xs text-neutral-content/40 uppercase tracking-widest mb-4">Tasks & Achievements</p>
          <TaskList tasks={TASKS} />
          <div className="flex items-center gap-4 mt-6 pt-4 border-t border-neutral-content/10">
            <a
              href="https://speedrunethereum.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-content hover:text-primary text-sm flex items-center gap-1"
            >
              → Website
            </a>
            <a
              href="https://github.com/BuidlGuidl/SpeedRunEthereum-v2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-content hover:text-primary text-sm flex items-center gap-1"
            >
              → Github
            </a>
          </div>
        </div>
      </div>
    </div>
  </SlideSection>
);
