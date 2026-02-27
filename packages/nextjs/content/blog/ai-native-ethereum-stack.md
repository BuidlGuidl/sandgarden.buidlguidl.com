---
title: "Building an AI-Native Ethereum Developer Stack"
date: "February 2026"
description: "How we're restructuring our Ethereum developer stack: Scaffold-ETH 2 and Speedrun Ethereum to be AI native."
---

For years, we've been building our dev tools and learning materials primarily for humans. Docs explained what our toolkit did. We taught developers with guided, hands-on experiences. Extensions shipped as mergeable code.

But we're finding that this model gets a bit clunky when an AI agent is driving the keyboard.

Instead of just asking "how do we add AI to our tools" we started asking ourselves: what would our stack look like if we treated the AI as a primary user alongside the developer?

For us, that meant rethinking some of our core primitives rather than just patching on new features. We've been doing exactly that across our dev toolkit ([Scaffold-ETH 2](https://github.com/scaffold-eth/scaffold-eth-2)) and our Solidity curriculum ([Speedrun Ethereum](https://speedrunethereum.com)). The Sand Garden, an intentional team within BuidlGuidl, is executing this vision.

Here is a look at how we're restructuring our own Web3 stack for this shift.

## Rebuilding Scaffold-ETH for Agents

### Agent-first docs

We noticed in early 2025 that the main consumer of our docs was already an agent loading context before writing code. So we shipped `llms-full.txt`: the entire SE-2 documentation as a single flat file. It's the exact same information, just formatted for how an AI actually consumes it.

We added Cursor rules to Scaffold-ETH 2 as an early way to give agents project context. But we quickly realized their limitations, replacing them with `AGENTS.md`, which is picked up by Claude Code, Cursor, Windsurf, and any other agent harness. **One file, every tool.** Every conversation starts with the full stack context already loaded.

### Skills over scripts

We've started stripping out custom skills wherever we find that a model just naturally handles the task better.

**/add-extension** Adding a Scaffold-ETH extension used to mean resolving `package.json` conflicts through hundreds of lines of template processing code. We replaced it with `/add-extension`, a simple agent skill built to work across different harnesses. `Node.js` handles the deterministic operations (fetching, copying), while the AI handles the judgment calls (merging).

**/pr-create** Same pattern for developer workflow. `/pr-create` is a markdown file that tells an agent how to inspect the diff, format the PR body, and open it via `gh`. No custom script, no alias, just context.

The same pattern extends to Ethereum protocol knowledge. SE-2 now has a library of domain skills: `erc-20`, `erc-721`, `eip-5792`, `eip-712`, `siwe`, `ponder`, `solidity-security`, `defi-protocol-templates`. Each is a focused context file the agent loads before touching that part of the stack. No hunting for docs or hallucinated ABIs. The agent knows the protocol before it writes the first line.

### AI-assisted code review

Code review is a perfect fit for AI judgment.

Take [Grumpy Carlos](https://github.com/technophile-04/grumpy-carlos-personality-fetcher): a Claude Code subagent with a review personality inferred from scraped BuidlGuidl PR history. Drop it in `.claude/agents/`, ask for a review, and it responds exactly the way Carlos would: specific, strict, no vague feedback.

> Human review is still important, but AI review is a great first pass.

## Rethinking How We Teach

Speedrun Ethereum is how many developers learn to build on Ethereum. We're rebuilding the learning layer to the same standard.

**Per-challenge context files.** Each challenge gets an `AGENTS.md` detailing the challenge overview, smart contract structure, and frontend architecture. When a learner opens a challenge in their IDE, the agent already knows the environment.

**AI Teacher Mode.** Type `/start` in the directory and an agent walks you through it. It asks questions, checks your understanding, guides you without giving the answer away, and reviews your code at your pace.

Build ideas are also migrating. Old format: a GitHub repo link. New format: a prompt you paste into your agent. The agent reads context and starts building with you.

## The Research Layer

The agent ecosystem shifts weekly. That's why we aren't assembling heavy wrappers. We need to understand the raw primitives so we can adapt the moment a new paradigm drops.

[raked](https://github.com/BuidlGuidl/raked) is a minimal TypeScript agent built for exactly this: the agent loop, sessions, memory, tools, skills. It's under 100 lines for the core. Built to be read, understood, and extended to solve your specific use cases.

Alongside it: an experimental RAG pipeline on Arbitrum DAO governance data. Vector search via `pgvector`, retrieval via LlamaIndex, automated evaluation scoring Faithfulness, Relevancy, and Correctness.

We built both because we really wanted to understand the underlying mechanisms before building heavier tools on top of them.

## The Compounding Effect

To us, this is what going "AI-first" actually looks like in practice. It's not just dropping a Copilot plugin into Scaffold-ETH. It's a stack where (the framework, the docs, the extensions, the curriculum) is structured to be used by an agent, not just tolerated by one.

An agent building with SE-2 understands the stack. An agent teaching on Speedrun Ethereum understands the challenge. With `/add-extension` the agent can install new capabilities without leaving the conversation.

**Next up:** an open-source plugin that packages all of this into one installable toolkit for Claude Code, OpenCode, and Cursor.

## Try It Today

The PRs are open and the code is live. If you're building at the intersection of AI and Ethereum:

- **Start with raked:** [Read the agent loop.](https://github.com/BuidlGuidl/raked) Understand what a tool call actually is before building on top of abstractions.
- **Look at Scaffold-ETH 2:** [See the AGENTS.md and /add-extension skills in progress.](https://github.com/scaffold-eth/scaffold-eth-2) Build your first Dapp with it and your favourite agent.
- **Try the AI challenges:** Available on [Speedrun Ethereum](https://speedrunethereum.com) as they ship.
