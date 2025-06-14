
import React from "react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { ExternalLink } from "lucide-react";

interface ProjectTool {
  toolName: string;
  icon: React.ReactNode;
  docUrl?: string;
  description?: string;
}

interface ProjectToolsBadgesProps {
  tools: ProjectTool[];
}

const ProjectToolsBadges: React.FC<ProjectToolsBadgesProps> = ({ tools }) => {
  if (!Array.isArray(tools) || tools.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-5">
      {tools.map((tool, idx) => (
        <Tooltip key={tool.toolName + idx}>
          <TooltipTrigger asChild>
            {tool.docUrl ? (
              <a
                href={tool.docUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-blue-100 bg-blue-50 hover:bg-blue-100 shadow-sm transition hover:scale-105 text-xs font-medium text-blue-700"
              >
                {tool.icon}
                <span>{tool.toolName}</span>
                <ExternalLink size={12} className="ml-0.5" />
              </a>
            ) : (
              <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-orange-100 bg-orange-50 text-orange-700 text-xs font-medium shadow-sm">
                {tool.icon}
                <span>{tool.toolName}</span>
              </div>
            )}
          </TooltipTrigger>
          <TooltipContent side="top">
            <span>{tool.description || tool.toolName}</span>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
};

export default ProjectToolsBadges;
