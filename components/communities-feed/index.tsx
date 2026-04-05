import React from "react";

const CommunitiesFeed = () => {
  return (
    <div className="space-y-4 sticky top-6">
      {/* Search */}
      <div className="bg-[#0E1C28] p-3 rounded-xl border border-white/10">
        <input
          placeholder="Search"
          className="w-full bg-transparent outline-none text-sm"
        />
      </div>

      {/* Empty State */}
      <div className="p-5 rounded-2xl border border-white/10 text-center space-y-3">
        <p className="text-sm text-gray-400">
          No internet access. Check your network or retry...
        </p>

        <button className="bg-[#FB8500] hover:bg-[#ff9b3d] text-white px-4 py-2 rounded-full text-sm">
          Retry
        </button>
      </div>
    </div>
  );
};

export default CommunitiesFeed;
