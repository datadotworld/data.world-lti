import * as React from "react";

export interface NavbarProps {}

const logo = require('../assets/svg/navbar-logo.svg');


export class Navbar extends React.Component<NavbarProps, {}> {

    render() {
        return <header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
            <a className="navbar-brand mr-0 mr-md-2" href="/">
                <img className="navbar-brand-logo" src={logo}/>
            </a>
            <div className="navbar-nav-scroll">
                <ul className="navbar-nav bd-navbar-nav flex-row">
                    <li className="nav-item">
                        <a className="nav-link">Home</a>
                    </li>
                </ul>
            </div>
        </header>;
    }
}