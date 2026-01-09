import { SlideSection } from "../SlideSection";
import { StatCard } from "../StatCard";
import { TaskList } from "../TaskList";
import { TerminalWindow } from "../TerminalWindow";

const SUBGROUPS = [
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
      '"Build an app on Ethereum in 8 minutes" video added to the website',
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

export const ScaffoldEthSlide = () => {
  const tabs = SUBGROUPS.map(group => ({
    id: group.id,
    title: group.title,
    content: <TaskList tasks={group.tasks} />,
  }));

  return (
    <SlideSection id="scaffold-eth" projectNumber="02">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left column */}
        <div className="lg:w-2/5">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-primary-content">Scaffold-ETH 2</span>
            <br />
            <span className="text-primary">Ecosystem</span>
          </h1>

          <p className="text-base md:text-lg text-neutral-content/70 mb-8 leading-relaxed">
            <span className="text-primary-content">
              Our modular toolkit for bootstrapping full-stack Ethereum apps.
            </span>{" "}
            In 2025, we simplified the core, extracted reusable packages, expanded extensions to better support
            onboarding and ecosystem integrations, and made it AI-ready.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <StatCard value="2,243+" label="Public and Tracked" growth="repositories created" />
            <StatCard value="78k" label="Burner Connector package" growth="npm downloads" />
          </div>
        </div>

        {/* Right column - terminal */}
        <div className="lg:w-1/2">
          <TerminalWindow tabs={tabs} defaultTab="toolkit" />
        </div>
      </div>
    </SlideSection>
  );
};
