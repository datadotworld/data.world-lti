import * as React from "react";

export interface FAQProps {}

import { CreateClassroom } from "./CreateClassroom";
import { InstallLTITutorial } from "./InstallLTITutorial";

export class FAQ extends React.Component<FAQProps, {}> {

    render() {


        return (

            <div className="row">

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">

                    <div className="card">

                        <div className="card-body">

                            <ul className="nav flex-column nav-pills">

                                <li className="nav-item">

                                    <a className="nav-link active" href="#create-classroom">

                                        How to set up a classroom on data.world

                                    </a>

                                </li>

                                <li className="nav-item">

                                    <a className="nav-link" href="#install-lti">

                                        Install LTI in LMS Course

                                    </a>

                                </li>


                            </ul>

                        </div>

                    </div>

                </div>

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">

                    <div id="create-classroom" className="my-1 faq-spacer"/>
                    <CreateClassroom/>
                    <div id="install-lti" className="my-1 faq-spacer"/>
                    <InstallLTITutorial/>

                </div>

            </div>

        );
    }
}