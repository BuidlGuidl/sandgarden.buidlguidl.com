import { NOISE_TEXTURE_BG } from "../constants";

export const HeroSlide = () => (
  <section id="hero" className="py-16 md:py-24 flex items-center justify-center relative overflow-hidden">
    {/* Background texture */}
    <div className="absolute inset-0 opacity-[0.14]">
      <div className="absolute inset-0" style={{ backgroundImage: NOISE_TEXTURE_BG }} />
    </div>

    <div className="container mx-auto px-6 lg:px-12 relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        {/* Title block */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-4">
            <span className="text-primary">SAND GARDEN</span>
            <br />
            <span className="text-primary-content">2025 RECAP</span>
          </h1>

          <p className="text-sm md:text-base text-neutral-content/60 max-w-2xl mx-auto leading-relaxed">
            The Sand Garden is BuidlGuidl’s core builder team, dedicated to creating tools and educational resources to
            onboard Ethereum developers and help them grow on the ecosystem. In 2025, we shipped big upgrades to
            Speedrun Ethereum, Scaffold-ETH 2, helped run several educational initiatives, and partnered to build new
            tools with ENS, Arbitrum, and others.
          </p>
        </div>

        {/* Stats line - terminal style */}
        <div className="mb-6 font-mono text-xs md:text-sm">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-neutral-content/50">
            <span>
              <span className="text-primary">$</span> sre_visitors: <span className="text-primary-content">92,400</span>
            </span>
            <span>
              <span className="text-primary">$</span> sre_signups: <span className="text-primary-content">5,700</span>
            </span>
            <span>
              <span className="text-primary">$</span> se2_repos: <span className="text-primary-content">2,243</span>
            </span>
          </div>
        </div>

        {/* Tracks */}
        <div className="flex flex-wrap justify-center gap-2">
          {[
            { href: "#speedrun", label: "education" },
            { href: "#scaffold-eth", label: "tooling" },
            { href: "#ecosystem", label: "collabs" },
          ].map(track => (
            <a
              key={track.href}
              href={track.href}
              className="px-3 py-1 text-xs text-neutral-content/40 border border-neutral-content/10 hover:border-primary/40 hover:text-primary-content transition-colors"
            >
              /{track.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);
