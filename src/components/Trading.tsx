import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Filter, Search, Plus } from 'lucide-react';
import { mockInvestments } from '../data/mockData';

const Trading: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All Assets', count: mockInvestments.length },
    { id: 'etf', label: 'ETFs', count: mockInvestments.filter(i => i.type === 'etf').length },
    { id: 'crypto', label: 'Crypto', count: mockInvestments.filter(i => i.type === 'crypto').length },
    { id: 'stock', label: 'Stocks', count: mockInvestments.filter(i => i.type === 'stock').length }
  ];

  const filteredInvestments = mockInvestments.filter(investment => {
    const matchesCategory = activeCategory === 'all' || investment.type === activeCategory;
    const matchesSearch = investment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         investment.symbol.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPortfolioValue = mockInvestments.reduce((sum, investment) => sum + investment.value, 0);
  const totalDayChange = mockInvestments.reduce((sum, investment) => sum + (investment.change * investment.holdings), 0);
  const totalDayChangePercent = (totalDayChange / totalPortfolioValue) * 100;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'etf': return 'bg-blue-100 text-blue-800';
      case 'crypto': return 'bg-yellow-100 text-yellow-800';
      case 'stock': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Portfolio Overview */}
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

      {/* Filters and Search */}
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

      {/* Holdings Table */}
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
              {filteredInvestments.map((investment) => (
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
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-medium text-gray-900">{formatCurrency(investment.price)}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-gray-600">{investment.holdings}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-medium text-gray-900">{formatCurrency(investment.value)}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-1">
                      {investment.changePercent >= 0 ? (
                        <TrendingUp className="w-4 h-4 text-green-500" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-500" />
                      )}
                      <span className={`font-medium ${
                        investment.changePercent >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {investment.changePercent >= 0 ? '+' : ''}{investment.changePercent.toFixed(2)}%
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Trading;