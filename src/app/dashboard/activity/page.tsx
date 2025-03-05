"use client";

import AccountRow from "@/components/AccountRow";
import TrendingCard from "@/components/TrendingCard";
import Image from "next/image";

export default function ActivityPage() {
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      <h2 className="text-xl font-semibold mb-4 px-8 sm:px-6">
        Trending topics
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 px-2 sm:px-6">
        {[1, 2].map((index) => (
          <TrendingCard key={index} />
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
        <div className="w-full md:w-1/4 flex justify-center items-center  p-4 sm:p-6">
          <div className="relative h-80 sm:h-64 w-full">
            <Image
              src="/images/banner.png"
              alt="scratching head"
              width={100}
              height={300}
            />
          </div>
        </div>

        <div className="w-full md:w-3/4 bg-white rounded-lg shadow-xl p-4 sm:p-6 md:mr-6">
          <h3 className="text-gray-600 mb-2">Balances</h3>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            $9,314
          </h2>

          {[1, 2, 3, 4].map((item) => (
            <AccountRow key={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
