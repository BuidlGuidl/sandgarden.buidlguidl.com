import Head from "next/head";
import type { NextPage } from "next";

export const POST = {
  title: "Building an AI-Native Ethereum Developer Stack",
  date: "February 2026",
  url: "/blog/ai-native-ethereum-stack",
};

const codeCls = "bg-white/5 text-primary-content px-1 py-0.5 rounded text-[0.85em]";

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-secondary font-bold text-lg sm:text-xl mt-10 mb-1">{children}</h2>;
}

const AiNativeEthereumStack: NextPage = () => {
  return (
    <>
      <Head>
        <title>{POST.title} — Sand Garden</title>
        <meta
          name="description"
          content="How we're restructuring our Web3 stack—Scaffold-ETH 2, Speedrun Ethereum, RAG pipelines—for a world where AI agents are primary users alongside developers."
        />
      </Head>

      <article className="max-w-2xl px-4 py-12 mx-auto">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4 font-mono text-sm text-white/35">
            <span>{POST.date}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-white">{POST.title}</h1>
        </header>

        {/* Body */}
        <div className="space-y-5 text-white/70 leading-relaxed text-sm sm:text-base">
          <p>
            For years, we&apos;ve been building our dev tools and learning materials primarily for humans. Docs
            explained what our toolkit did. We taught developers with guided, hands-on experiences. Extensions shipped
            as mergeable code.
          </p>
          <p>But we&apos;re finding that this model gets a bit clunky when an AI agent is driving the keyboard.</p>
          <p>
            Instead of just asking &ldquo;how do we add AI to our tools&rdquo; we started asking ourselves: what would
            our stack look like if we treated the AI as a primary user alongside the developer?
          </p>
          <p>
            For us, that meant rethinking some of our core primitives rather than just patching on new features.
            We&apos;ve been doing exactly that across our dev toolkit (
            <a
              href="https://github.com/scaffold-eth/scaffold-eth-2"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary"
            >
              Scaffold-ETH 2
            </a>
            ) and our Solidity curriculum (
            <a
              href="https://speedrunethereum.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary"
            >
              Speedrun Ethereum
            </a>
            ). The Sand Garden, an intentional team within BuidlGuidl, is executing this vision.
          </p>
          <p>Here is a look at how we&apos;re restructuring our own Web3 stack for this shift.</p>

          <H2>Structuring Docs for Agents</H2>
          <p>
            We removed Cursor rules from Scaffold-ETH 2 and replaced them with{" "}
            <code className={codeCls}>AGENTS.md</code>.
          </p>
          <p>
            Cursor rules only work in Cursor. <code className={codeCls}>AGENTS.md</code> is picked up by Claude Code,
            Cursor, Windsurf, and any other agent harness.{" "}
            <strong className="text-white font-semibold">One file, every tool.</strong> Every conversation starts with
            the full stack context already loaded.
          </p>
          <p>
            In these new workflows, we&apos;re noticing the main consumer of our docs is often an agent loading context
            before writing code. So we shipped <code className={codeCls}>llms-full.txt</code>: the entire SE-2
            documentation as a single flat file. Not a website. A file an agent loads into context and reasons against.
          </p>
          <p>It&apos;s the exact same information, just formatted for how an AI actually consumes it.</p>

          <H2>Swapping Complex Code for AI Skills</H2>
          <p>
            Adding a Scaffold-ETH extension used to mean resolving <code className={codeCls}>package.json</code>{" "}
            conflicts through hundreds of lines of template processing code.
          </p>
          <p>
            We replaced it with <code className={codeCls}>/add-extension</code>: a simple agent skill built to work
            across different harnesses. Node.js handles the deterministic operations (fetching, copying), while the AI
            handles the judgment calls (merging).{" "}
            <strong className="text-white font-semibold">
              Hundreds of lines of template code became a markdown file and a focused script.
            </strong>
          </p>
          <p>
            Same pattern for developer workflow. Our <code className={codeCls}>pr-create</code> skill is a markdown file
            that tells an agent how to inspect the diff, format the PR body, and open it via{" "}
            <code className={codeCls}>gh</code>. No custom script. No alias. Just context.
          </p>
          <p>
            We&apos;ve started stripping out custom scripts wherever we find that a model just naturally handles the
            task better.
          </p>

          <H2>Rethinking How We Teach</H2>
          <p>
            Speedrun Ethereum is how many developers learn to build on Ethereum. We&apos;re rebuilding the learning
            layer to the same standard.
          </p>
          <p>
            <strong className="text-white font-semibold">Per-challenge context files.</strong> Each challenge gets an{" "}
            <code className={codeCls}>AGENTS.md</code> detailing the challenge overview, smart contract structure, and
            frontend architecture. When a learner opens a challenge in their IDE, the agent already knows the
            environment.
          </p>
          <p>
            <strong className="text-white font-semibold">AI Teacher Mode.</strong> Type{" "}
            <code className={codeCls}>/start</code> in the directory and an agent walks you through it. It asks
            questions, checks your understanding, guides you without giving the answer away, and reviews your code at
            your pace.
          </p>
          <p>
            Build ideas are also migrating. Old format: a GitHub repo link. New format: a prompt you paste into your
            agent. The agent reads context and starts building with you.
          </p>

          <H2>The Research Layer</H2>
          <p>
            The agent ecosystem shifts weekly. That&apos;s why we aren&apos;t assembling heavy wrappers. We need to
            understand the raw primitives so we can adapt the moment a new paradigm drops.
          </p>
          <p>
            <a
              href="https://github.com/BuidlGuidl/raked"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary"
            >
              raked
            </a>{" "}
            is a minimal TypeScript agent built for exactly this: the agent loop, sessions, memory, tools, skills.
            It&apos;s under 100 lines for the core. Built to be read, understood, and extended to solve your specific
            use cases.
          </p>
          <p>
            Alongside it: an experimental RAG pipeline on Arbitrum DAO governance data. Vector search via{" "}
            <code className={codeCls}>pgvector</code>, retrieval via LlamaIndex, automated evaluation scoring
            Faithfulness, Relevancy, and Correctness.
          </p>
          <p>
            We built both because we really wanted to understand the underlying mechanisms before building heavier tools
            on top of them.
          </p>

          <H2>Figuring Out the Boundaries</H2>
          <p>
            Security stays deterministic. Wallet interactions, transaction signing, and key management require hard
            boundaries. An agent making onchain transactions autonomously is an attack surface. That problem isn&apos;t
            solved yet.
          </p>
          <p>
            But <strong className="text-white font-semibold">code review</strong> is a perfect fit for AI judgment.
          </p>
          <p>
            Take{" "}
            <a
              href="https://github.com/technophile-04/grumpy-carlos-personality-fetcher"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary"
            >
              Grumpy Carlos
            </a>
            : a Claude Code subagent with a review personality inferred from scraped BuidlGuidl PR history. Drop it in{" "}
            <code className={codeCls}>.claude/agents/</code>, ask for a review, and it responds exactly the way Carlos
            would: specific, strict, no vague feedback.
          </p>
          <p>
            The right context, structured for an AI to use, produces better output than general AI applied to problems
            without context.
          </p>

          <H2>The Compounding Effect</H2>
          <p>
            To us, this is what going &ldquo;AI-first&rdquo; actually looks like in practice. It&apos;s not just
            dropping a Copilot plugin into Scaffold-ETH. It&apos;s a stack where every layer—the framework, the docs,
            the extensions, the curriculum—is structured to be used by an agent, not just tolerated by one.
          </p>
          <p>
            An agent building with SE-2 understands the stack. An agent teaching on Speedrun Ethereum understands the
            challenge. With <code className={codeCls}>/add-extension</code> the agent can install new capabilities
            without leaving the conversation.
          </p>
          <p>
            <strong className="text-white font-semibold">Next up:</strong> an open-source plugin that packages all of
            this into one installable toolkit for Claude Code, OpenCode, and Cursor.
          </p>

          <H2>Try It Today</H2>
          <p>The PRs are open and the code is live. If you&apos;re building at the intersection of AI and Ethereum:</p>
          <ol className="mt-4 space-y-3 list-none">
            {[
              <>
                <strong className="text-white font-semibold">Start with raked:</strong>{" "}
                <a
                  href="https://github.com/BuidlGuidl/raked"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link link-primary"
                >
                  Read the agent loop.
                </a>{" "}
                Understand what a tool call actually is before building on top of abstractions.
              </>,
              <>
                <strong className="text-white font-semibold">Look at Scaffold-ETH 2:</strong>{" "}
                <a
                  href="https://github.com/scaffold-eth/scaffold-eth-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link link-primary"
                >
                  See the AGENTS.md and /add-extension skills in progress.
                </a>{" "}
                Build your first Dapp with it and your favourite agent.
              </>,
              <>
                <strong className="text-white font-semibold">Try the AI challenges:</strong> Available on{" "}
                <a
                  href="https://speedrunethereum.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link link-primary"
                >
                  Speedrun Ethereum
                </a>{" "}
                as they ship.
              </>,
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-primary-content/40 font-mono shrink-0 mt-0.5">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-6 border-t border-white/10 font-mono text-sm text-white/35">
          <p>
            Questions or want to build together?{" "}
            <a href="mailto:sandgarden@buidlguidl.com" className="link link-primary">
              sandgarden@buidlguidl.com
            </a>
          </p>
        </div>
      </article>
    </>
  );
};

export default AiNativeEthereumStack;
