import { SlideSection } from "../SlideSection";
import { StatCard } from "../StatCard";
import { TaskList } from "../TaskList";
import { TerminalWindow } from "../TerminalWindow";

const SUBGROUPS = [
  {
    id: "toolkit",
    title: "Toolkit",
    description:
      "The core open-source toolkit for rapidly prototyping and building decentralized applications on Ethereum.",
    githubUrl: "https://github.com/scaffold-eth/scaffold-eth-2",
    tasks: [
      "Enable Scaffold-ETH 2 deployments to IPFS",
      "Scaffold-ETH 2 it's showcased in the Mastering Ethereum v2 book",
      "Implement encrypted private key support",
      "Migrate to Tailwind v4 and DaisyUI v5",
      "Migrate to Next.js 15",
      "Improve documentation AI compatibility using llm-full.txt files",
      "Add custom Cursor rules to enhance DX and enable easier one-shot dApp generation",
      "Migrate documentation to the Vocs framework for improved styling, AI compatibility (ask ChatGPT), and dynamic unfurling",
    ],
  },
  {
    id: "create-eth",
    title: "create-eth CLI",
    description: "CLI to bootstrap new Scaffold-ETH 2 projects with customizable extensions (starter kits)",
    githubUrl: "https://github.com/scaffold-eth/create-eth",
    tasks: [
      "Improve documentation for extension creators, including an args file example",
      "Normalize template arguments and enable a more extensible system for extension developers",
      "Fix GitHub API rate limit errors",
      "Expose user-selected variables to extension developers via global variables",
      "Add core extensions, including Porto, x402, and EIP-5792",
    ],
  },
  {
    id: "website",
    title: "Website",
    description: (
      <>
        The{" "}
        <a
          href="https://scaffoldeth.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-content hover:text-primary underline"
        >
          scaffoldeth.io
        </a>{" "}
        homepage, showcasing ecosystem projects and resources for builders.
      </>
    ),
    githubUrl: "https://github.com/scaffold-eth/scaffoldeth.io",
    tasks: [
      <>
        Build Scaffold-ETH 2 usage tracker and send over 5000 repos using SE-2 to{" "}
        <a
          href="https://github.com/electric-capital/open-dev-data"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-content hover:text-primary underline"
        >
          electric-capital/open-dev-data
        </a>
      </>,
      <>
        Ship{" "}
        <a
          href="https://projects.scaffoldeth.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-content hover:text-primary underline"
        >
          projects.scaffoldeth.io
        </a>{" "}
        with SE-2 usage stats, adding stats and direct link to SE-2 homepage
      </>,
      "Add 'Build an app on Ethereum in 8 minutes' video to homepage",
    ],
  },
  {
    id: "scaffold-ui",
    title: "Scaffold-UI",
    description: "Standalone packages of reusable React hooks and UI components extracted from Scaffold-ETH 2.",
    githubUrl: "https://github.com/scaffold-eth/scaffold-ui",
    tasks: [
      "Monorepo setup with docs + example setup + packages setup",
      "3 npm packages available (components, hooks, debug-contracts)",
    ],
  },
  {
    id: "burner-connector",
    title: "Burner Connector",
    description:
      "Lightweight wagmi connector for ephemeral burner wallets, enabling instant onboarding without extensions.",
    linkUrl: "https://www.npmjs.com/package/burner-connector",
    linkLabel: "NPM package",
    tasks: ["Maintenance", "Add compatibility with EIP-5792"],
  },
];

export const ScaffoldEthSlide = () => {
  const tabs = SUBGROUPS.map(group => ({
    id: group.id,
    title: group.title,
    content: (
      <>
        <p className="text-neutral-content/70 text-sm leading-relaxed mb-6">{group.description}</p>
        <TaskList tasks={group.tasks} />
      </>
    ),
    linkUrl: group.linkUrl || group.githubUrl,
    linkLabel: group.linkLabel || "Github",
  }));

  return (
    <SlideSection id="scaffold-eth" trackName="DEV TOOLING TRACK">
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
            <StatCard value="2,243+" label="created in 2025" growth="public repositories" />
            <StatCard value="78k" label="during 2025" growth="npm downloads" />
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
