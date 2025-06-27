import { FC, useEffect } from "react";
import { CryptoSpinner } from "./CryptoSpinner";
import { particlesConfig } from "./utils/particlesConfig";

declare global {
  interface Window {
    particlesJS?: (id: string, config: any) => void;
  }
}

const PARTICLES_CDN = "https://cdn.jsdelivr.net/npm/particles.js";

const HeroSection: FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = PARTICLES_CDN;
    script.async = true;
    script.onload = () => {
      window.particlesJS?.("text-particles", particlesConfig);
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-white">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between h-full max-w-7xl mx-auto px-6 py-12 gap-10">
        
        <div className="relative w-full md:w-2/3 h-[500px] flex items-center justify-center">
          <div className="w-full h-full shadow-2xl rounded-xl bg-white relative overflow-hidden">

            <div className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-yellow-300 animate-pulse opacity-20 z-0" />

            <div className="relative z-10 w-full h-full">
              <CryptoSpinner />
            </div>

            <h2 className="absolute top-6 left-6 text-3xl font-bold text-gray-800 tracking-tight font-sora z-20">
              ₿ Cryptoverse
            </h2>

            <div className="absolute bottom-8 left-8 bg-black text-yellow-400 text-xs font-bold px-3 py-1 rounded-full shadow-md animate-bounce z-20">
              BTC
            </div>
            <div className="absolute bottom-8 right-10 bg-black text-yellow-300 text-xs font-bold px-3 py-1 rounded-full shadow-md animate-pulse z-20">
              SECURE
            </div>
            <div className="absolute top-8 right-14 bg-black text-yellow-200 text-xs font-bold px-3 py-1 rounded-full shadow-md animate-bounce z-20">
              FAST
            </div>
          </div>
        </div>

        <div className="relative w-full md:w-1/3 h-[500px] bg-gradient-to-b from-black via-[#0a0a0a] to-black rounded-xl shadow-xl overflow-hidden">
          <div id="text-particles" className="absolute inset-0 z-0 pointer-events-none" />

          <div className="relative z-10 px-6 py-8 flex flex-col justify-center h-full text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 font-sora leading-tight tracking-tight mb-4">
              Enter the <br /> Cryptoverse
            </h1>
            <p className="text-sm md:text-base text-gray-300 font-sora leading-relaxed">
              Buy, trade & grow your digital assets with <br /> elegance, security, and speed.
            </p>
            <div className="mt-6 flex flex-col md:flex-row items-center md:items-start gap-4">
              <button className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-md transition">
                Get Started
              </button>
              <button className="w-full md:w-auto border border-yellow-400 text-yellow-400 hover:bg-yellow-100 hover:text-black px-6 py-3 rounded-md font-semibold transition">
                Learn More
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
 