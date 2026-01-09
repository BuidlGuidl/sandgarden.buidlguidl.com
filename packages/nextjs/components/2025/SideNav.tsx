import { SLIDES, SlideId } from "./constants";

interface SideNavProps {
  activeSlide: string;
  onNavigate: (slideId: SlideId) => void;
}

export const SideNav = ({ activeSlide, onNavigate }: SideNavProps) => (
  <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3 bg-black/90 backdrop-blur-sm px-4 py-3 rounded-lg border border-neutral-content/10">
    {SLIDES.map(slide => (
      <button
        key={slide.id}
        onClick={() => onNavigate(slide.id)}
        className={`flex items-center gap-3 transition-all duration-200 text-sm ${
          activeSlide === slide.id ? "text-primary-content" : "text-neutral-content/40 hover:text-neutral-content/70"
        }`}
      >
        <span
          className={`block w-1.5 h-1.5 transition-all duration-200 ${
            activeSlide === slide.id ? "bg-primary scale-125" : "bg-neutral-content/30"
          }`}
        />
        <span className={`transition-all duration-200 ${activeSlide === slide.id ? "font-medium" : ""}`}>
          {slide.title}
        </span>
      </button>
    ))}
  </nav>
);
