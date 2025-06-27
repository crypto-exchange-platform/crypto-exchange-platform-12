import type { FC } from "react";

const mockPortfolio = [
  { name: "Bitcoin", symbol: "BTC", amount: 0.5, value: 15000, change: 2.5 },
  { name: "Ethereum", symbol: "ETH", amount: 2, value: 4200, change: -1.2 },
  { name: "Solana", symbol: "SOL", amount: 50, value: 4800, change: 3.1 },
  { name: "XRP", symbol: "XRP", amount: 1000, value: 524, change: -0.5 },
];

const PortfolioSection: FC = () => {
  const totalValue = mockPortfolio.reduce((sum, token) => sum + token.value, 0);

  return (
    <section id="portfolio" className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-black font-sora mb-4">
          Portfolio Overview
        </h2>
        <p className="text-gray-600 mb-10 font-sora text-lg">
          Your digital assets and recent performance.
        </p>

        <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 mb-10 shadow-sm">
          <div className="text-lg text-gray-700 font-semibold">Total Balance</div>
          <div className="text-3xl font-bold text-black mt-1">${totalValue.toLocaleString()}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockPortfolio.map((token, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-black font-sora">
                  {token.symbol}
                </h3>
                <span
                  className={`text-sm font-semibold ${
                    token.change >= 0 ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {token.change >= 0 ? "+" : ""}
                  {token.change}% 24h
                </span>
              </div>
              <p className="text-gray-500 mb-1">{token.name}</p>
              <p className="text-gray-700 font-mono text-sm">
                {token.amount} {token.symbol} • ${token.value.toLocaleString()}
              </p>
              <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full ${
                    token.change >= 0 ? "bg-green-400" : "bg-red-400"
                  }`}
                  style={{ width: `${Math.min(100, Math.abs(token.change) * 8)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
 