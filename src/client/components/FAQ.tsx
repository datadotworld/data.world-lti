import * as React from "react";

export interface FAQProps {}

import { CreateOrganizationTutorial } from "./CreateOrganizationTutorial";
import { EnableInvitationLinksTutorial } from "./EnableInvitationLinksTutorial";
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

                                    <a className="nav-link active" href="#create-organization-card">

                                        Create a new Organization

                                    </a>

                                </li>

                                <li className="nav-item">

                                    <a className="nav-link" href="#enable-invitation-links-card">

                                        Enable Invitation Links

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

                    <CreateOrganizationTutorial/>
                    <EnableInvitationLinksTutorial/>
                    <InstallLTITutorial/>

                </div>

            </div>

        );
    }
}