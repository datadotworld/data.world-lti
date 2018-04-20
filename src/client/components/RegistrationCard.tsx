import * as React from "react";

export interface RegistrationCardProps {}

export class RegistrationCard extends React.Component<RegistrationCardProps, {}> {
    render() {
        return <div className="card">
            <div className="card-body">
                <h5 className="card-title">Registration Form</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    Fill out this form to grant access to your LTI complaint LMS.
                </h6>
                <p className="card-text">...</p>
            </div>
        </div>;
    }
}