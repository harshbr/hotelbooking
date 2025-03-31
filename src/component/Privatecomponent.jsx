import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function Privatecomponent() {
  const auth = localStorage.getItem('token');
  return auth ? <Outlet /> : <Navigate to={'/Signin'} />;
}

export default Privatecomponent;
