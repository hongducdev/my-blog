import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-gradient-to-r w-10 h-10 from-[#a6e3a1] to-[#94e2d5] p-2 text-white font-bold text-lg flex items-center justify-center rounded-sm">
        {"</>"}
      </div>
      <div>
        <span className="text-xl font-bold leading-none">hongducdev</span>
        <p className="text-xs">Programming for life!</p>
      </div>
    </div>
  );
};

export default Logo;
