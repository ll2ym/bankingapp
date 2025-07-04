import { Transaction, Investment, Loan, User, AccountBalance } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'Alexander Hamilton',
  email: 'alex.hamilton@email.com',
  avatar: 'AH'
};

export const mockBalance: AccountBalance = {
  current: 389042.09,
  available: 385542.09,
  pending: 3500.00
};

export const mockTransactions: Transaction[] = [
  {
    id: '1',
    date: '2024-01-15',
    description: 'Salary Payment - TechCorp Ltd',
    amount: 8500.00,
    type: 'credit',
    category: 'Income',
    balance: 389042.09
  },
  {
    id: '2',
    date: '2024-01-14',
    description: 'Transfer to Investment Portfolio',
    amount: -5000.00,
    type: 'debit',
    category: 'Investment',
    balance: 380542.09
  },
  {
    id: '3',
    date: '2024-01-13',
    description: 'Online Purchase - Amazon',
    amount: -127.99,
    type: 'debit',
    category: 'Shopping',
    balance: 385542.09
  },
  {
    id: '4',
    date: '2024-01-12',
    description: 'Dividend Payment - VXUS ETF',
    amount: 342.18,
    type: 'credit',
    category: 'Investment',
    balance: 385670.08
  },
  {
    id: '5',
    date: '2024-01-11',
    description: 'Restaurant - Le Bernardin',
    amount: -285.50,
    type: 'debit',
    category: 'Dining',
    balance: 385327.90
  },
  {
    id: '6',
    date: '2024-01-10',
    description: 'Freelance Project Payment',
    amount: 2500.00,
    type: 'credit',
    category: 'Income',
    balance: 385613.40
  },
  {
    id: '7',
    date: '2024-01-09',
    description: 'Utility Bill - ConEd',
    amount: -156.32,
    type: 'debit',
    category: 'Utilities',
    balance: 383113.40
  },
  {
    id: '8',
    date: '2024-01-08',
    description: 'ATM Withdrawal',
    amount: -500.00,
    type: 'debit',
    category: 'Cash',
    balance: 383269.72
  }
];

export const mockInvestments: Investment[] = [
  // ETFs
  {
    id: '1',
    name: 'Vanguard Total Stock Market',
    symbol: 'VTI',
    type: 'etf',
    price: 243.85,
    change: 2.15,
    changePercent: 0.89,
    holdings: 125,
    value: 30481.25
  },
  {
    id: '2',
    name: 'SPDR S&P 500 ETF',
    symbol: 'SPY',
    type: 'etf',
    price: 489.32,
    change: -1.87,
    changePercent: -0.38,
    holdings: 75,
    value: 36699.00
  },
  {
    id: '3',
    name: 'Vanguard International Stock',
    symbol: 'VXUS',
    type: 'etf',
    price: 58.92,
    change: 0.45,
    changePercent: 0.77,
    holdings: 200,
    value: 11784.00
  },
  // Crypto
  {
    id: '4',
    name: 'Bitcoin',
    symbol: 'BTC',
    type: 'crypto',
    price: 43587.50,
    change: 1285.30,
    changePercent: 3.04,
    holdings: 0.5,
    value: 21793.75
  },
  {
    id: '5',
    name: 'Ethereum',
    symbol: 'ETH',
    type: 'crypto',
    price: 2534.80,
    change: -45.20,
    changePercent: -1.75,
    holdings: 5.2,
    value: 13180.96
  },
  {
    id: '6',
    name: 'Chainlink',
    symbol: 'LINK',
    type: 'crypto',
    price: 15.67,
    change: 0.89,
    changePercent: 6.02,
    holdings: 150,
    value: 2350.50
  },
  // Stocks
  {
    id: '7',
    name: 'Apple Inc.',
    symbol: 'AAPL',
    type: 'stock',
    price: 192.75,
    change: 3.28,
    changePercent: 1.73,
    holdings: 100,
    value: 19275.00
  },
  {
    id: '8',
    name: 'Microsoft Corporation',
    symbol: 'MSFT',
    type: 'stock',
    price: 374.92,
    change: -2.15,
    changePercent: -0.57,
    holdings: 50,
    value: 18746.00
  },
  {
    id: '9',
    name: 'NVIDIA Corporation',
    symbol: 'NVDA',
    type: 'stock',
    price: 731.45,
    change: 15.30,
    changePercent: 2.14,
    holdings: 25,
    value: 18286.25
  },
  {
    id: '10',
    name: 'Amazon.com Inc.',
    symbol: 'AMZN',
    type: 'stock',
    price: 151.84,
    change: -0.95,
    changePercent: -0.62,
    holdings: 75,
    value: 11388.00
  }
];

export const mockLoans: Loan[] = [
  {
    id: '1',
    type: 'Mortgage',
    amount: -215301.52,
    interestRate: 3.25,
    monthlyPayment: 1847.32,
    remainingTerms: 132,
    nextPayment: '2024-02-01'
  },
  {
    id: '2',
    type: 'Personal Loan',
    amount: -12500.00,
    interestRate: 5.75,
    monthlyPayment: 425.00,
    remainingTerms: 31,
    nextPayment: '2024-02-15'
  }
];