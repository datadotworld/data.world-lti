import * as React from "react";

const organizations = require('../assets/png/organizations.png');
const orgSettings = require('../assets/png/organization-settings.png');
const orgPreferences = require('../assets/png/organization-preferences.png');
const enableMagicLink = require('../assets/png/enable-magic-link.png');
const inviteLink = require('../assets/png/invite-link.png');
const announcement = require('../assets/png/announcement-example.png');

export interface EnableInvitationLinksTutorialProps {}

export class EnableInvitationLinksTutorial extends React.Component<EnableInvitationLinksTutorialProps, {}> {

    render() {

        return (

            <div id="enable-invitation-links-card" className="card mb-2">

                <div className="card-body">

                    <h5 className="card-title">Enabling Invitation Links in an Organization</h5>
                    <p className="card-text">Once your account has the appropriate privileges in an Organization, you will be able to toggle the ability for other data.world users to join that Organization by following a special link.</p>

                    <p className="card-text">From the Organizations submenu in your account settings, select the appropriate Organization.</p>

                </div>

                <img className="card-img rounded-0" src={organizations}/>

                <div className="card-body">

                    <p className="card-text">Navigate to the organization's settings menu.</p>

                </div>

                <img className="card-img rounded-0" src={orgSettings}/>

                <div className="card-body">

                    <p className="card-text">Navigate to the organization's setting preference menu.</p>

                </div>

                <img className="card-img rounded-0" src={orgPreferences}/>

                <div className="card-body">

                    <p className="card-text">Check the "Allow users to request to join this organization" option.</p>

                </div>

                <img className="card-img rounded-0" src={enableMagicLink}/>

                <div className="card-body">

                    <p className="card-text">Navigate to the "People" section of the Organization menu.</p>

                </div>

                <img className="card-img rounded-0" src={inviteLink}/>

                <div className="card-body">

                    <p className="card-text">Distribute the link to your course.</p>

                </div>

                <img className="card-img rounded-0" src={announcement}/>

            </div>

        )

    }

}