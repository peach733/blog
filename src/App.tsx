import React, { useState } from 'react';
import { theme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import MainPage from './components/templates/MainPage';
import LoginPage from './components/templates/LoginPage';
import Layout from './Layout';

function App() {
  const [isLoggedin, setIsLogin] = useState<boolean>(false);
  return (
    <ThemeProvider theme={theme}>
      <Layout isLoggedin={isLoggedin}>{isLoggedin ? <MainPage /> : <LoginPage />}</Layout>
    </ThemeProvider>
  );
}

export default App;
