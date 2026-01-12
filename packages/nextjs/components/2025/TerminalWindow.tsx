import { ReactNode, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface Tab {
  id: string;
  title: string;
  content: ReactNode;
  linkUrl?: string;
  linkLabel?: string;
}

interface TerminalWindowProps {
  tabs: Tab[];
  defaultTab?: string;
}

// Desktop version with tabs
const DesktopTerminal = ({
  tabs,
  activeTab,
  setActiveTab,
}: {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (id: string) => void;
}) => {
  const activeContent = tabs.find(t => t.id === activeTab);

  return (
    <div className="hidden md:block border border-neutral-600 rounded-lg overflow-hidden">
      {/* Title bar */}
      <div className="flex items-stretch bg-neutral-700 border-b border-neutral-600">
        {/* Window controls (decorative) */}
        <div className="flex items-center gap-2 px-3 py-2">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        {/* Tab headers */}
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 min-w-0 flex items-center justify-center px-2 text-xs whitespace-nowrap border-l border-neutral-600 transition-all duration-200 ${
              activeTab === tab.id ? "text-white font-medium" : "text-neutral-400 hover:text-neutral-200"
            }`}
            style={{
              backgroundColor: activeTab === tab.id ? "#6b7280" : "transparent",
            }}
            title={tab.title}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Content area */}
      <div className="bg-black p-6">
        <div className="animate-fadeIn">
          {activeContent && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-primary">$</span>
                  <span className="text-primary">cat {activeContent.title.toLowerCase().replace(/\s+/g, "-")}.md</span>
                </div>
              </div>
              {activeContent.content}
              {activeContent.linkUrl && (
                <div className="mt-6">
                  <a
                    href={activeContent.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-content hover:text-primary text-sm"
                  >
                    → {activeContent.linkLabel || "Link"}
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Mobile version with accordion inside single terminal frame
const MobileTerminal = ({
  tabs,
  expandedTab,
  toggleTab,
}: {
  tabs: Tab[];
  expandedTab: string | null;
  toggleTab: (id: string) => void;
}) => {
  return (
    <div className="md:hidden border border-neutral-600 rounded-lg overflow-hidden">
      {/* Title bar with window controls - only once */}
      <div className="flex items-center gap-2 px-3 py-2 bg-neutral-700 border-b border-neutral-600">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-500" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
      </div>

      {/* Accordion items */}
      <div className="bg-black">
        {tabs.map((tab, index) => {
          const isExpanded = expandedTab === tab.id;
          const isLast = index === tabs.length - 1;
          return (
            <div key={tab.id} className={!isLast ? "border-b border-neutral-700" : ""}>
              {/* Accordion header */}
              <button
                onClick={() => toggleTab(tab.id)}
                className="w-full flex items-center justify-between px-4 py-3 hover:bg-neutral-800/50 transition-colors"
              >
                <span className="text-sm text-white font-medium">{tab.title}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-neutral-400 transition-transform duration-200 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Accordion content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isExpanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 pb-4">
                  <div className="flex items-center gap-2 text-xs mb-3">
                    <span className="text-primary">$</span>
                    <span className="text-primary">cat {tab.title.toLowerCase().replace(/\s+/g, "-")}.md</span>
                  </div>
                  {tab.linkUrl && (
                    <a
                      href={tab.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-content hover:text-primary"
                    >
                      → {tab.linkLabel || "Link"}
                    </a>
                  )}
                  {tab.content}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const TerminalWindow = ({ tabs, defaultTab }: TerminalWindowProps) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || tabs[0]?.id);
  const [expandedTab, setExpandedTab] = useState<string | null>(defaultTab || tabs[0]?.id);

  const toggleTab = (id: string) => {
    setExpandedTab(expandedTab === id ? null : id);
  };

  return (
    <>
      <DesktopTerminal tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <MobileTerminal tabs={tabs} expandedTab={expandedTab} toggleTab={toggleTab} />
    </>
  );
};
