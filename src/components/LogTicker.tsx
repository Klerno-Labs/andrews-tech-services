"use client";

const logs = [
  { id: 1, model: "iPhone 12 Pro", issue: "SCREEN", status: "FIXED", time: "12ms" },
  { id: 2, model: "Samsung S21", issue: "BATTERY", status: "FIXED", time: "45ms" },
  { id: 3, model: "MacBook Air", issue: "KEYBOARD", status: "FIXED", time: "2h 10m" },
  { id: 4, model: "iPad Pro 12.9", issue: "LOGIC BD", status: "FIXED", time: "4h 30m" },
  { id: 5, model: "Pixel 6", issue: "CHARGE PORT", status: "FIXED", time: "18ms" },
  { id: 6, model: "iPhone 11", issue: "FACE ID", status: "FIXED", time: "1h 15m" },
  { id: 7, model: "Galaxy Note 20", issue: "SCREEN", status: "FIXED", time: "32ms" },
  { id: 8, model: "Switch OLED", issue: "JOYSTICK", status: "FIXED", time: "25ms" },
];

export default function LogTicker() {
  // Duplicate logs to create seamless loop
  const displayLogs = [...logs, ...logs, ...logs];

  return (
    <div className="w-full bg-background-surface border-y border-primary-dark/20 overflow-hidden py-3">
      <div className="flex whitespace-nowrap animate-scrolling hover:[animation-play-state:paused]">
        {displayLogs.map((log, idx) => (
          <div key={`${log.id}-${idx}`} className="mx-6 flex items-center gap-4 font-mono text-sm opacity-70 hover:opacity-100 transition-opacity">
            <span className="text-muted">{log.model}</span>
            <span className="text-muted">//</span>
            <span className="text-text">{log.issue}</span>
            <span className="text-primary">{log.status}</span>
            <span className="text-text-muted text-xs">({log.time})</span>
          </div>
        ))}
      </div>
    </div>
  );
}