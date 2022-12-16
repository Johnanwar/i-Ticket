import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

function AuthRoute({
  component: Component, header, footer, noHeader, roles, ...rest
}) {
  const authenticated = localStorage.getItem('api_token') == null;
  // const role = localStorage.getItem('role');

  // const userHasRequiredRole = roles?.includes(role);
  console.log(authenticated, 'authenticatedauthenticated');

  const renderRoute = (props) => {
    if (!authenticated) {
      return <Redirect to="/" />;
    }
    return (
      <Redirect to={{
        pathname: '/pp',
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
  } if (noHeader) {
    return (
      <Route
        {...rest}
        render={(props) => renderRoute(props)}
      />
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

export default AuthRoute;
