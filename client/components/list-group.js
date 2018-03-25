import React from 'react'

export default class ListGroup extends React.Component {

    render() {

        return(

            <div data-analytics-breadcrumb="feed-featured" className="list-group">

                <div className="dw-FeedItem FeedItem__featureCard___1zzCx panel panel-default">

                    <div className="panel-body">

                        <div className="col-12" style={{padding: '25px'}}>

                            {this.props.children}

                        </div>

                    </div>

                </div>

            </div>

        );

    }
}