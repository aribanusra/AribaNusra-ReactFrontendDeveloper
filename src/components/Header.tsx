import { useTheme } from '../context/ThemeContext';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as 'theme1' | 'theme2' | 'theme3');
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-1 text-base font-medium transition-colors duration-200 ${
      isActive ? 'underline font-bold' : ''
    } hover:opacity-80`;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 shadow-md"
      style={{
        backgroundColor: 'var(--header-bg)',
        color: 'var(--header-text)',
      }}
    >
      {/* Logo */}
      <div className="text-xl font-bold order-1">🌈 StyleSphere</div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-4 order-2 flex-grow justify-center">
        <NavLink to="/" className={navLinkClass}>HOME</NavLink>
        <NavLink to="/about" className={navLinkClass}>ABOUT</NavLink>
        <NavLink to="/contact" className={navLinkClass}>CONTACT</NavLink>
      </nav>

      {/* Theme Selector */}
      <div className="order-3 flex items-center gap-2">
        {/* Desktop Theme Dropdown */}
        <div className="hidden sm:block">
          <select
            value={theme}
            onChange={handleThemeChange}
            className="p-2 rounded border text-black text-sm"
          >
            <option value="theme1">Light 🌤️</option>
            <option value="theme2">Dark 🌙</option>
            <option value="theme3">Colorful 🎨</option>
          </select>
        </div>

        {/* Mobile Theme Icon Dropdown */}
        <div className="sm:hidden relative">
          <label htmlFor="theme-select" className="sr-only">Theme</label>
          <select
            id="theme-select"
            value={theme}
            onChange={handleThemeChange}
            className="text-black text-xs border rounded px-1 py-0.5"
          >
            <option value="theme1">🌤️</option>
            <option value="theme2">🌙</option>
            <option value="theme3">🎨</option>
          </select>
        </div>

        {/* Hamburger */}
        <div className="sm:hidden">
          <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
