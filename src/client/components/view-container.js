import React from 'react'
import { Route, Link } from 'react-router-dom';

export default class ViewContainer extends React.Component {

    render() {

        return(

            <div className="view-container">

                <div></div>
                <div className="dw-DashboardWrapper container DiscoveryView__container___36MDs container">

                    <div className="row">

                        <div className="DiscoveryView__colLeft___1Ddc0 col-lg-2 col-md-1">
                        </div>
                        <div className="DiscoveryView__colMid___1_vYF col-lg-8 col-md-10 col-sm-12 col-xs-12">

                            <div className="discovery_view.feed_tabs">

                                <ul role="tablist" className="DiscoveryView__tabs___2Slqx nav nav-tabs">

                                    <Route exact={true} path="/" render={() => <li role="presentation" className="active"><Link to="/"><span>Info</span></Link></li>}/>
                                    <Route exact={true} path="/" render={() => <li role="presentation"><Link to="/register"><span>Register</span></Link></li>}/>

                                    <Route exact={true} path="/register" render={() => <li role="presentation"><Link to="/"><span>Info</span></Link></li>}/>
                                    <Route exact={true} path="/register" render={() => <li role="presentation" className="active"><Link to="/register"><span>Register</span></Link></li>}/>

                                </ul>

                            </div>

                            <div className="tab-content">
                                <div id="discovery_view.feed_tabs-pane-Recent" aria-labelledby="discovery_view.feed_tabs-tab-Recent" role="tabpanel" aria-hidden="false" className="tab-pane active">
                                    <div>

                                        {this.props.children}

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="DiscoveryView__colRight___1CwEg col-lg-2 col-md-1">
                        </div>

                    </div>

                </div>

            </div>

        );

    }

}