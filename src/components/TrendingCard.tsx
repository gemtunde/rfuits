import { Home } from "lucide-react";

function TrendingCard() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
      <div className="flex items-center space-x-3 mb-3">
        <div className="h-8 w-8 bg-gray-100 rounded flex items-center justify-center">
          <Home className="h-4 w-4 text-gray-500" />
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-base sm:text-lg text-[#404645]">
            Hashtag research
          </h3>
          <p className="text-sm sm:text-base font-normal text-[#404645]">
            Upgrade to pro subscription for $9 / month
          </p>
        </div>
      </div>
    </div>
  );
}

export default TrendingCard;
