import React from 'react';
import { Route, Outlet } from 'react-router-dom';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

function PublicLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default PublicLayout;
