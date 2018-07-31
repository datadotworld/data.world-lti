import * as url from 'url';
import * as React from "react";

export interface InstallLTITutorialProps {}

const settings = require('../assets/png/course-settings.png');
const courseApps = require('../assets/png/course-apps.png');
const appSettings = require('../assets/png/course-app-settings.png');
const addAppMenu = require('../assets/png/add-app-menu.png');

const ltiConfigUrl = url.format({

    protocol: (process.env.DDW_LTI_SECURE === "false") ? 'http' : "https",
    host: process.env.DDW_LTI_CONFIGURATION_HOST || 'example.com',
    pathname: "/lti/config"

});

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

                <div className="card-body">

                    <p className="card-text">

                        Fill out the application configuration modal as follows:

                    </p>

                    <p className="card-text">

                        "Configuration Type" should be set to "By URL".

                    </p>

                    <p className="card-text">

                        "Name" should be set to "data.world".

                    </p>

                    <p className="card-text">

                        "Consumer Key" and "Shared Secret" should be left blank.

                    </p>

                    <p className="card-text">

                        "Config URL" should be set to the following URL:

                    </p>

                    <p className="card-text">

                        {ltiConfigUrl}

                    </p>


                </div>

                <img className="card-img rounded-0" src={addAppMenu}/>

            </div>

        )

    }

}