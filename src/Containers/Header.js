import React, { Component } from 'react';
import Menu from './Menu';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-default" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse"> 
                            <span className="sr-only">Meny</span> 
                            <span className="bt-menu-text">Meny</span>
                            <span className="bt-menu-icon">
                                <span className="icon-bar"></span> 
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </span>
                        </button>
                    </div>
                </div>
                <Menu />
            </nav>
        )
    }
}
export default Header;