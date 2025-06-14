
import React from 'react';

const SkeletonCard: React.FC = () => {
  return (
    <div className="glass-effect-dark rounded-xl overflow-hidden animate-pulse">
      <div className="h-48 skeleton"></div>
      <div className="p-6 space-y-4">
        <div className="skeleton h-6 w-3/4 rounded"></div>
        <div className="skeleton h-4 w-full rounded"></div>
        <div className="skeleton h-4 w-2/3 rounded"></div>
        <div className="flex gap-2 mt-4">
          <div className="skeleton h-6 w-16 rounded-full"></div>
          <div className="skeleton h-6 w-20 rounded-full"></div>
          <div className="skeleton h-6 w-14 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
