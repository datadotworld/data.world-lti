import * as React from "react";

const banner = require('../assets/png/banner.png');

export interface CourseAnnouncementProps { name: string, invitationLink: string, widget: any}

export class CourseAnnouncement extends React.Component<CourseAnnouncementProps, any> {

    constructor(props: CourseAnnouncementProps) {

        super(props);

        this.handleExploreClick = this.handleExploreClick.bind(this);

    }

    handleExploreClick(event: React.MouseEvent<HTMLElement>) {

        event.preventDefault();
        this.props.widget.show();

    }

    render() {

        return(

            <div className="container py-4">

                <div className="card col-12 mb-1">

                    <img className="card-img-top" src={banner} alt="data.world Welcome Banner"/>

                    <div className="card-body">

                        <h5 className="card-title">

                            Hey there, {this.props.name}!

                        </h5>

                        <div className="alert alert-info" role="alert">

                            <p>The instructor of this course has created an Organization for this class over at data.world.</p>

                            <p>Make sure to join, if you haven't already.</p>

                            <a target="_blank" href={this.props.invitationLink} className="btn btn-primary text-white">Join Organization</a>

                        </div>

                        <p className="card-text">

                            If you haven't already created an account on data.world, use the "Join" button below and register. Don't worry it is free! Otherwise, sign in to your account and begin exploring!

                        </p>

                        <form>

                            <div className="form-row">
                                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                    <a className="btn btn-outline-primary w-100" target="_blank" href="https://data.world">Join</a>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-2 mt-sm-2 mt-md-0">
                                    <button type="button" className="btn btn-primary text-white w-100" onClick={this.handleExploreClick}>

                                        Explore!

                                    </button>
                                </div>
                            </div>

                        </form>

                    </div>

                </div>

            </div>

        );

    }
}
