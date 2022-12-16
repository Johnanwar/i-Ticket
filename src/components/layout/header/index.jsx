import React, { useState, useEffect } from 'react';
import {
  Link, NavLink, useHistory, useLocation,
} from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink as HeaderNavLink,
} from 'reactstrap';
import { useTranslation } from 'react-i18next';
import logo from '../../../assets/images/logo.svg';
import EN from '../../../assets/images/en.svg';
import AR from '../../../assets/images/ar.svg';
import localStorageProvider from '../../../localStorageProvider';

function Header() {
  const { i18n, t } = useTranslation();
  const [currentLang, setCurrentLang] = useState('en');
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.querySelector('html').dir = i18n.dir();
    document.querySelector('html').lang = lng;
    document.querySelector('#bootstrap-ltr').disabled = lng === 'ar';
    document.querySelector('#bootstrap-rtl').disabled = lng === 'en';
    localStorageProvider.set('locale', lng);
    if (lng === 'en') {
      setCurrentLang('en');
    }
    if (lng === 'ar') {
      setCurrentLang('ar');
    }
  };
    /// change languages
  useEffect(() => {
    if (localStorage.getItem('locale') === 'ar') {
      setCurrentLang('ar');
    }
    if (localStorage.getItem('locale') === 'en') {
      setCurrentLang('en');
    } else {
      setCurrentLang('ar');
    }
  }, []);
  return (
    <header>
      <Navbar dark expand="md" className="px-md-5 justify-content-netween">
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="Iticket-logo" />
        </NavLink>
        <Nav className="d-flex align-items-md-center middle-side-container " navbar>
          <NavItem>
            <NavLink activeClassName="activLink" className="nav-link  text-decoration-none text-grey" to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink activeClassName="activLink" className="nav-link text-decoration-none text-grey" to="/eve">Browse Events</NavLink>
          </NavItem>
          <NavItem>
            <NavLink activeClassName="activLink" className="nav-link  text-decoration-none text-grey" to="/ss">Support</NavLink>
          </NavItem>
          <NavItem>
            <NavLink activeClassName="activLink" className="nav-link  text-decoration-none text-grey" to="/about">About Us</NavLink>
          </NavItem>
        </Nav>
        <Nav className="px-0 px-md-3 flex-lg-row justify-content-between d-flex align-items-md-center last-side-container" navbar>
          {currentLang === 'ar'
            ? (
              <NavItem className="cursor-pointer d-flex align-items-center" onClick={() => changeLanguage('en')}>
                <img title="اللغه" className="" src={EN} alt="EN" />
                <span className="lang-span mx-3 mx-lg-0"> اللغه   </span>
              </NavItem>
            )
            : (
              <NavItem className="cursor-pointer align-items-center" onClick={() => changeLanguage('ar')}>
                <img title="Language" className="" src={AR} alt="AR" />
                {/* <span className="lang-span mx-3 mx-lg-0">  Language</span> */}
              </NavItem>
            )}
          <NavItem>
            <Link className="mx-4 text-white" to="/signUp">Sign Up</Link>
          </NavItem>
          <NavItem>
            <Link className="main-button ms-2" to="/login">Login</Link>
          </NavItem>
        </Nav>
      </Navbar>
    </header>
  );
}

export default Header;
