import 'bootstrap';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import { InfoCard } from "./components/InfoCard";
import { Navbar } from "./components/Navbar";
import { FAQ } from "./components/FAQ";

ReactDOM.render(

    <Router>

        <div>

            <Navbar>
                <li className="nav-item">
                    <NavLink exact className="nav-link" to="/">Info</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact className="nav-link" to="/faq">FAQ</NavLink>
                </li>
            </Navbar>

            <Route exact path="/" render={(props) => (

                <div className="container py-4">
                    <InfoCard title="Welcome" body="..."/>
                </div>

            )}/>

            <Route exact path="/faq" render={(props) => (

                <div className="container py-4">

                    <FAQ/>

                </div>

            )}/>

        </div>

    </Router>,

    document.getElementById("root")

);