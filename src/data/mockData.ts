import { Transaction, Investment, Loan, User, AccountBalance } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'Root',
  email: 'root@email.com',
  avatar: 'RT'
};

export const mockBalance: AccountBalance = {
  current: 389042.09,
  available: 385542.09,
  pending: 3500.00
};

export const mockSavingsBalance = {
  balance: 621005.12,
  interestRate: 4.0,
  yearlyReturn: 24840.20
};

export const mockTransactions: Transaction[] = [
  {
    id: '1',
    date: '2025-07-15',
    description: 'Salary Payment - TechCorp Ltd',
    amount: 8500.00,
    type: 'credit',
    category: 'Income',
    balance: 389042.09
  },
  {
    id: '2',
    date: '2025-07-14',
    description: 'Transfer to Investment Portfolio',
    amount: -5000.00,
    type: 'debit',
    category: 'Investment',
    balance: 380542.09
  },
  {
    id: '3',
    date: '2025-07-13',
    description: 'Online Purchase - Amazon',
    amount: -127.99,
    type: 'debit',
    category: 'Shopping',
    balance: 385542.09
  },
  {
    id: '4',
    date: '2025-07-12',
    description: 'Dividend Payment - VXUS ETF',
    amount: 342.18,
    type: 'credit',
    category: 'Investment',
    balance: 385670.08
  },
  {
    id: '5',
    date: '2025-07-11',
    description: 'Restaurant - Le Bernardin',
    amount: -285.50,
    type: 'debit',
    category: 'Dining',
    balance: 385327.90
  },
  {
    id: '6',
    date: '2025-07-10',
    description: 'Freelance Project Payment',
    amount: 2500.00,
    type: 'credit',
    category: 'Income',
    balance: 385613.40
  },
  {
    id: '7',
    date: '2025-07-09',
    description: 'Grocery Shopping - REWE',
    amount: -89.45,
    type: 'debit',
    category: 'Groceries',
    balance: 383113.40
  },
  {
    id: '8',
    date: '2025-07-08',
    description: 'Grocery Shopping - Penny',
    amount: -34.67,
    type: 'debit',
    category: 'Groceries',
    balance: 383269.72
  },
  {
    id: '9',
    date: '2025-07-07',
    description: 'Train Ticket - Deutsche Bahn',
    amount: -156.80,
    type: 'debit',
    category: 'Transportation',
    balance: 383426.52
  },
  {
    id: '10',
    date: '2025-07-06',
    description: 'Flight Booking - Discover Airlines',
    amount: -489.99,
    type: 'debit',
    category: 'Travel',
    balance: 383583.32
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
    price: 91806.58,
    change: 2285.30,
    changePercent: 2.55,
    holdings: 6.8,
    value: 624284.74
  },
  {
    id: '5',
    name: 'Ethereum',
    symbol: 'ETH',
    type: 'crypto',
    price: 2128.92,
    change: -45.20,
    changePercent: -2.08,
    holdings: 90,
    value: 191602.80
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
  },
  {
    id: '11',
    name: 'Alphabet Inc.',
    symbol: 'GOOGL',
    type: 'stock',
    price: 180.55,
    change: 4.25,
    changePercent: 2.41,
    holdings: 100,
    value: 18055.00
  },
  {
    id: '12',
    name: 'Advanced Micro Devices',
    symbol: 'AMD',
    type: 'stock',
    price: 142.30,
    change: -3.15,
    changePercent: -2.17,
    holdings: 31,
    value: 4411.30
  },
  {
    id: '13',
    name: 'Tesla Inc.',
    symbol: 'TSLA',
    type: 'stock',
    price: 248.98,
    change: 8.45,
    changePercent: 3.51,
    holdings: 55,
    value: 13693.90
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