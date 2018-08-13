import * as React from "react";

export interface LaunchProviderProps {
    context: any;
}

export class LaunchProvider extends React.Component<LaunchProviderProps, {}> {

    render() {

        return(

            <div>

                {this.props.children}

            </div>

        );
    }
}