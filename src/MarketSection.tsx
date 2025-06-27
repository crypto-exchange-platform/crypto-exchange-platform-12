import type { FC } from "react";

const mockMarketData = [
  { symbol: "BTC/USDT", name: "Bitcoin", price: "30,120.50", change: 1.2, volume: "23.5B" },
  { symbol: "ETH/USDT", name: "Ethereum", price: "2,120.00", change: -0.9, volume: "15.2B" },
  { symbol: "SOL/USDT", name: "Solana", price: "95.60", change: 3.8, volume: "3.8B" },
  { symbol: "XRP/USDT", name: "XRP", price: "0.524", change: 0.3, volume: "1.2B" },
  { symbol: "DOGE/USDT", name: "Dogecoin", price: "0.072", change: -1.7, volume: "950M" },
  { symbol: "ADA/USDT", name: "Cardano", price: "0.392", change: 2.4, volume: "870M" },
  { symbol: "AVAX/USDT", name: "Avalanche", price: "18.22", change: 4.5, volume: "790M" },
  { symbol: "DOT/USDT", name: "Polkadot", price: "5.32", change: -0.4, volume: "670M" },
  { symbol: "MATIC/USDT", name: "Polygon", price: "0.97", change: 1.1, volume: "520M" },
  { symbol: "SHIB/USDT", name: "Shiba Inu", price: "0.000007", change: -2.1, volume: "490M" },
];

const MarketSection: FC = () => {
  return (
    <section id="markets" className="w-full bg-gradient-to-b from-black via-[#0a0a0a] to-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 font-sora mb-2 tracking-tight">
         Live Market Overview
        </h2>
        <p className="text-gray-400 mb-10 font-sora text-lg">Track top coins in real time with a modern UI touch</p>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-black bg-opacity-30 backdrop-blur border border-yellow-500/10 rounded-lg shadow-xl">
            <thead>
              <tr className="text-left text-sm text-yellow-300 uppercase tracking-wider bg-yellow-500/5 backdrop-blur-md">
                <th className="px-6 py-4">Pair</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">24h %</th>
                <th className="px-6 py-4">Volume</th>
                <th className="px-6 py-4 text-right">Trade</th>
              </tr>
            </thead>
            <tbody>
              {mockMarketData.map((coin, i) => (
                <tr
                  key={i}
                  className="border-t border-gray-800 hover:bg-yellow-500/5 transition duration-300"
                >
                  <td className="px-6 py-4 text-white font-semibold tracking-wide">
                    {coin.symbol}
                    <div className="text-sm text-gray-500 font-normal">{coin.name}</div>
                  </td>
                  <td className="px-6 py-4 text-yellow-300 font-mono">${coin.price}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`font-semibold px-3 py-1 rounded-full text-sm animate-pulse ${
                        coin.change >= 0 ? "text-green-400 bg-green-400/10" : "text-red-400 bg-red-400/10"
                      }`}
                    >
                      {coin.change >= 0 ? "+" : ""}
                      {coin.change}%
                    </span>
                  </td>
                  <td className="px-6 py-4 text-white">${coin.volume}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 py-2 rounded-md text-sm shadow-md transition-all">
                      Trade
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
 