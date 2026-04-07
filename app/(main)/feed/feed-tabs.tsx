import React from "react";

const FeedTabs = () => {
  const tabs = ["Global", "Latest", "Engagement"];

  return (
    <div className="flex justify-center">
      <div className="flex gap-2 bg-[#0E1C28] p-1 rounded-xl">
        {tabs.map((tab) => (
          <button
            key={tab}
            className="px-4 py-1.5 rounded-lg text-sm hover:bg-[#1C2A36]"
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeedTabs;
