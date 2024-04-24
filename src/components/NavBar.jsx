import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ user, username, handleLogout }) => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-teal-500 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">

            <span className="text-white font-bold text-2xl">
              <span className="text-3xl">Y</span>
              <span className="text-2xl ml-1">A</span>
              <span className="text-3xl ml-1">M</span>
              <span className="text-2xl ml-1">A</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-white hover:text-gray-200 font-medium p-2">
              Home
            </Link>
            <Link to="/destinations" className="text-white hover:text-gray-200 font-medium p-2">
              Destinations
            </Link>
            <Link to="/about" className="text-white hover:text-gray-200 font-medium p-2">
              About
            </Link>
            <Link to="/contact" className="text-white hover:text-gray-200 font-medium p-2">
              Contact
            </Link>
            {user? (
              <div className="relative group">
                <div className="flex flex-col group relative text-white text-xs p-2 mx-1 cursor-pointer hover:outline outline-1">
                  <p className="font-medium">Hello, {username}</p>
                  <p className="font-semibold">Account & orders</p>
                </div>
                <div className="absolute bg-white shadow-lg top-12 z-50 right-0 hidden group-hover:flex group-hover:flex-col">
                  <div className="p-2 px-4 py-4">
                    <button
                      onClick={handleLogout}
                      className="bg-gradient-to-b from-red-600 to-red-500 p-1 px-20 text-white text-sm font-medium"
                    >
                      Logout
                    </button>
                  </div>
                  <div className="flex flex-col px-4">
                    <h2 className="text-slate-600 text-[16px] text-center font-semibold pb-2">
                      Your Account
                    </h2>
                    <div className="flex flex-col space-y-1">
                      <Link to={`/account/${user.id}`}>
                        <h2 className="text-slate-600 font-medium text-[14px] hover:underline">Account</h2>
                      </Link>
                      <Link to={`/order/${user.id}`}>
                        <h2 title="Sign in to see your orders" className="text-slate-600 font-medium text-[14px] pb-3 hover:underline">Orders</h2>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <Link to="./login">
                  <button className="bg-gradient-to-b from-green-600 to-green-500 p-2 px-4 text-white text-sm font-medium rounded-md hover:bg-green-700">
                    Sign in
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;