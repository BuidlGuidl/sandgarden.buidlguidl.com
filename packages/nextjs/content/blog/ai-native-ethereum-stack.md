---
title: "Shifting to an AI-Native Ethereum Developer Stack"
date: "February 2026"
description: "How we're restructuring our Ethereum developer stack: Scaffold-ETH 2 and Speedrun Ethereum to be AI native."
---

For years, we've been building our dev tools and learning materials primarily for humans: docs explained what our toolkit did, we created videos, we taught developers with guided and hands-on experiences.

The reality now is that an AI agent is almost always present across the whole development and learning loop. So instead of asking "how do we add AI to our tools," we asked ourselves: what would our stack look like if we treated the AI as a primary user alongside the developer?

And if the AI truly understands the stack, a new question opens up: what if the person on the other side isn't a developer at all? What if they are someone with a vision and the ability to direct an agent, but not necessarily with a technical background?

For us, that meant rethinking some of our core primitives rather than just patching on new features. Thinking about builders and not just developers. We've been doing exactly that across our dev toolkit ([Scaffold-ETH 2](https://github.com/scaffold-eth/scaffold-eth-2)) and our Solidity curriculum ([Speedrun Ethereum](https://speedrunethereum.com)).

## Making Scaffold-ETH Agent-Ready

Here are the three biggest changes we've made so far.

### Agent-first docs

We noticed in early 2025 that the main consumer of our docs was already an agent loading context before writing code. So we shipped `llms-full.txt`: the entire SE-2 documentation as a single flat file. It's the exact same information, just formatted for how an AI actually consumes it.

We added Cursor rules to Scaffold-ETH 2 as an early way to give agents project context. But we quickly realized their limitations, replacing them with `AGENTS.md`, which is picked up by Claude Code, Cursor, Windsurf, and any other agent harness. **One file, every tool.** Every conversation starts with all the context it needs.

### Skills over scripts

We've started stripping out custom scripts wherever we find that a model just naturally handles the task better.

**/add-extension** Adding a Scaffold-ETH extension used to mean resolving `package.json` conflicts through hundreds of lines of template processing code. We replaced it with `/add-extension`, a simple agent skill built to work across different harnesses. `Node.js` handles the deterministic operations (fetching, copying), while the AI handles the judgment calls (merging).

**/pr-create** Writing a good PR is key when you are working asynchronously with a team. This file tells an agent how to inspect the diff, create a good PR body (summary, how to Test, things to look out for, etc.), and open it via `gh`.

The same pattern extends to Ethereum protocol knowledge. SE-2 now has a growing library of domain skills: `erc-20`, `erc-721`, `eip-5792`, `eip-712`, `siwe`, `ponder`, `solidity-security`, `defi-protocol-templates`. Each one is a focused context file the agent loads before implementing the functionality.

### AI-assisted code review

Code review is a perfect fit for "AI as a judge".

Take [Grumpy Carlos](https://github.com/scaffold-eth/scaffold-eth-2/blob/main/.agents/agents/grumpy-carlos-code-reviewer.md): a subagent with a personality inferred from [scraped BuidlGuidl PR history](https://github.com/technophile-04/grumpy-carlos-personality-fetcher). Ask for a review, and it responds exactly the way Carlos would: thorough, strict, with actionable feedback, and yes, occasionally grumpy.

> Human review is still critical for us, but AI review is a great first pass.

## Rethinking How We Teach

Speedrun Ethereum is how most developers get started building on Ethereum. With AI in the loop, we're making that experience accessible to all levels, not just developers (i.e. Builders).

**Per-challenge context files.** Each challenge gets an `AGENTS.md` detailing the challenge overview, gotchas, smart contract structure, and frontend architecture. When a learner opens a challenge in their IDE, the agent already knows the environment.

**AI Teacher Mode.** Type `/start` in the directory and an agent walks you through it. It asks questions, checks your understanding, guides you without giving the answer away, and reviews your code at your pace.

We're also shipping `/build-prompts`: curated build ideas that you copy one into your agent, get a working demo, then tweak it and make it yours.

> Going from idea to working dapp has never been easier.

## The Research Layer

The AI space is moving fast and there's a lot of noise. We are focusing on understanding the primitives of AI engineering and adapt to whatever comes next.

**[raked](https://github.com/BuidlGuidl/raked)** is a minimal TypeScript agent built for exactly this: the agent loop, sessions, memory, tools, skills. It's under 100 lines for the core. Built to be read, understood, and extended to solve your specific use cases.

**[Experimental RAG pipeline](https://github.com/BuidlGuidl/arbitrum-dashboard/pull/19)** on Arbitrum DAO governance data. Lets an agent pull relevant data before answering. We built this to understand how retrieval and evaluation actually work.

## Give it a try

We're iterating on all of this in the open. Check the code, the PRs, and try it yourself:

- **Create your own agent with raked:** [Read the agent loop.](https://github.com/BuidlGuidl/raked) Understand how tools, skills and sessions work. Then, build your own agent on top of it.
- **Build your first onchain app with Scaffold-ETH 2:** [Check out all the available skills](https://github.com/scaffold-eth/scaffold-eth-2). Install it, open it with your favourite agent, and start building.
- **Try SpeedRun Ethereum challenges with AI assistance:** Available on [Speedrun Ethereum](https://speedrunethereum.com) as they ship.
