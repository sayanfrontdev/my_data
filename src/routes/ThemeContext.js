import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function MyComponent() {
  const { theme } = useContext(ThemeContext);
  
  // Use the theme value to conditionally apply styles or render components
  
  return (
    <div className={`my-component ${theme}`}>
      {/* Rest of the component code */}
    </div>
  );
}
