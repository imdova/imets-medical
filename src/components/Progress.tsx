import React from "react";

interface ProgressProps {
  value: number;
  max?: number;
}

const Progress: React.FC<ProgressProps> = ({ value, max = 100 }) => {
  const percentage = (value / max) * 100;
  return (
    <div className="relative h-3 w-full rounded-lg bg-gray-200">
      <div
        className="absolute left-0 h-3 rounded-lg bg-orange-primary"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default Progress;
