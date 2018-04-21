import 'bootstrap';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import { InfoCard } from "./components/InfoCard";
import { Navbar } from "./components/Navbar";

ReactDOM.render(
    <Router>

       <div>

           <Navbar>
               <li className="nav-item">
                   <NavLink exact className="nav-link" to="#">Launch</NavLink>
               </li>
           </Navbar>

           <div className="container py-4">
               <InfoCard title="Hi there" body="There should be content here..."/>
           </div>

       </div>

    </Router>,
    document.getElementById("root")

);