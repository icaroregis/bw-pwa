import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Routers from './routes';

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routers />
    </BrowserRouter>
  );
}
