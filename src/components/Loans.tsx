import React from 'react';
import { Home, CreditCard, Calendar, TrendingDown, AlertCircle, CheckCircle } from 'lucide-react';
import { mockLoans } from '../data/mockData';

const Loans: React.FC = () => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'EUR'
    }).format(Math.abs(amount));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const totalOwed = mockLoans.reduce((sum, loan) => sum + Math.abs(loan.amount), 0);
  const totalMonthlyPayment = mockLoans.reduce((sum, loan) => sum + loan.monthlyPayment, 0);

  const getLoanIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'mortgage': return <Home className="w-6 h-6" />;
      case 'personal loan': return <CreditCard className="w-6 h-6" />;
      default: return <CreditCard className="w-6 h-6" />;
    }
  };

  const getProgressColor = (remainingTerms: number) => {
    if (remainingTerms <= 12) return 'bg-red-500';
    if (remainingTerms <= 36) return 'bg-yellow-500';
    return 'bg-blue-500';
  };

  return (
    <div className="space-y-6">
      {/* Loan Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-red-200 text-sm font-medium">Total Outstanding</p>
                <h2 className="text-3xl font-bold">-{formatCurrency(totalOwed)}</h2>
              </div>
              <TrendingDown className="w-8 h-8 text-red-200" />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div>
                <p className="text-red-200 text-sm">Monthly Payment</p>
                <p className="text-lg font-semibold">{formatCurrency(totalMonthlyPayment)}</p>
              </div>
              <div>
                <p className="text-red-200 text-sm">Active Loans</p>
                <p className="text-lg font-semibold">{mockLoans.length}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Payment Status</p>
                  <p className="font-semibold text-green-600">Up to Date</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Next Payment</p>
                  <p className="font-semibold text-gray-900">Feb 1, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Loan Details */}
      <div className="space-y-4">
        {mockLoans.map((loan) => (
          <div key={loan.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  {getLoanIcon(loan.type)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{loan.type}</h3>
                  <p className="text-sm text-gray-500">Outstanding Balance</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-red-600">-{formatCurrency(loan.amount)}</p>
                <p className="text-sm text-gray-500">{loan.interestRate}% APR</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500">Monthly Payment</span>
                </div>
                <p className="text-lg font-semibold text-gray-900">{formatCurrency(loan.monthlyPayment)}</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingDown className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500">Remaining Terms</span>
                </div>
                <p className="text-lg font-semibold text-gray-900">{loan.remainingTerms} months</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500">Next Payment</span>
                </div>
                <p className="text-lg font-semibold text-gray-900">{formatDate(loan.nextPayment)}</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500">Status</span>
                </div>
                <p className="text-lg font-semibold text-green-600">Current</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6">
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>Loan Progress</span>
                <span>{loan.remainingTerms} months remaining</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className={`h-3 rounded-full ${getProgressColor(loan.remainingTerms)}`}
                  style={{ width: `${Math.max(10, (1 - loan.remainingTerms / 360) * 100)}%` }}
                ></div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                <span>Make Payment</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg transition-colors">
                <span>View Details</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg transition-colors">
                <span>Payment History</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Loan Management Tools */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Loan Management</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Calendar className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-900">Set Up Auto-Pay</p>
              <p className="text-sm text-gray-500">Never miss a payment</p>
            </div>
          </button>

          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <TrendingDown className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-900">Extra Payments</p>
              <p className="text-sm text-gray-500">Pay down principal faster</p>
            </div>
          </button>

          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-orange-600" />
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-900">Refinance Options</p>
              <p className="text-sm text-gray-500">Explore better rates</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Loans;