import { ReactNode, useState } from "react";

interface Tab {
  id: string;
  title: string;
  content: ReactNode;
}

interface TerminalWindowProps {
  tabs: Tab[];
  defaultTab?: string;
}

export const TerminalWindow = ({ tabs, defaultTab }: TerminalWindowProps) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || tabs[0]?.id);

  const activeContent = tabs.find(t => t.id === activeTab);

  return (
    <div className="border border-neutral-600 rounded-lg overflow-hidden">
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
                <div className="flex items-center gap-2 text-primary text-sm">
                  <span>$</span>
                  <span className="text-neutral-content/70">cat</span>
                  <span className="text-secondary">{activeContent.title.toLowerCase().replace(/\s+/g, "-")}.md</span>
                </div>
              </div>
              {activeContent.content}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
