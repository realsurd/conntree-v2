import React from "react";
import { FiSearch } from "react-icons/fi";

const CommunitiesFeed = () => {
  return (
    <div className="space-y-4 sticky top-6 border border-[#282828] rounded-md h-auto p-4">
      {/* Search */}
      <div className="bg-[#0E1C28] text-[#FCFCFC] p-3 rounded-xl border border-white/10 flex items-center gap-2">
        <FiSearch className="text-lg" />

        <input
          placeholder="Search"
          className="text-[#FCFCFC] w-full bg-transparent outline-none text-sm"
        />
      </div>

      {/* Empty State */}
      <div className="p-5 text-center space-y-3">
        <p className="text-[22px] text-[#707988]">
          No internet access. Check your network or retry...
        </p>

        <button className="bg-[#FB8500] hover:bg-[#ff9b3d] text-white w-[180px] px-2 py-2 rounded-full text-lg">
          Retry
        </button>
      </div>
    </div>
  );
};

export default CommunitiesFeed;
