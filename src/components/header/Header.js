import React from 'react';
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
                            <a href="#">Customers</a>
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

export default Header;