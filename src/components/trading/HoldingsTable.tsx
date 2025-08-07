import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Investment } from '../../types';

interface HoldingsTableProps {
  investments: Investment[];
  formatCurrency: (amount: number) => string;
  getTypeColor: (type: string) => string;
  getCurrentPrice: (investment: any) => number;
  getCurrentChangePercent: (investment: any) => number;
}

const HoldingsTable: React.FC<HoldingsTableProps> = ({
  investments,
  formatCurrency,
  getTypeColor,
  getCurrentPrice,
  getCurrentChangePercent,
}) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200">
    <div className="p-6 border-b border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900">Your Holdings</h3>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Asset</th>
            <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Price</th>
            <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Holdings</th>
            <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Value</th>
            <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">24h Change</th>
            <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {investments.map((investment) => {
            const currentPrice = getCurrentPrice(investment);
            const currentValue = currentPrice * investment.holdings;
            const changePercent = getCurrentChangePercent(investment);

            return (
              <tr key={investment.id} className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-600">
                        {investment.symbol.slice(0, 2)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{investment.name}</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">{investment.symbol}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(investment.type)}`}>
                          {investment.type.toUpperCase()}
                        </span>
                        {(investment.type === 'stock' || investment.type === 'crypto') && (
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        )}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="font-medium text-gray-900">{formatCurrency(currentPrice)}</span>
                </td>
                <td className="py-4 px-6">
                  <span className="text-gray-600">{investment.holdings}</span>
                </td>
                <td className="py-4 px-6">
                  <span className="font-medium text-gray-900">{formatCurrency(currentValue)}</span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-1">
                    {changePercent >= 0 ? (
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-500" />
                    )}
                    <span className={`font-medium ${
                      changePercent >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {changePercent >= 0 ? '+' : ''}{changePercent.toFixed(2)}%
                    </span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Buy
                    </button>
                    <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                      Sell
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
);

export default HoldingsTable;
