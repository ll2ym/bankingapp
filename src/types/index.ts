export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'credit' | 'debit';
  category: string;
  balance: number;
}

export interface Investment {
  id: string;
  name: string;
  symbol: string;
  type: 'etf' | 'crypto' | 'stock';
  price: number;
  change: number;
  changePercent: number;
  holdings: number;
  value: number;
}

export interface Loan {
  id: string;
  type: string;
  amount: number;
  interestRate: number;
  monthlyPayment: number;
  remainingTerms: number;
  nextPayment: string;
}

export interface AccountBalance {
  current: number;
  available: number;
  pending: number;
}