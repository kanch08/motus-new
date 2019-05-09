import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import '../../mainstylesheet/mainstyle.css';
import Logo from '../../images/logo.png';

const Header=props=> {

    return (
        <header>
            <div className="container">
                <div className="logo">
                    <div className="logo-image" >
                        <img src={Logo} alt="Logo" width="100%" title="Motus"/>
                    </div>
                    <div className="header-links">
                        <nav>
                            <a href="#">Home</a>
                            <Router>
                                <NavLink to="/Customer" target="_blank">Customer</NavLink>

                            </Router>
                            <a href="#">Reports</a>
                            <a href="#">Help Centre</a>
                        </nav>
                    </div>
                </div>

                <div className="search-icon">
                    <span><i className="fas fa-user-circle"></i></span>
                    <span><i className="fas fa-user-circle"></i></span>
                </div>
            </div>
        </header>

    );

}
const Customer = () => <div>nsdknaf</div>;

export default Header;