import { FC, ChangeEvent, FormEvent, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const mockChartData = [
  { time: "10:00", price: 30000 },
  { time: "11:00", price: 30100 },
  { time: "12:00", price: 30200 },
  { time: "13:00", price: 30150 },
  { time: "14:00", price: 30250 },
];

const TradeSection: FC = () => {
  const [side, setSide] = useState<"buy" | "sell">("buy");
  const [pair, setPair] = useState("BTC/USDT");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`${side.toUpperCase()} ${amount} of ${pair}`);
  };

  return (
    <section id="trade" className="w-full bg-gradient-to-b from-black via-gray-950 to-black py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Chart Panel */}
        <div className="col-span-2 bg-[#0d0d0d] rounded-xl p-6 shadow-lg border border-yellow-500/10">
          <h3 className="text-2xl font-sora font-bold mb-4 text-yellow-400">Market Chart</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockChartData}>
              <XAxis dataKey="time" stroke="#8884d8" />
              <YAxis domain={["auto", "auto"]} stroke="#8884d8" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#facc15"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#111] border border-yellow-500/10 rounded-xl p-6 shadow-xl space-y-6"
        >
          <h3 className="text-xl font-bold text-yellow-400 font-sora">Trade Now</h3>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Pair</label>
            <select
              value={pair}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => setPair(e.target.value)}
              className="w-full bg-black text-white border border-gray-700 rounded-md px-4 py-2 font-mono"
            >
              <option>BTC/USDT</option>
              <option>ETH/USDT</option>
              <option>SOL/USDT</option>
              <option>XRP/USDT</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Amount</label>
            <input
              type="number"
              step="any"
              value={amount}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)}
              className="w-full bg-black text-white border border-gray-700 rounded-md px-4 py-2 font-mono"
              placeholder="0.00"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setSide("buy")}
              className={`w-1/2 py-2 rounded-md font-bold ${
                side === "buy"
                  ? "bg-green-500 text-black"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              Buy
            </button>
            <button
              type="button"
              onClick={() => setSide("sell")}
              className={`w-1/2 py-2 rounded-md font-bold ${
                side === "sell"
                  ? "bg-red-500 text-black"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              Sell
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-md text-lg transition"
          >
            {side === "buy" ? "Buy Now" : "Sell Now"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default TradeSection;
 