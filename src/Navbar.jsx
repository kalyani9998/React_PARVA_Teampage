//this is nav bar page

import React from 'react';
import { NavLink } from "react-router-dom";


function Navbar() {
    return (
        <React.Fragment>

            {/* Navbar */}

            <div className="container">
                <div className="logo">
                    <a href="/"><img src="https://d1xktfy6yxb5m3.cloudfront.net/image/logo.jpg" alt="logo" /></a>
                </div>
                <div className="navbar">

                    <div className="icon-bar" onclick="Show()">
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>

                    <ul id="nav-lists">
                        <li className="close"><span onclick="Hide()">×</span></li>

                        <li><NavLink exact activeClassName="active_class" to="/">
                            About Us
                            </NavLink>
                        </li>
                        <li><NavLink exact activeClassName="active_class" to="/home">
                            Home
                            </NavLink>
                        </li>

                    </ul>

                </div>
                <form>
                    <input type="email" name="email" placeholder="Enter email address" />
                    <input type="submit" value="Join Us" />
                </form>
            </div>
        </React.Fragment>
    );
}

export default Navbar;