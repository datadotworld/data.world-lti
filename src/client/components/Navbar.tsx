import * as React from "react";

export interface NavbarProps {}

const logo = require('../assets/svg/navbar-logo.svg');


export class Navbar extends React.Component<NavbarProps, {}> {

    render() {


        return (

            <header className="navbar sticky-top navbar-expand navbar-dark bg-dark
                                  flex-column flex-sm-row
                                  justify-content-center justify-content-sm-start">
                <a className="navbar-brand mr-0 mr-md-2" href="/">
                    <img className="navbar-brand-logo" src={logo}/>
                </a>
                <div className="navbar-nav-scroll">
                    <ul className="navbar-nav bd-navbar-nav flex-row">

                        {this.props.children}

                    </ul>
                </div>
            </header>

        );
    }
}