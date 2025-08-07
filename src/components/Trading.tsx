import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { mockInvestments } from '../data/mockData';
import PortfolioOverview from './trading/PortfolioOverview';
import LiveMarket from './trading/LiveMarket';
import TradingActions from './trading/TradingActions';
import HoldingsTable from './trading/HoldingsTable';

const Trading: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [livePrices, setLivePrices] = useState<{[key: string]: {price: number, change: number, changePercent: number}}>({});
  const [isLoading, setIsLoading] = useState(true);

  // Simulate live price updates
  useEffect(() => {
    const updatePrices = () => {
      const updates: {[key: string]: {price: number, change: number, changePercent: number}} = {};
      
      mockInvestments.forEach(investment => {
        if (investment.type === 'stock' || investment.type === 'crypto') {
          // Simulate small price movements
          const changePercent = (Math.random() - 0.5) * 4; // -2% to +2%
          const newPrice = investment.price * (1 + changePercent / 100);
          const change = newPrice - investment.price;
          
          updates[investment.symbol] = {
            price: newPrice,
            change: change,
            changePercent: changePercent
          };
        }
      });
      
      setLivePrices(updates);
      setIsLoading(false);
    };

    // Update prices every 3 seconds
    const interval = setInterval(updatePrices, 3000);
    updatePrices(); // Initial update

    return () => clearInterval(interval);
  }, []);

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

  const totalPortfolioValue = mockInvestments.reduce((sum, investment) => {
    const livePrice = livePrices[investment.symbol];
    const currentPrice = livePrice ? livePrice.price : investment.price;
    return sum + (currentPrice * investment.holdings);
  }, 0);

  const totalDayChange = mockInvestments.reduce((sum, investment) => {
    const livePrice = livePrices[investment.symbol];
    const change = livePrice ? livePrice.change : investment.change;
    return sum + (change * investment.holdings);
  }, 0);

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

  const getCurrentPrice = (investment: any) => {
    const livePrice = livePrices[investment.symbol];
    return livePrice ? livePrice.price : investment.price;
  };

  const getCurrentChange = (investment: any) => {
    const livePrice = livePrices[investment.symbol];
    return livePrice ? livePrice.change : investment.change;
  };

  const getCurrentChangePercent = (investment: any) => {
    const livePrice = livePrices[investment.symbol];
    return livePrice ? livePrice.changePercent : investment.changePercent;
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <PortfolioOverview
        totalPortfolioValue={totalPortfolioValue}
        totalDayChange={totalDayChange}
        totalDayChangePercent={totalDayChangePercent}
        formatCurrency={formatCurrency}
      />
      <LiveMarket
        investments={mockInvestments}
        livePrices={livePrices}
        formatCurrency={formatCurrency}
        getTypeColor={getTypeColor}
        getCurrentPrice={getCurrentPrice}
        getCurrentChangePercent={getCurrentChangePercent}
      />
      <TradingActions
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        categories={categories}
      />
      <HoldingsTable
        investments={filteredInvestments}
        formatCurrency={formatCurrency}
        getTypeColor={getTypeColor}
        getCurrentPrice={getCurrentPrice}
        getCurrentChangePercent={getCurrentChangePercent}
      />
    </div>
  );
};

export default Trading;