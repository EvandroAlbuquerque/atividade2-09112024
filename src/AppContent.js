import React from 'react';
import { useTheme } from './ThemeProvider';


function AppContent() {
  const { theme, toggleTheme } = useTheme();


  return (
    <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
      <h2>Alterne entre os temas claro e escuro.</h2>
      <button onClick={toggleTheme}>Alternar tema</button>
    </div>
  );
}


export default AppContent;