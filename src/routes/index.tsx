import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '@/components/Header';
import SideMenu from '@/components/Menu/SideMenu';
import Articles from '@/pages/Articles';
import Home from '@/pages/Home';
import { Country, CountryList } from '@/pages/Country';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Movies from '@/pages/Movie/Movies';
import Users from '@/pages/User/Users';
import Ships from '@/pages/Space/Ships';

const Router: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        <Header isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
        <div className="flex flex-1 overflow-hidden">
          <SideMenu isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
          <div className="w-full overflow-auto px-4">
            <Routes>
              <Route path="/" element={<PublicRoute><Home /></PublicRoute>} />
              <Route path="/articles" element={<PrivateRoute><Articles /></PrivateRoute>} />
              <Route path="/countries" element={<PrivateRoute><CountryList /></PrivateRoute>} />
              <Route path="/country" element={<PrivateRoute><Country /></PrivateRoute>} />
              <Route path="/movies" element={<PrivateRoute><Movies /></PrivateRoute>} />
              <Route path="/users" element={<PrivateRoute><Users /></PrivateRoute>} />
              <Route path="/ships" element={<PrivateRoute><Ships /></PrivateRoute>} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Router;