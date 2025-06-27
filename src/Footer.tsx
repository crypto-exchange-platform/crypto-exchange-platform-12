import type { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        <div>
          <h1 className="text-3xl font-bold text-yellow-400 font-sora mb-2">CryptoVerse</h1>
          <p className="text-sm">
            The next-gen crypto exchange built for speed, security & serious trading.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Navigate</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="#markets" className="hover:text-yellow-400 transition">Markets</a></li>
            <li><a href="#trade" className="hover:text-yellow-400 transition">Trade</a></li>
            <li><a href="#portfolio" className="hover:text-yellow-400 transition">Portfolio</a></li>
            <li><a href="#news" className="hover:text-yellow-400 transition">News</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Social</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-400 transition">Twitter</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">LinkedIn</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">GitHub</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <p className="text-sm">hello@cryptcrest.io</p>
          <p className="text-sm mt-1">Support: support@cryptcrest.io</p>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} CryptCrest — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
 