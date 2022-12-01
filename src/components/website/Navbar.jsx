import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/">AfnanTech</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/service">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="contact">Contact</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            {
                                                isAuthenticated && <NavLink className="nav-link" style={{ borderBottom: "none" }}>{user.name}</NavLink>
                                            }
                                        </li>
                                        {
                                            isAuthenticated ? <li className="nav-item"><NavLink className="nav-link btn btn-outline-info" style={{ color: "#fff" }} onClick={() => logout({ returnTo: window.location.origin })}>Log Out</NavLink>
                                            </li> : <li className="nav-item"><NavLink className="nav-link btn btn-outline-secondary" style={{ color: "#fff" }} onClick={() => loginWithRedirect()}>Log In</NavLink>
                                            </li>
                                        }


                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
