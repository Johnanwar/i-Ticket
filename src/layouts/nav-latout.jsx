import React from 'react';
import { Route, Outlet } from 'react-router-dom';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

function NsavLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default NsavLayout;
