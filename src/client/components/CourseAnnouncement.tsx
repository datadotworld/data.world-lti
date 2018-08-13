import * as React from "react";

export interface CourseAnnouncementProps { text: string }

export class CourseAnnouncement extends React.Component<CourseAnnouncementProps, {}> {

    render() {

        return <div className="container py-4">
                <div className="card col-12 mb-1">
                    <div className="card-body">
                        <div className="alert alert-primary" role="alert">
                            { this.props.text }
                        </div>
                    </div>
                </div>
            </div>;

    }
}