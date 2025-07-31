import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { useTheme } from './context/ThemeContext';

const App = () => {
  const { theme } = useTheme();
  const isSidebar = theme === 'theme2';

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: 'var(--bg)',
        color: 'var(--text)',
        fontFamily: 'var(--font)',
      }}
    >
      {/* Responsive Header and Sidebar */}
      {isSidebar ? (
        <>
          {/* Sidebar only on medium and up */}
          <div className="hidden md:block">
            <Sidebar />
          </div>
          {/* Header only on small screens */}
          <div className="block md:hidden">
            <Header />
          </div>
        </>
      ) : (
        <Header />
      )}

      {/* Content Layout */}
      <main
        className={`${
          isSidebar ? 'md:ml-64 pt-24 md:pt-8 px-6' : 'pt-24 px-6'
        }`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
        <footer className="w-full text-center py-4 bg-gray-100 text-gray-600 dark:bg-gray-900 dark:text-gray-300 mt-auto">
      <p className="text-sm">© {new Date().getFullYear()} Ariba Nusra</p>
    </footer>
    </div>
    
  );
};

export default App;
