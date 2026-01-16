"use client";

import React from "react";

interface AvatarProps {
  name: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ name, size = "md", className = "" }) => {
  // Extract initials from name
  const getInitials = (fullName: string): string => {
    const names = fullName.trim().split(" ");
    if (names.length >= 2) {
      return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return names[0][0].toUpperCase();
  };

  // Generate consistent color based on name
  const getAvatarColor = (fullName: string): string => {
    const colors = [
      "from-purple-500 to-pink-500",
      "from-blue-500 to-cyan-500",
      "from-green-500 to-emerald-500",
      "from-orange-500 to-red-500",
      "from-indigo-500 to-purple-500",
      "from-pink-500 to-rose-500",
      "from-cyan-500 to-blue-500",
      "from-emerald-500 to-teal-500",
      "from-yellow-500 to-orange-500",
      "from-violet-500 to-purple-500",
      "from-rose-500 to-pink-500",
      "from-teal-500 to-cyan-500",
    ];

    // Simple hash function to get consistent color for same name
    let hash = 0;
    for (let i = 0; i < fullName.length; i++) {
      hash = fullName.charCodeAt(i) + ((hash << 5) - hash);
    }

    return colors[Math.abs(hash) % colors.length];
  };

  // Size classes
  const sizeClasses = {
    sm: "h-8 w-8 text-xs",
    md: "h-12 w-12 text-sm",
    lg: "h-16 w-16 text-lg",
  };

  const initials = getInitials(name);
  const gradientColor = getAvatarColor(name);

  return (
    <div
      className={`
        ${sizeClasses[size]}
        flex items-center justify-center
        rounded-full
        bg-gradient-to-br ${gradientColor}
        font-bold text-white
        shadow-lg shadow-black/10
        ring-2 ring-white ring-offset-2
        ${className}
      `}
      title={name}
    >
      {initials}
    </div>
  );
};

export default Avatar;
