import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

//pages
import PageOne from '../Views/Home';
import PageTwo from '../Views/Page2';
import PageThree from '../Views/Page3';
import PageFour from '../Views/Page4';

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<PageOne />} />
      <Route path="/page-two" element={<PageTwo />} />
      <Route path="/page-three" element={<PageThree />} />
      <Route path="/page-four" element={<PageFour />} />
    </Routes>
  );
}
