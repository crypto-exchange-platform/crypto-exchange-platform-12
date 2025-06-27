import { FC, useState } from "react";
import { Header } from "./Header";
import { SignupModal } from "./SignUpModa";
import { LoginModal } from "./LogInModal";
import HeroSection from "./HeroSection";
import MarketSection from "./MarketSection";
import TradeSection from "./TradeSection";
import PortfolioSection from "./PortfolioSection";
import NewsSection from "./ForexNewsSection";
import Footer from "./Footer";
declare global {
  interface Window {
    particlesJS?: (canvasId: string, config: any) => void;
  }
}


const LandingPage: FC = () => {
  const [modal, setModal] = useState<"login" | "signup" | null>(null);

 

  return (
    <>
      {modal === "login" && <LoginModal onClose={() => setModal(null)} />}
      {modal === "signup" && (
        <SignupModal
          onClose={() => setModal(null)}
          onSignupSuccess={() => setModal("login")}
        />
      )}

      <Header
        onLogin={() => setModal("login")}
        onSignup={() => setModal("signup")}
      />
            <div className="bg-white">       <HeroSection />
            <MarketSection/>
            <TradeSection/>
            <PortfolioSection/>
            <NewsSection/>
            <Footer/>
 </div> 
    </>
  );
};

export default LandingPage;
 