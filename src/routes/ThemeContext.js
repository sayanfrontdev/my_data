import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function MyComponent() {
  const { theme } = useContext(ThemeContext);
  
  
  
  return (
    <div className={`my-component ${theme}`}>
      
    </div>
  );
}
