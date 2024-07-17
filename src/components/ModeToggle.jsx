// ModeToggle.js
import React, { useState, useEffect } from 'react';

export const ModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Actualiza el data-theme en el elemento <html> según el estado
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.setAttribute('data-theme', 'dark');
    } else {
      htmlElement.setAttribute('data-theme', 'light');
    }
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <button className="button is-white" onClick={toggleMode}>
        <i class="fas fa-adjust"></i> 
      {/* {isDarkMode ? ' Modo Claro' : ' Modo Oscuro'} */}
    </button>
  );
};
