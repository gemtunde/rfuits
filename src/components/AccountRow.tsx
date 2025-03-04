import { Plus, Minus } from "lucide-react";

function AccountRow() {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100">
      <span className="text-gray-600">Main account</span>
      <div className="flex items-center space-x-2">
        <span className="font-medium">$413</span>
        <div className="flex space-x-1">
          <button className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center">
            <Minus className="h-3 w-3" />
          </button>
          <button className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center">
            <Plus className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AccountRow;
