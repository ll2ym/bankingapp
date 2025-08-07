import React from 'react';
import { Activity, TrendingUp, TrendingDown } from 'lucide-react';
import { Investment } from '../../types';

interface LiveMarketProps {
  investments: Investment[];
  livePrices: {[key: string]: {price: number, change: number, changePercent: number}};
  formatCurrency: (amount: number) => string;
  getTypeColor: (type: string) => string;
  getCurrentPrice: (investment: any) => number;
  getCurrentChangePercent: (investment: any) => number;
}

const LiveMarket: React.FC<LiveMarketProps> = ({
  investments,
  livePrices,
  formatCurrency,
  getTypeColor,
  getCurrentPrice,
  getCurrentChangePercent,
}) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
    <div className="flex items-center space-x-2 mb-4">
      <Activity className="w-5 h-5 text-blue-600" />
      <h3 className="text-lg font-semibold text-gray-900">Live Market</h3>
      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {investments.filter(inv => inv.type === 'stock' || inv.type === 'crypto').slice(0, 6).map((investment) => (
        <div key={investment.id} className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-medium text-gray-900">{investment.symbol}</span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(investment.type)}`}>
              {investment.type.toUpperCase()}
            </span>
          </div>
          <div className="text-lg font-bold text-gray-900">
            {formatCurrency(getCurrentPrice(investment))}
          </div>
          <div className={`flex items-center text-sm ${
            getCurrentChangePercent(investment) >= 0 ? 'text-green-600' : 'text-red-600'
          }`}>
            {getCurrentChangePercent(investment) >= 0 ? (
              <TrendingUp className="w-3 h-3 mr-1" />
            ) : (
              <TrendingDown className="w-3 h-3 mr-1" />
            )}
            {getCurrentChangePercent(investment) >= 0 ? '+' : ''}{getCurrentChangePercent(investment).toFixed(2)}%
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default LiveMarket;
