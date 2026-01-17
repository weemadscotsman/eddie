import React from 'react';

interface TerminalBlockProps {
  title: string;
  items: string[];
  type?: 'success' | 'warning' | 'neutral';
}

export const TerminalBlock: React.FC<TerminalBlockProps> = ({ title, items, type = 'neutral' }) => {
  const borderColor = type === 'success' ? 'border-sys-green' : type === 'warning' ? 'border-sys-red' : 'border-sys-gray';
  const textColor = type === 'success' ? 'text-sys-green' : type === 'warning' ? 'text-sys-red' : 'text-gray-300';

  return (
    <div className={`border-l-2 ${borderColor} pl-6 py-2 my-4 bg-sys-gray/10`}>
      <h3 className="text-lg font-mono font-bold mb-4 uppercase tracking-wider">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={idx} className={`flex items-start font-mono text-sm md:text-base ${textColor}`}>
            <span className="mr-3 opacity-50">{`>`}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};