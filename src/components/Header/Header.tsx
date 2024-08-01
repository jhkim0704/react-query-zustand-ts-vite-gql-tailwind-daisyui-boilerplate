import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import useAuthStore from '@/store/useAuthStore';
import { DrawerProps } from '@/types/common';

const Header: React.FC<DrawerProps> = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const { isAuthenticated, setIsAuthenticated } = useAuthStore((state) => state);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <nav className="bg-white shadow-lg w-full">
      <div className="mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center py-4 px-2">
            <span className="font-semibold text-gray-500 text-lg">Boilerplate</span>
          </Link>
          <div className="flex items-center">
            <div className="hidden md:block">
              <Button
                text="Logout"
                className="py-3 px-3 font-medium text-white text-xs bg-blue-500 rounded hover:bg-blue-400 transition duration-300"
                onClick={() => setIsAuthenticated(false)}
              />
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsDrawerOpen(!isDrawerOpen)} className="btn btn-square btn-ghost">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
