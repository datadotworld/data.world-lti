import * as React from "react";
import { Navbar } from './Navbar';
import { InfoCard } from './InfoCard';

export interface RootContainerProps { navbar: Navbar; card: InfoCard; }

export class RootContainer extends React.Component<RootContainerProps, {}> {
    render() {
        return <div>
            {this.props.navbar}
            {this.props.card}
        </div>;
    }
}