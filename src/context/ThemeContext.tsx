import React, { createContext, useState, useContext, useEffect } from 'react';

// Define the possible theme values for type safety
export type Theme = 'theme1' | 'theme2' | 'theme3';

// Create a context with default values
const ThemeContext = createContext({
  theme: 'theme1' as Theme,
  setTheme: (_theme: Theme) => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // State to hold the current theme, initialized from localStorage if available
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('theme') as Theme) || 'theme1';
  });

  useEffect(() => {
    // Create an overlay for a smooth theme transition animation
    const overlay = document.createElement('div');
    overlay.className =
      'fixed inset-0 z-50 pointer-events-none scale-100 transition-transform duration-300 ease-in-out';
    document.body.appendChild(overlay);

    // Start the scale animation
    requestAnimationFrame(() => {
      overlay.style.transform = 'scale(2.05)';
    });

    // Apply the new theme after a short delay
    setTimeout(() => {
      document.documentElement.className = theme;
      localStorage.setItem('theme', theme);
    }, 100);

    // Reset the overlay scale for a smooth effect
    setTimeout(() => {
      overlay.style.transform = 'scale(2)';
    }, 800);

    // Remove the overlay after the animation is done
    setTimeout(() => {
      overlay.remove();
    }, 500);

    // Cleanup in case the component unmounts early
    return () => overlay.remove();
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);
