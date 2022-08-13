import React from 'react';
import { Navbar } from './components/navbar/Navbar';
import { AppRouter } from './router/AppRouter';

export const App:React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
}


