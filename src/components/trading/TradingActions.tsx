import React from 'react';
import { Filter, Search } from 'lucide-react';
import { Investment } from '../../types';

interface TradingActionsProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  categories: { id: string, label: string, count: number }[];
}

const TradingActions: React.FC<TradingActionsProps> = ({
  activeCategory,
  setActiveCategory,
  searchTerm,
  setSearchTerm,
  categories,
}) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.label} ({category.count})
          </button>
        ))}
      </div>

      <div className="flex items-center space-x-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search assets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <Filter className="w-4 h-4" />
          <span>Filter</span>
        </button>
      </div>
    </div>
  </div>
);

export default TradingActions;
