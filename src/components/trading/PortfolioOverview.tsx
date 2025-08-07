import React from 'react';
import { TrendingUp, Plus } from 'lucide-react';
import { Investment } from '../../types';

interface PortfolioOverviewProps {
  totalPortfolioValue: number;
  totalDayChange: number;
  totalDayChangePercent: number;
  formatCurrency: (amount: number) => string;
}

const PortfolioOverview: React.FC<PortfolioOverviewProps> = ({
  totalPortfolioValue,
  totalDayChange,
  totalDayChangePercent,
  formatCurrency,
}) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="md:col-span-2">
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-green-200 text-sm font-medium">Total Portfolio Value</p>
            <h2 className="text-3xl font-bold">{formatCurrency(totalPortfolioValue)}</h2>
          </div>
          <TrendingUp className="w-8 h-8 text-green-200" />
        </div>
        <div className="flex items-center space-x-2">
          <span className={`flex items-center text-sm font-medium ${
            totalDayChangePercent >= 0 ? 'text-green-200' : 'text-red-200'
          }`}>
            {totalDayChangePercent >= 0 ? (
              <TrendingUp className="w-4 h-4 mr-1" />
            ) : (
              <TrendingDown className="w-4 h-4 mr-1" />
            )}
            {totalDayChangePercent >= 0 ? '+' : ''}{totalDayChangePercent.toFixed(2)}%
          </span>
          <span className="text-green-200 text-sm">
            ({totalDayChange >= 0 ? '+' : ''}{formatCurrency(totalDayChange)}) today
          </span>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <div className="text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Plus className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">Start Investing</h3>
        <p className="text-sm text-gray-500 mb-4">Diversify your portfolio with our recommended assets</p>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
          Browse Assets
        </button>
      </div>
    </div>
  </div>
);

export default PortfolioOverview;
