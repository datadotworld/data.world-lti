import * as React from "react";

export interface InfoCardProps { title: string; body: string; }

export class InfoCard extends React.Component<InfoCardProps, {}> {
    render() {
        return <div className="card col-12 mb-1">
            <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text">{this.props.body}</p>
            </div>
        </div>;
    }
}