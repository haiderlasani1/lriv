import React from "react";

interface TileContainerProps {
    children: React.ReactNode;
    className?: string;
}

export default function TileContainer({children, className = ''}: TileContainerProps) {
    return (
        <div className={`bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg ${className}`}>
            <div className="p-4 text-gray-900 dark:text-gray-100 flex justify-between">
                {children}
            </div>
        </div>
    );
}
