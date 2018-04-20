import 'bootstrap';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { ConfigurationCard } from "./components/ConfigurationCard";
import { InfoCard } from "./components/InfoCard";
import { Navbar } from "./components/Navbar";
import { RegistrationCard } from "./components/RegistrationCard";


ReactDOM.render(

    <Router>

        <div>

            <Navbar/>

            <Route exact path="/" render={(props) => (

                <div className="container py-4">
                    <InfoCard title="Info" body="Body Stuff"/>
                </div>

            )}/>

            <Route exact path="/config" render={(props) => (

                <div className="container py-4">
                    <ConfigurationCard/>
                </div>

            )}/>

            <Route exact path="/register" render={(props) => (

                <div className="container py-4">
                    <RegistrationCard/>
                </div>

            )}/>

        </div>

    </Router>,

    document.getElementById("root")

);