import React, { } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../common/hooks';

export const PrivateRoute = () => {
  const { loggedIn } = useAuth();

  return loggedIn ? <Outlet /> : <Outlet />;
};