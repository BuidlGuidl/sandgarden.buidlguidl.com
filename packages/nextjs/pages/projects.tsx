import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { DateTime } from "luxon";
import type { NextPage } from "next";
import { gql, useQuery } from "urql";
import { Address } from "~~/components/scaffold-eth";
import contracts from "~~/generated/hardhat_contracts";

const projects = [
  {
    name: "Scaffold-ETH 2",
    description:
      "An open-source, up-to-date toolkit for building decentralized applications on the Ethereum blockchain.",
    github: "https://github.com/scaffold-eth/scaffold-eth-2",
  },
  {
    name: "SpeedRunEthereum",
    description: "A platform to learn how to build on Ethereum; the superpowers and the gotchas.",
    link: "https://speedrunethereum.com",
    github: "https://github.com/BuidlGuidl/SpeedRunEthereum",
  },
  {
    name: "BuidlGuidl L2 testnet",
    description: "L2 testnet (sepolia) for BuidlGuidl. Powered by the OP Stack.",
    link: "https://l2.buidlguidl.com/",
    github: "https://github.com/BuidlGuidl/l2.buidlguidl.com",
  },
  {
    name: "ABI Ninja",
    description: "Interact with any contract on Ethereum with a simple interface",
    link: "https://abi.ninja/",
    github: "https://github.com/buidlguidl/abi.ninja",
  },
  {
    name: "BG Hacker Houses",
    description:
      "An experiment to retroactively fund open-source work by providing a monthly UBI (via ETH stream) to open-source developers",
    github: "https://github.com/BuidlGuidl/hacker-houses-streams",
  },
  {
    name: "Event Burner Wallet",
    description: "A burner wallet experience for events",
    github: "https://github.com/BuidlGuidl/event-wallet",
  },
  {
    name: "BuidlGuidl v3",
    description:
      "A curated group of Ethereum builders creating products, prototypes, and tutorials to enrich the web3 ecosystem.",
    link: "https://buidlguidl.com/",
    github: "https://github.com/scaffold-eth/buidlguidl-v3",
  },
];

const githubApiUri = "https://api.github.com/repos";

const WithdrawlsQuery = gql`
  query Withdrawls($cohortAddress: String!) {
    cohortWithdrawals(where: { cohortContractAddress: $cohortAddress }, orderBy: "timestamp", orderDirection: "desc") {
      reason
      builder
      amount
      timestamp
      builder
    }
  }
`;

const Projects: NextPage = () => {
  const [{ data: newWithdrawEventsData, fetching: isLoadingNewContractWithdrawEvents }] = useQuery({
    query: WithdrawlsQuery,
    variables: {
      cohortAddress: contracts[10][0].contracts.SandGardenStreams.address,
    },
  });

  const [{ data: oldWithdrawEvents, fetching: isLoadingOldContractWithdrawEvents }] = useQuery({
    query: WithdrawlsQuery,
    variables: {
      cohortAddress: contracts[10][0].contracts._SandGardenStreamsOld.address,
    },
  });

  const { cohortWithdrawals: newContractWithdrawEvents } = newWithdrawEventsData || {};
  const { cohortWithdrawals: oldContractWithdrawEvents } = oldWithdrawEvents || {};

  const sortedWithdrawEvents = [...(newContractWithdrawEvents || []), ...(oldContractWithdrawEvents || [])];

  type LastUpdateType = {
    [key: string]: string;
  };

  const [projectsLastUpdate, setProjectsLastUpdate] = useState<LastUpdateType>({});

  useEffect(() => {
    const getLastCommits = async () => {
      const projectsUpdate: LastUpdateType = {};
      for (let i = 0; i < projects.length; i++) {
        const github: string = projects[i].github;
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
                  {projectsLastUpdate[project.github] && (
                    <small className="ml-2 text-gray-500">
                      - Updated {DateTime.fromISO(projectsLastUpdate[project.github]).toRelative()}
                    </small>
                  )}
                </h2>

                <p className="mt-2 mb-0">{project.description}</p>
                <div className="flex gap-2">
                  <Link href={project.github} className="link link-primary text-sm" target="_blank">
                    Github
                  </Link>
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
        <h2 className="font-bold mb-2 text-xl text-secondary">Recent Contributions</h2>
        {isLoadingNewContractWithdrawEvents || isLoadingOldContractWithdrawEvents ? (
          <div className="m-10">
            <div className="text-5xl animate-bounce mb-2">👾</div>
            <div className="text-lg loading-dots">Loading...</div>
          </div>
        ) : (
          <>
            {sortedWithdrawEvents?.length === 0 && (
              <div className="my-2">
                <p>No contributions yet!</p>
              </div>
            )}
            {sortedWithdrawEvents?.map((event: any) => {
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
          </>
        )}
      </div>
    </>
  );
};

export default Projects;
