import { ReactNode } from "react";
import { NOISE_TEXTURE_BG } from "./constants";

interface SlideSectionProps {
  id: string;
  trackName: string;
  children: ReactNode;
}

export const SlideSection = ({ id, trackName, children }: SlideSectionProps) => (
  <section
    id={id}
    className="min-h-[80vh] py-24 flex items-start relative overflow-hidden border-t border-neutral-content/10 first:border-t-0"
  >
    {/* Background texture */}
    <div className="absolute inset-0 opacity-[0.14]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: NOISE_TEXTURE_BG,
        }}
      />
    </div>

    <div className="container mx-auto px-6 lg:px-12 relative z-10">
      {/* Section indicator */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-sm text-white/80 uppercase tracking-[0.3em]">{trackName}</span>
        <span className="w-48 lg:w-64 h-px bg-neutral-content/20" />
      </div>

      {children}
    </div>
  </section>
);
