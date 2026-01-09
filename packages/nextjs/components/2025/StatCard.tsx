interface StatCardProps {
  value: string;
  label: string;
  growth?: string;
}

export const StatCard = ({ value, label, growth }: StatCardProps) => (
  <div className="group">
    <div className="border border-neutral-content/20 px-4 py-2 transition-colors duration-200 hover:border-neutral-content/40">
      {/* Top border decoration */}
      <div className="flex items-center gap-2 text-neutral-content/30 text-xs">
        <span>┌</span>
        <span className="flex-1 border-t border-neutral-content/20" />
        <span>─</span>
      </div>

      {/* Content */}
      <div className="flex flex-col py-4 items-center text-center">
        <span className="text-3xl md:text-4xl font-bold text-primary-content tracking-tight">{value}</span>
        {growth && <span className="text-secondary text-sm mt-1">{growth}</span>}
        <span className="text-neutral-content/50 text-sm mt-2">{label}</span>
      </div>

      {/* Bottom border decoration */}
      <div className="flex items-center gap-2 text-neutral-content/30 text-xs">
        <span>└</span>
        <span className="flex-1 border-t border-neutral-content/20" />
        <span>┘</span>
      </div>
    </div>
  </div>
);
