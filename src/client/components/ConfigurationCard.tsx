import * as React from "react";
import axios from 'axios';
import * as hljs from 'highlight.js';

export class ConfigurationCard extends React.Component<{}, any> {

    render() {
        return <div className="card">
            <div className="card-body">
                <h5 className="card-title">LTI Configuration XML</h5>
                <pre>
                    <code>
                    </code>
                </pre>
            </div>
        </div>;
    }
}