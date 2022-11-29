import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from './Menu';


const Nav = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  )
}

export default Nav;
