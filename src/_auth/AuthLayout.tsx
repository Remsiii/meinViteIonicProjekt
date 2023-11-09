import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface AuthLayoutProps extends RouteProps {
  // Du kannst zusätzliche Props definieren, die du möglicherweise übergeben musst
}

const AuthLayout: React.FC<AuthLayoutProps> = (props) => {
  const isAuthenticated = false;

  if (!isAuthenticated) {
    // Wenn nicht authentifiziert, umleiten zur Login-Seite oder einer anderen Route deiner Wahl
    return <Redirect to="/login" />;
  }

  // Wenn authentifiziert, zeige Kinderkomponenten
  return <Route {...props} />;
};

export default AuthLayout;
