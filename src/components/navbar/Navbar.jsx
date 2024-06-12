import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { IoLocationOutline } from "react-icons/io5";
import { BsPhone } from "react-icons/bs";
import { SlBag } from "react-icons/sl";
import { FaOdnoklassniki, FaTelegramPlane, FaVk } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import respLogo from "../../assets/logo-resp.png";

const Navbar = () => {
  const [cartItemCount, setCartItemCount] = useState(0);
  useEffect(() => {
    const getCartItemCount = () => {
      const cartData = localStorage.getItem("cart");
      const cartItems = cartData ? JSON.parse(cartData) : [];
      setCartItemCount(cartItems.length);
    };

    getCartItemCount();

    const handleStorageChange = (e) => {
      if (e.key === "cart") {
        getCartItemCount();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  return (
    <header>
      <nav className="navbar__top">
        <div className="container">
          <div className="navbar__top-cont">
            <ul className="navbar__top-list">
              <li>Гарантия свежести</li>
              <li>Доставка и оплата</li>
              <li>Оптовые поставки</li>
              <li>Контакты</li>
            </ul>
            <div className="navbar__top-menu">
              <div className="navbar__top-menu-item">
                <IoLocationOutline size={24} />
                <select name="location">
                  <option value="sankt-peterburg">Санкт-Петербург</option>
                </select>
              </div>
              <div className="navbar__top-menu-item">
                <BsPhone size={20} />
                <h5>8 93 539 87 17</h5>
              </div>
              <div className="navbar__top-menu-item">
                <div className="cart-icon">
                  <SlBag size={20} />
                  <div className="cart-icon__length">
                    <span>{cartItemCount}</span>
                  </div>
                </div>
                <h5>В корзине ({cartItemCount} товар)</h5>
              </div>
              <div className="navbar__top-menu-social">
                <FaTelegramPlane />
                <FaVk />
                <FaOdnoklassniki />
              </div>
            </div>
          </div>
          <div className="navbar__resp">
            <HiMiniBars3BottomLeft size={20} />
            <img src={respLogo} alt="logo" />
            <div className="cart-icon">
              <SlBag size={20} />
              <div className="cart-icon__length">
                <span>{cartItemCount}</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar__bottom">
        <div className="container navbar__bottom-cont">
          <ul className="navbar__bottom-list">
            <li>
              <NavLink>
                <h4>СЛАДКИЕ ДНИ</h4>
              </NavLink>
              <div></div>
            </li>
            <li>
              <select>
                <option value="">Подарочные наборы</option>
              </select>
            </li>
            <li>
              <NavLink>
                <h4>Собрать набор</h4>
              </NavLink>
            </li>
          </ul>
          <img src={logo} alt="logo" />
          <ul className="navbar__bottom-list">
            <li>
              <NavLink>
                <h4>Создать дизайн</h4>
              </NavLink>
            </li>
            <li>
              <select>
                <option value="">КОМПАНИЯМ</option>
              </select>
            </li>
            <li>
              <select>
                <option value="">ВЕСЬ КАТАЛОГ</option>
              </select>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
