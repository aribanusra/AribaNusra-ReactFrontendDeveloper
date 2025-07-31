import React, { createContext, useState, useContext, useEffect } from 'react';

export type Theme = 'theme1' | 'theme2' | 'theme3';

const ThemeContext = createContext({
  theme: 'theme1' as Theme,
  setTheme: (_theme: Theme) => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('theme') as Theme) || 'theme1';
  });

  useEffect(() => {
  const overlay = document.createElement('div');
  overlay.className =
    'fixed inset-0 z-50 pointer-events-none scale-100 transition-transform duration-300 ease-in-out';
  document.body.appendChild(overlay);

  requestAnimationFrame(() => {
    overlay.style.transform = 'scale(2.05)';
  });

  // Apply the new theme
  setTimeout(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, 100);

  // Reset scale
  setTimeout(() => {
    overlay.style.transform = 'scale(2)';
  }, 800);

  // Clean up
  setTimeout(() => {
    overlay.remove();
  }, 500);

  return () => overlay.remove();
}, [theme]);


  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
