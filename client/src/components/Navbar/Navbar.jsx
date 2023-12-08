// Navbar.jsx

import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      {/* Navbar 1 */}
      <div className="navbar-container">
        <div className="navbar">
          <div className="logo-container">
            <img src="/path/to/your/logo.png" alt="Logo" className="logo"  />  
          </div>
        </div>

        <div className="search-cart-container">
            <input type="text" placeholder="Search" className="search-input" />
            
          </div>
      </div>

      {/* Navbar 2 */}
      <div className="navbar-container2">
        <div className="navbar">
          <a href="#">Giới Thiệu</a>
          <a href="#">Sản Phẩm</a>
          <a href="#">Phụ Kiện</a>
          <a href="#">Bộ Sưu Tập</a>
          <a href="#">Liên Hệ</a>
          <a href="#">Giỏ Hàng</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
