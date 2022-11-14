import React, { createContext, useState } from 'react';

type Props = {
    children?: React.ReactNode;
}

export const ThemeContext = createContext<any>({
  theme: 'light',
  undefined,
});

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      { children }
    </ThemeContext.Provider>
  );
};
