import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <>
    <div className='menu_style'>
      <NavLink  to="/">Home</NavLink>
      <NavLink  to="/about">About</NavLink>
      <NavLink  to="/search">Search</NavLink>
      <NavLink to="/user/parvez">User</NavLink>
      <NavLink to="/contact">Contact Me</NavLink>
    </div>
    </>
  )
}

export default Menu;
