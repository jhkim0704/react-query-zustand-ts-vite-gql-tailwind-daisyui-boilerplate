import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuthStore from '@/store/useAuthStore';
import { DrawerProps } from '@/types/common';

const SideMenu: React.FC<DrawerProps> = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const { isAuthenticated, setIsAuthenticated } = useAuthStore((state) => state);
  const location = useLocation();

  if (!isAuthenticated) {
    return null;
  }

  const handleLinkClick = () => {
    setIsDrawerOpen(false);
  };

  const menuItems = [
    { to: '/movies', text: 'Movie List' },
    { to: '/users', text: 'User Insert' },
    { to: '/ships', text: 'Ship List' },
    { to: '/country', text: 'Country' },
    { to: '/countries', text: 'Country List' },
  ];

  const renderMenuItems = () => (
    <>
      {menuItems.map((item, index) => {
        const isActive = location.pathname === item.to;
        return (
          <li key={index}>
            <Link
              to={item.to}
              onClick={handleLinkClick}
              className={`block py-2 px-4 rounded transition-colors duration-200 ${
                isActive ? 'text-purple-700 bg-purple-100 hover:bg-purple-200' : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              {item.text}
            </Link>
          </li>
        );
      })}
      <li className="md:hidden">
        <button
          onClick={() => {
            setIsAuthenticated(false);
            handleLinkClick();
          }}
          className="w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-200 rounded"
        >
          로그아웃
        </button>
      </li>
    </>
  );

  return (
    <>
      {/* 데탑 */}
      <div className="hidden md:block bg-gray-100 w-1/5 h-full p-4">
        <ul className="space-y-2">{renderMenuItems()}</ul>
      </div>

      {/* 모바일 */}
      <div className="md:hidden">
        <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${isDrawerOpen ? 'block' : 'hidden'}`} onClick={() => setIsDrawerOpen(false)}></div>
        <div
          className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
            isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-4">
            <ul className="space-y-2">{renderMenuItems()}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
