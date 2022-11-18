import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

//pages
import Home from '../Views/Home';
import CategoryDetails from '../Views/CategoryDetails';
import PageFour from '../Views/Page4';
import Minicart from '../Views/Minicart';

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page-two" element={<CategoryDetails />} />
      <Route path="/page-three" element={<Minicart />} />
      <Route path="/page-four" element={<PageFour />} />
    </Routes>
  );
}
