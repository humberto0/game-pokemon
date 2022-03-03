import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Start from '../pages/Start';
import Dashboard from '../pages/Dashboard';

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/pokemon" element={<Dashboard />} />
    </Routes>
  );
}

export default AllRoutes;
