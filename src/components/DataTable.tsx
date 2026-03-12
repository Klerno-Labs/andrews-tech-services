"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface Column {
  key: string;
  label: string;
  align?: "left" | "right" | "center";
}

interface DataTableProps {
  columns: Column[];
  rows: Record<string, React.ReactNode>[];
  highlightKey?: string;
}

export const DataTable: React.FC<DataTableProps> = ({ columns, rows, highlightKey }) => {
  return (
    <div className="w-full overflow-x-auto border border-[#1a1a1a] rounded-lg">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-panel border-b border-[#1a1a1a]">
            {columns.map((col) => (
              <th
                key={col.key}
                className={cn(
                  "py-4 px-6 font-mono text-xs uppercase tracking-widest text-muted",
                  col.align === "right" && "text-right",
                  col.align === "center" && "text-center"
                )}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#1a1a1a]">
          {rows.map((row, index) => (
            <tr
              key={index}
              className={cn(
                "hover:bg-[#050505] transition-colors group",
                highlightKey && row[highlightKey] && "border-l-2 border-l-terminal-green bg-terminal-green/5"
              )}
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={cn(
                    "py-4 px-6 font-mono text-sm text-text-main",
                    col.key === "price" && "text-terminal-green font-bold text-lg",
                    col.align === "right" && "text-right",
                    col.align === "center" && "text-center"
                  )}
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
