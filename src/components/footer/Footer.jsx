import React from "react";
import "./Footer.scss";
import logo1 from "../../assets/footer-logo1.png";
import logo2 from "../../assets/footer-logo2.png";
import logo3 from "../../assets/footer-logo3.png";
import { FaFacebookF, FaInstagram, FaVk } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__cont">
        <ul className="footer__left">
          <li className="footer__left-item">
            <img src={logo1} alt="Logo 1" />
            <p>Готовим вручную и с любовью</p>
          </li>
          <li className="footer__left-item">
            <img src={logo2} alt="Logo 2" />
            <p>Готовим вручную и с любовью</p>
          </li>
          <li className="footer__left-item">
            <img src={logo3} alt="Logo 3" />
            <p>Готовим вручную и с любовью</p>
          </li>
        </ul>
        <div className="footer__lists">
          <h3>Информация</h3>
          <ul className="footer__lists-items">
            <li>О компании</li>
            <li>Гарантии вкуса и свежести</li>
            <li>Доставка и оплата</li>
            <li>Контакты</li>
          </ul>
        </div>
        <div className="footer__lists">
          <h3>Каталог</h3>
          <ul className="footer__lists-items">
            <li>Каталог десертов</li>
            <li>Готовые наборы</li>
            <li>Собрать свой набор</li>
            <li>Наборы с печатью</li>
            <li>Свадебные предложения</li>
            <li>Акции </li>
          </ul>
        </div>
        <div className="footer__lists">
          <h3>ДЛЯ БИЗНЕСА</h3>
          <ul className="footer__lists-items">
            <li>Корпоративные подарки</li>
            <li>Для юридических лиц</li>
            <li>Оповикам </li>
          </ul>
        </div>
        <div className="footer__right">
          <h4>+998 (98) 539 87 17</h4>
          <div className="footer__right-social">
            <div className="footer__right-social-icons">
              <FaInstagram />
            </div>
            <div className="footer__right-social-icons">
              <FaFacebookF />
            </div>
            <div className="footer__right-social-icons">
              <FaVk />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
