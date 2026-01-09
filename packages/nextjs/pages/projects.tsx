import React, { useRef } from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { DateTime } from "luxon";
import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";
import { useCohortWithdrawEvents } from "~~/hooks/useCohortWithdrawEvents";

const projects = [
  {
    name: "Scaffold-ETH 2",
    description:
      "An open-source, up-to-date toolkit for building decentralized applications on the Ethereum blockchain.",
    github: "https://github.com/scaffold-eth/scaffold-eth-2",
  },
  {
    name: "Speedrun Ethereum",
    description: "A platform to learn how to build on Ethereum; the superpowers and the gotchas.",
    link: "https://speedrunethereum.com",
    github: "https://github.com/BuidlGuidl/SpeedRunEthereum",
  },
  {
    name: "ABI Ninja",
    description: "Interact with any contract on Ethereum with a simple interface.",
    link: "https://abi.ninja/",
    github: "https://github.com/buidlguidl/abi.ninja",
  },
  {
    name: "BuidlGuidl's Builder Bootcamp",
    description: "Organization of the Builder Bootcamp for Devconnect Buenos Aires 2025",
    link: "https://devconnect.buidlguidl.com/",
    github: "https://github.com/buidlguidl/devconnect.buidlguidl.com",
  },
  {
    name: "Capture The Flag",
    description: "Ethereum CTF challenges with seasons from Devcon Bangkok and Devconnect Buenos Aires.",
    link: "https://ctf.buidlguidl.com",
    github: "https://github.com/BuidlGuidl/ctf.buidlguidl.com",
  },
  {
    name: "ENS Builder Grants",
    description: "Platform for milestone-based grants to ENS ecosystem builders.",
    link: "https://builder.ensgrants.xyz/",
    github: "https://github.com/BuidlGuidl/ens-pg",
  },
  {
    name: "Arbitrum Cohort",
    description: "Cohort building dapps on Arbitrum including DevCreds and governance tools.",
    link: "https://arbitrum.buidlguidl.com",
    github: "https://github.com/buidlguidl/arbitrum-cohort",
  },
  {
    name: "Ethereum Job Board",
    description: "Job board for Ethereum ecosystem roles, in collaboration with Geode Labs",
    link: "https://www.ethereumjobboard.com/",
  },
  {
    name: "create-eth",
    description: "CLI to create decentralized applications (dapps) using Scaffold-ETH 2.",
    github: "https://github.com/scaffold-eth/create-eth",
  },
  {
    name: "Scaffold-UI",
    description: "Standalone package of reusable hooks and UI components extracted from Scaffold-ETH 2",
    link: "https://scaffold-ui-docs.vercel.app/",
    github: "https://github.com/scaffold-eth/scaffold-ui",
  },
  {
    name: "BuidlGuidl v3",
    description:
      "A curated group of Ethereum builders creating products, prototypes, and tutorials to enrich the web3 ecosystem.",
    link: "https://buidlguidl.com/",
    github: "https://github.com/scaffold-eth/buidlguidl-v3",
  },
  {
    name: "BuidlGuidl Grants",
    description: "BG grants is a platform for funding open-source work in the Ethereum ecosystem",
    link: "https://grants.buidlguidl.com",
    github: "https://github.com/buidlGuidl/grants.buidlguidl.com",
  },
  {
    name: "Burner connector",
    description: "Connector for the Burner Wallet",
    github: "https://github.com/scaffold-eth/burner-connector",
  },
  {
    name: "BuidlGuidl L2 testnet",
    description: "L2 testnet (sepolia) for BuidlGuidl. Powered by the OP Stack. Currently disabled.",
    link: "https://l2.buidlguidl.com/",
    github: "https://github.com/BuidlGuidl/l2.buidlguidl.com",
  },
];

const githubApiUri = "https://api.github.com/repos";

const Projects: NextPage = () => {
  const { data: allWithdrawEvents, isLoading: isWithdrawEventsLoading } = useCohortWithdrawEvents();

  type LastUpdateType = {
    [key: string]: string;
  };

  const [projectsLastUpdate, setProjectsLastUpdate] = useState<LastUpdateType>({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getLastCommits = async () => {
      const projectsUpdate: LastUpdateType = {};
      for (let i = 0; i < projects.length; i++) {
        if (!projects[i].github) continue;
        const github = projects[i].github as string;
        const owner: string = github.split("/")[3];
        const name: string = github.split("/")[4];
        const apiUrl = `${githubApiUri}/${owner}/${name}`;
        try {
          const result = await fetch(apiUrl);
          const data = await result.json();
          projectsUpdate[github] = data.pushed_at;
        } catch (e) {
          console.error("Error getting repository data: ", apiUrl, e);
        }
      }
      setProjectsLastUpdate(projectsUpdate);
    };
    getLastCommits();
  }, []);

  const totalPages = Math.ceil((allWithdrawEvents?.length || 0) / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      if (topRef.current) {
        topRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const paginatedWithdrawEvents = allWithdrawEvents?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <>
      <div className="max-w-3xl px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-primary-content bg-primary inline-block p-2">Projects</h1>
        <div className="mb-16">
          {projects.map(project => {
            return (
              <div className="mb-8" key={project.name}>
                <h2 className="font-bold text-secondary mb-1">
                  {project.name}
                  {projectsLastUpdate[project.github ?? ""] && (
                    <small className="ml-2 text-gray-500">
                      - Updated {DateTime.fromISO(projectsLastUpdate[project.github ?? ""]).toRelative()}
                    </small>
                  )}
                </h2>
                <p className="mt-2 mb-0">{project.description}</p>
                <div className="flex gap-2">
                  {project.github && (
                    <Link href={project.github} className="link link-primary text-sm" target="_blank">
                      Github
                    </Link>
                  )}
                  {project.link && (
                    <Link href={project.link} className="link link-primary text-sm" target="_blank">
                      Live URL
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <h2 className="font-bold mb-2 text-xl text-secondary" ref={topRef}>
          Recent Contributions
        </h2>
        {isWithdrawEventsLoading ? (
          <div className="m-10">
            <div className="text-5xl animate-bounce mb-2">👾</div>
            <div className="text-lg loading-dots">Loading...</div>
          </div>
        ) : (
          <>
            {paginatedWithdrawEvents?.length === 0 && (
              <div className="my-2">
                <p>No contributions yet!</p>
              </div>
            )}
            <div>
              {paginatedWithdrawEvents?.map((event: any) => {
                return (
                  <div
                    className="flex flex-col gap-1 mb-6"
                    key={`${event.builder}_${event.timestamp}`}
                    data-test={`${event.builderAddress}_${event.timestamp}`}
                  >
                    <div>
                      <Address address={event.builder} />
                    </div>
                    <div>
                      <strong>{new Date(event.timestamp * 1000).toISOString().split("T")[0]}</strong>
                    </div>
                    <div>
                      Ξ {event.amount} / {event.reason}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="join mt-2 flex gap-1">
              <button
                className="join-item btn btn-sm"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                «
              </button>
              <button className="join-item btn btn-sm">Page {currentPage}</button>
              <button
                className="join-item btn btn-sm"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                »
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Projects;
