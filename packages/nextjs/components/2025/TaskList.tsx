interface TaskListProps {
  tasks: string[];
}

export const TaskList = ({ tasks }: TaskListProps) => (
  <div className="grid gap-2">
    {tasks.map((task, index) => (
      <div key={index} className="flex items-start gap-3 text-neutral-content/70">
        <span className="text-secondary text-xs">◆</span>
        <span className="text-sm leading-relaxed">{task}</span>
      </div>
    ))}
  </div>
);
