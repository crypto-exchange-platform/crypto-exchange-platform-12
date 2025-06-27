import { FC, useState, useEffect } from 'react';

interface NavItem {
  label: string;
  id: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'Markets', id: 'markets' },
  { label: 'Trade', id: 'trade' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'News', id: 'news' },
];

interface HeaderProps {
  onLogin: () => void;
  onSignup: () => void;
}

export const Header: FC<HeaderProps> = ({ onLogin, onSignup }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      NAV_ITEMS.forEach(item => {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(item.id);
          }
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <button
          onClick={() => handleNavClick('home')}
          className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-300"
          aria-label="Go to Home"
        >
          CryptoVerse
        </button>

        <nav className="hidden md:flex space-x-8">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`
                relative text-gray-800 hover:text-yellow-600 font-medium transition
                ${activeSection === item.id
                  ? 'text-yellow-500 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-yellow-400'
                  : ''
                }
              `}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={onLogin}
            className="text-gray-800 hover:text-yellow-600 font-medium"
          >
            Log in
          </button>
          <button
            onClick={onSignup}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-2 rounded-md transition"
          >
            Sign up
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(o => !o)}
          className="md:hidden focus:outline-none text-gray-800"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-md shadow-md rounded-b-lg px-6 py-4 space-y-4">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`
                block w-full text-left text-gray-800 font-medium py-2 transition
                hover:text-yellow-600
                ${activeSection === item.id ? 'text-yellow-500' : ''}
              `}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-gray-300 space-y-2">
            <button
              onClick={onLogin}
              className="w-full text-left text-gray-800 hover:text-yellow-600 font-medium"
            >
              Log in
            </button>
            <button
              onClick={onSignup}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-5 py-2 rounded-md transition"
            >
              Sign up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
 