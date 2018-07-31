import * as React from "react";

export interface FAQProps {}

import { CreateClassroom } from "./CreateClassroom";
import { InstallLTITutorial } from "./InstallLTITutorial";

export class FAQ extends React.Component<FAQProps, {}> {

    render() {


        return (

            <div className="row">

                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">

                    <div className="card">

                        <div className="card-body">

                            <ul className="nav flex-column nav-pills">

                                <li className="nav-item">

                                    <a className="nav-link active" href="#create-classroom-card">

                                        How to set up a classroom on data.world

                                    </a>

                                </li>

                                <li className="nav-item">

                                    <a className="nav-link" href="#install-lti-card">

                                        Install LTI in LMS Course

                                    </a>

                                </li>


                            </ul>

                        </div>

                    </div>

                </div>

                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">

                    <CreateClassroom/>
                    <InstallLTITutorial/>

                </div>

            </div>

        );
    }
}