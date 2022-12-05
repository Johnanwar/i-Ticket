import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

function PrivateRoute({
  component: Component, header, footer, stickyHeader, hideInterCom, roles, ...rest
}) {
  const authenticated = localStorage.getItem('api_token') !== null;
  const role = localStorage.getItem('role');

  const userHasRequiredRole = roles?.includes(role);
  const renderRoute = (props) => {
    if (authenticated) {
      if (userHasRequiredRole) {
        return <Component {...props} />;
      }
      return <Redirect to="/unauthorized" />;
    }
    return (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location },
      }}
      />
    );
  };
  if (header) {
    return (
      <>
        <Header />
        <Route
          {...rest}
          render={(props) => renderRoute(props)}
        />
      </>
    );
  } if (footer) {
    return (
      <>
        <Route
          {...rest}
          render={(props) => renderRoute(props)}
        />
        <Footer />
      </>
    );
  } if (stickyHeader) {
    return (
      <>
        <div className="stickyHeader sticky-top">
          <Header />
        </div>
        <Route
          {...rest}
          render={(props) => renderRoute(props)}
        />
      </>
    );
  } if (hideInterCom) {
    return (
      <>
        <div className="hide-intercom">
          <Header />
        </div>
        <Route
          {...rest}
          render={(props) => renderRoute(props)}
        />
      </>
    );
  }
  return (
    <>
      <Header />
      <Route
        {...rest}
        render={(props) => renderRoute(props)}
      />
      <Footer />
    </>
  );
}

export default PrivateRoute;
