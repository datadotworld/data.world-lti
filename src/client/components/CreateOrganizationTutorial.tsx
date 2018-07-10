import * as React from "react";

export interface CreateOrganizationTutorialProps {}

const settings = require('../assets/png/settings.png');
const settingsOne = require('../assets/png/settings-1.png');
const newOrg = require('../assets/png/new-organization.png');

export class CreateOrganizationTutorial extends React.Component<CreateOrganizationTutorialProps, {}> {

    render() {

        return (

            <div id="create-organization-card" className="card mb-2">

                <div className="card-body">

                    <h5 className="card-title">Create a new Organization</h5>

                    <p className="card-text">

                        Select "Settings" from the dropdown menu that appears under account photo.

                    </p>

                </div>

                <img className="card-img rounded-0" src={settings}/>

                <div className="card-body">

                    <p className="card-text">

                        Then select "Organizations" from the submenu.

                    </p>

                </div>

                <img className="card-img rounded-0" src={settingsOne}/>

                <div className="card-body">

                    <p className="card-text">

                        Then select "New Organization" button.

                    </p>

                </div>

                <img className="card-img rounded-0" src={newOrg}/>

            </div>

        )

    }

}