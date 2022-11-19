import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

//pages
import Home from '../Views/Home';
import CategoryDetails from '../Views/CategoryDetails';
import Minicart from '../Views/Minicart';
import LoginUser from '../Views/LoginUser';

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<CategoryDetails />} />
      <Route path="/minicart" element={<Minicart />} />
      <Route path="/loginuser" element={<LoginUser />} />
    </Routes>
  );
}
