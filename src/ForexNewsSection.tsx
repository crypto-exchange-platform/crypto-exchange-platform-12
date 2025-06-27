import type { FC } from "react";

const mockNews = [
  {
    title: "USD Strengthens as Fed Signals Rate Hold",
    summary:
      "The U.S. Dollar rallied after Fed Chair Powell reiterated a hawkish tone, signaling no immediate rate cuts in the near term.",
    date: "2025-06-27",
    link: "#",
  },
  {
    title: "EUR Drops Amid Weak German Economic Data",
    summary:
      "Euro weakens against major pairs following lower-than-expected German manufacturing output numbers for Q2.",
    date: "2025-06-26",
    link: "#",
  },
  {
    title: "Yen Gains on Safe-Haven Demand",
    summary:
      "Risk-off sentiment returns amid global equity pullbacks, pushing the Japanese Yen to its strongest level in two months.",
    date: "2025-06-25",
    link: "#",
  },
  {
    title: "GBP Slips Despite BoE Holding Rates",
    summary:
      "The British Pound declined as markets anticipate potential easing later this year despite the Bank of England holding steady.",
    date: "2025-06-24",
    link: "#",
  },
];

const NewsSection: FC = () => {
  return (
    <section id="news" className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-black font-sora mb-4">
           Forex News
        </h2>
        <p className="text-gray-600 mb-10 font-sora text-lg">
          Get the latest insights and updates from the global currency markets.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockNews.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-gray-200 rounded-xl p-6 bg-white hover:shadow-xl transition"
            >
              <div className="text-sm text-gray-400 mb-2">
                {new Date(item.date).toLocaleDateString()}
              </div>
              <h3 className="text-xl font-bold text-black group-hover:text-yellow-500 transition">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">{item.summary}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
 