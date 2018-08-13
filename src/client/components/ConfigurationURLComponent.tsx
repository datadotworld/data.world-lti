import * as url from "url";
import * as React from "react";
import {ReactPropTypes} from "react";


export class ConfigurationURLComponent extends React.Component<any, any> {

    constructor(props: ReactPropTypes) {

        super(props);
        this.state = {

            configurationUrl: 'Populate the following field(s) to generate a configuration URL.',
            courseOrg: ''

        };
        this.handleChangeCourseOrg = this.handleChangeCourseOrg.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    handleChangeCourseOrg(event: React.ChangeEvent<HTMLInputElement>) {

        event.preventDefault();
        this.setState({courseOrg: event.target.value});

    }

    handleClick(event: React.MouseEvent<HTMLElement>) {

        event.preventDefault();

        let ltiConfigUrl = url.format({

            protocol: (process.env.DDW_LTI_SECURE === "false") ? 'http' : "https",
            host: process.env.DDW_LTI_CONFIGURATION_HOST || 'example.com',
            pathname: "/lti/config",
            query: {
                'custom_ddw_course_org': this.state.courseOrg
            }

        });

        this.setState({configurationUrl: ltiConfigUrl});

    }

    render() {

        return [
            <div className="form-group">

                <label htmlFor="configurationURL">Config URL</label>
                <input id="configurationURL" className="form-control-plaintext" type="text"
                       placeholder={this.state.configurationUrl} readOnly/>

            </div>,
            <label htmlFor="courseOrg">Course Organization</label>,
            <div className="input-group mb-3">
                <div className = "input-group-prepend">
                    <span className="input-group-text" id="courseOrgLabel">Organization URL</span>
                </div>
                <input type="text" className="form-control" id="courseOrg" aria-describedby="courseOrgLabel"
                    value={this.state.courseOrg} onChange={this.handleChangeCourseOrg}/>
            </div>,
            <button type="button" className="btn btn-primary" onClick={this.handleClick}>

                Generate

            </button>

        ];

    }
}