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
            <img src=".\image\Free_Sample_By_Wix.jpg" alt="Madam Boutique" className="logo" width="80px" height="35px" />  
          </div>
        </div>

        <div className="search-cart-container">
          <input type="text" placeholder="Search" className="search-input" />
        </div>
      </div>

      {/* Navbar 2 */}
      <div className="navbar-container2">
        <div className="navbar">
          <ul className="menu_main">
            <li><a href="#">Giới Thiệu</a></li>
            <li><a href="#">Sản Phẩm</a></li>
            <li><a href="#">Phụ Kiện</a></li>
            <li><a href="#">Bộ Sưu Tập</a></li>
            <li><a href="#">Liên Hệ</a></li>
            <li><a href="#">Giỏ Hàng</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
