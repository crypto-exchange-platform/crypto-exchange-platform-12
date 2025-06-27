import { FC, useState } from "react";
import { Header } from "./Header";
import { SignupModal } from "./SignUpModa";
import { LoginModal } from "./LogInModal";
import HeroSection from "./HeroSection";

declare global {
  interface Window {
    particlesJS?: (canvasId: string, config: any) => void;
  }
}

const PARTICLES_CDN = "https://cdn.jsdelivr.net/npm/particles.js";

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
 </div> 
    </>
  );
};

export default LandingPage;
 