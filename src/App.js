import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routers from './routes';

export default function App() {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}
