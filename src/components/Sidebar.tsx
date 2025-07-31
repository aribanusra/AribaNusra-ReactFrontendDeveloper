// components/Sidebar.tsx
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import type { Theme } from '../context/ThemeContext';
const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as Theme);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-2 text-base font-semibold ${
      isActive ? 'bg-gray-700 text-white' : 'text-gray-300'
    } hover:bg-gray-600 transition-all duration-200 rounded`;

  return (
    <aside
      className="fixed top-0 left-0 h-full w-72 p-6 shadow-lg flex flex-col gap-6"
      style={{
        backgroundColor: 'var(--header-bg)',
        color: 'var(--header-text)',
      }}
    >
      <div className="text-2xl font-bold mb-4">🌙 Dark Sidebar</div>

      <nav className="flex flex-col gap-2">
        <NavLink to="/" className={navLinkClass}>HOME</NavLink>
        <NavLink to="/about" className={navLinkClass}>ABOUT</NavLink>
        <NavLink to="/contact" className={navLinkClass}>CONTACT</NavLink>
      </nav>

      <select
        value={theme}
        onChange={handleThemeChange}
        className="mt-auto p-2 rounded text-black"
      >
        <option value="theme1">Theme 1 - Minimal</option>
        <option value="theme2">Theme 2 - Dark Sidebar</option>
        <option value="theme3">Theme 3 - Colorful</option>
      </select>
    </aside>
  );
};

export default Sidebar;
