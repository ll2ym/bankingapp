import React from 'react';
import { CreditCard, TrendingUp, Send, Download, Plus, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { mockBalance, mockTransactions } from '../data/mockData';

const Banking: React.FC = () => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {/* Account Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-blue-200 text-sm font-medium">Current Account</p>
                <h2 className="text-3xl font-bold">{formatCurrency(mockBalance.current)}</h2>
              </div>
              <CreditCard className="w-8 h-8 text-blue-200" />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div>
                <p className="text-blue-200 text-sm">Available</p>
                <p className="text-lg font-semibold">{formatCurrency(mockBalance.available)}</p>
              </div>
              <div>
                <p className="text-blue-200 text-sm">Pending</p>
                <p className="text-lg font-semibold">{formatCurrency(mockBalance.pending)}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">This Month</p>
                  <p className="font-semibold text-gray-900">+12.3%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Card Ending</p>
                  <p className="font-semibold text-gray-900">••••1234</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Send className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-sm font-medium text-gray-900">Transfer</span>
          </button>
          <button className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Download className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-sm font-medium text-gray-900">Deposit</span>
          </button>
          <button className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Plus className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-sm font-medium text-gray-900">Pay Bills</span>
          </button>
          <button className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-orange-600" />
            </div>
            <span className="text-sm font-medium text-gray-900">Cards</span>
          </button>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {mockTransactions.map((transaction) => (
            <div key={transaction.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    transaction.type === 'credit' ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    {transaction.type === 'credit' ? (
                      <ArrowDownRight className="w-5 h-5 text-green-600" />
                    ) : (
                      <ArrowUpRight className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{transaction.description}</p>
                    <p className="text-sm text-gray-500">{formatDate(transaction.date)} • {transaction.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${
                    transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.type === 'credit' ? '+' : ''}{formatCurrency(transaction.amount)}
                  </p>
                  <p className="text-sm text-gray-500">{formatCurrency(transaction.balance)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banking;