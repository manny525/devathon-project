import React from 'react';
import { Image } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="main_menu home_menu">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                                <center>
                                    <h1><strong>Registeration Requests</strong></h1>
                                </center>
                            </div>
                            <a className="navbar-brand" href="index.html"> <Image width={100} src={require('../../img/logo.png')} /> </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;