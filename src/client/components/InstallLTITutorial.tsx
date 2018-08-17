import * as React from "react";

import { ConfigurationBuilder } from "./ConfigurationBuilderComponent";

export interface InstallLTITutorialProps {}

const settings = require('../assets/png/course-settings.png');
const courseApps = require('../assets/png/course-apps.png');
const appSettings = require('../assets/png/course-app-settings.png');
const addAppMenu = require('../assets/png/add-app-menu.png');

export class InstallLTITutorial extends React.Component<InstallLTITutorialProps, {}> {

    render() {

        return (

            <div id="install-lti-card" className="card mb-2">

                <div className="card-body">

                    <h5 className="card-title">Install the data.world LTI in your LMS</h5>
                    <p className="card-text">After navigating to the LMS course in which you want to install the data.world LTI, access the course settings menu.</p>

                </div>

                <img className="card-img rounded-0" src={settings}/>

                <div className="card-body">

                    <p className="card-text">

                        Within the course settings menu, access the course "Apps" menu.

                    </p>

                </div>

                <img className="card-img rounded-0" src={courseApps}/>

                <div className="card-body">

                    <p className="card-text">

                        Select the Add App button, i.e. "+ App", from within the course apps submenu. This will cause an application configuration modal to popup.

                    </p>

                </div>

                <img className="card-img rounded-0" src={appSettings}/>

                <div id="config-link-generator" className="card-body">

                    <h5 className="card-title">Configuration Link Generator</h5>

                </div>

                <ConfigurationBuilder/>

                <img className="card-img rounded-0" src={addAppMenu}/>

            </div>

        )

    }

}