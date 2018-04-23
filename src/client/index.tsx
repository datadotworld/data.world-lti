import 'bootstrap';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";

import { InfoCard } from "./components/InfoCard";
import { Navbar } from "./components/Navbar";

const store = createStore(() => [], {}, applyMiddleware())

ReactDOM.render(

    <Provider store={store}>

        <Router>

            <div>

                <Navbar>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/">Info</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/login">Login</NavLink>
                    </li>
                </Navbar>

                <Route exact path="/" render={(props) => (

                    <div className="container py-4">
                        <InfoCard title="Info" body="Body Stuff"/>
                    </div>

                )}/>

                <Route exact path="/login" render={(props) => (

                    <div className="container py-4">
                        <InfoCard title="Login Form" body="Some fields"/>
                    </div>

                )}/>

            </div>

        </Router>

    </Provider>,

    document.getElementById("root")

);