"use client";

import { Search } from "lucide-react";
import TrendingCard from "@/components/TrendingCard";

export default function DiscoverPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-xl font-semibold mb-4">Discover</h2>

      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Search for topics, hashtags, or accounts"
        />
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Popular Categories</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Finance",
            "Technology",
            "Health",
            "Education",
            "Entertainment",
            "Sports",
            "Travel",
            "Food",
          ].map((category) => (
            <span
              key={category}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Recommended for You</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="h-40 bg-blue-100"></div>
              <div className="p-4">
                <h4 className="font-medium mb-1">Recommended Item {item}</h4>
                <p className="text-sm text-gray-500 mb-3">
                  Short description about this recommendation
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">July 2, 2021</span>
                  <button className="text-sm text-blue-500 font-medium">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Trending Topics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
        </div>
      </div>
    </div>
  );
}
