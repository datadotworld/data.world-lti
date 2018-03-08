import React from 'react';

export default class Navbar extends React.Component {


    render() {

        return(

            <nav className="Header__navbar___YIpWp navbar navbar-inverse">

                <div className="container">

                    <div className="show-grid row">

                        <div className="col-md-3 col-sm-3 col-xs-12">
                            <div></div>
                            <div className="navbar-header">

                                <a className="Header__brand___2oS_y navbar-brand" href="https://data.world">

                                    <img itemProp="image" className="Header__logo___2jKwz" alt="data.world"
                                         src="https://assets.data.world/assets/logo-full.5432118c2466c4b685e7cd5028850e02.svg"/>


                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </nav>

        );

    };

}