import React from "react";

export default function CategoryBar() {
  const categories = [
    "App Design",
    "Website Design",
    "Dashboard",
    "Wireframe",
  ];
  return (
    <div className="w-full bg-[var(--primary)] text-white font-semibold flex items-center justify-center py-3 px-2 sticky top-[64px] z-40 shadow-sm">
      <div className="flex gap-8 items-center text-base">
        {categories.map((cat, i) => (
          <React.Fragment key={cat}>
            {i > 0 && <span className="text-xl text-[var(--primary)]">*</span>}
            <span className="px-2">{cat}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
} 