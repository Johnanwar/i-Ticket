import React from 'react';
import { Route, Outlet } from 'react-router-dom';
import Banner from '../components/banner';
import Footer from '../components/layout/footer';

function HomeLayout() {
  return (
    <>
      <Banner />
      <Outlet />
      <Footer />
    </>
  );
}

export default HomeLayout;
