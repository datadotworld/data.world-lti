import * as React from "react";

export interface CreateClassroomProps {}

const classroom = require('../assets/png/classroom-one.png');
const classroomTwo = require('../assets/png/classroom-two.png');
const classroomThree = require('../assets/png/classroom-three.png');
const ltiConfigUrl = process.env.DDW_LTI_CONFIGURATION_URL || "http://example.com/config.xml";

export class CreateClassroom extends React.Component<CreateClassroomProps, {}> {

    render() {

        return (

            <div id="create-classroom-card" className="card mb-2">

                <div className="card-body">

                    <h5 className="card-title">Setting up a classroom to work collaboratively on data.world can be done in a few simple steps:</h5>

                    <p className="card-text">

                        1.) Go to <a href="https://data.world/create-organization?plan=team-classroom"> https://data.world/create-organization?plan=team-classroom</a> to create your classroom as an organization. This will ensure that you can invite all your students and everyone in the org can upload and share data.

                    </p>

                    <p className="card-text">

                        2.) As part of the setup, you will be able to invite your class via a link (rather than manually entering email addresses).

                    </p>

                </div>

                <img className="card-img rounded-0" src={classroom}/>

                <div className="card-body">

                    <p className="card-text">

                        To set this up manually (for already-created orgs), follow these steps:

                    </p>

                    <ul>
                        <li>Go to the Settings > Preferences of the org and check “Allow users to request to join this organization”</li>
                    </ul>

                </div>

                <img className="card-img rounded-0" src={classroomTwo}/>

                <div className="card-body">

                    <ul>
                        <li>Then go to the People tab and click to copy the link and share with your class. (This link will prompt them to create an account, if they don’t already have one, and will auto request an invite to the org - you will need to accept the requests)</li>
                    </ul>

                </div>

                <img className="card-img rounded-0" src={classroomThree}/>


                <div className="card-body">

                    <p className="card-text">

                        4.) From there, you or the students can upload datasets, create projects, discuss and share insights.

                    </p>

                    <p className="card-text">Check out our <a href="https://help.data.world/hc/en-us/sections/115001684527-Getting-started">Getting Started page</a> fore more details on diving into the platform.
                    </p>

                    <p className="card-text">
                        We also have a new Canvas integration <a href={ltiConfigUrl}>link</a>!
                    </p>

                </div>


            </div>

        )

    }

}