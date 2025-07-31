// components/HamburgerMenu.tsx
import { Menu, X } from 'lucide-react';

import { NavLink } from 'react-router-dom';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerMenu = ({ isOpen, setIsOpen }: Props) => {
  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <div className="md:hidden ml-4">
      <button onClick={toggleMenu}>
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

     {isOpen && (
  <div className="absolute right-4 top-16 bg-white dark:bg-gray-900 text-black dark:text-white shadow-lg rounded-md p-4 z-50">
    <nav className="flex flex-col space-y-3">
      <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
      <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
      <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
    </nav>
  </div>

      )}
    </div>
  );
};

export default HamburgerMenu;
