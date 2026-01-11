import { useEffect, useRef, useState } from "react";
import { Share_Tech_Mono } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import { NextPageWithLayout } from "./_app";
import {
  EcosystemSlide,
  EducationalSlide,
  MiscSlide,
  SLIDES,
  ScaffoldEthSlide,
  SideNav,
  SlideId,
  SpeedrunSlide,
} from "~~/components/2025";

const shareTechMono = Share_Tech_Mono({ subsets: ["latin"], weight: "400" });

const Page2025: NextPageWithLayout = () => {
  const [activeSlide, setActiveSlide] = useState<SlideId>("speedrun");
  const containerRef = useRef<HTMLDivElement>(null);

  // Track which slide is in view using Intersection Observer
  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const slideId = entry.target.getAttribute("id") as SlideId;
          if (slideId) {
            setActiveSlide(slideId);
          }
        }
      });
    }, options);

    SLIDES.forEach(slide => {
      const element = document.getElementById(slide.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSlide = (slideId: SlideId) => {
    const element = document.getElementById(slideId);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Head>
        <title>2025 Year in Review | Sand Garden</title>
        <meta
          name="description"
          content="Explore Sand Garden's 2025 achievements and impact on the Ethereum ecosystem"
        />
        <meta property="og:title" content="2025 Year in Review | Sand Garden" />
        <meta
          property="og:description"
          content="Explore Sand Garden's 2025 achievements and impact on the Ethereum ecosystem"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="2025 Year in Review | Sand Garden" />
        <meta
          property="twitter:description"
          content="Explore Sand Garden's 2025 achievements and impact on the Ethereum ecosystem"
        />
        {/* TODO: Replace with /2025-thumbnail.png before merge. */}
        <meta property="og:image" content="https://sand-garden.vercel.app/thumbnail.png" />
        <meta property="twitter:image" content="https://sand-garden.vercel.app/thumbnail.png" />
      </Head>

      <div ref={containerRef} className={`min-h-screen bg-base-100 text-base-content ${shareTechMono.className}`}>
        <SideNav activeSlide={activeSlide} onNavigate={scrollToSlide} />

        {/* Header */}
        <header className="px-6 py-4 flex items-center justify-between border-b border-neutral-content/10">
          <Link
            href="/"
            className="text-primary-content hover:text-primary transition-colors text-sm flex items-center gap-2 group"
          >
            <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to site</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-primary uppercase tracking-[0.3em]">Sand Garden</span>
            <span className="text-primary-content font-bold text-lg">2025 recap</span>
          </div>

          <div className="w-24" />
        </header>

        {/* Slides */}
        <main>
          <SpeedrunSlide />
          <ScaffoldEthSlide />
          <EducationalSlide />
          <EcosystemSlide />
          <MiscSlide />
        </main>
      </div>
    </>
  );
};

Page2025.getLayout = page => {
  return <>{page}</>;
};

export default Page2025;
