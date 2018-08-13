import * as url from "url";
import * as React from "react";


export class ConfigurationURLComponent extends React.Component<any, any> {

    private configUrlInput: HTMLInputElement;

    constructor(props: React.ReactPropTypes) {

        super(props);

        this.state = {

            configurationUrl: '',
            courseOrg: '',
            inputStyle: 'form-control-plaintext',
            readOnly: true,
            copyBtnStyle: 'input-group-append d-none'

        };

        this.handleChangeCourseOrg = this.handleChangeCourseOrg.bind(this);
        this.handleCopyBtnClick = this.handleCopyBtnClick.bind(this);
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

        this.setState({

            configurationUrl: ltiConfigUrl,
            readOnly: false,
            inputStyle: 'form-control',
            copyBtnStyle: 'input-group-append'

        });

    }

    handleCopyBtnClick(event: React.MouseEvent<HTMLElement>) {

        event.preventDefault();
        this.configUrlInput.select();
        document.execCommand('copy')

    }

    render() {

        return [
            <div className="form-group">

                <label htmlFor="configurationURL">Config URL</label>

                <div className="input-group mb-3">
                    <input id="configurationURL" type="text"
                           ref={(ref) => {this.configUrlInput = ref}}
                           className={this.state.inputStyle}
                           value={this.state.configurationUrl}
                           placeholder="Populate the following field(s) to generate a configuration URL."
                           aria-label="Configuration URL"
                           aria-describedby="configurationURL"
                           readOnly={this.state.readOnly}/>
                        <div className={this.state.copyBtnStyle}>
                            <button className="btn btn-info" type="button" onClick={this.handleCopyBtnClick}>
                                Copy
                            </button>
                        </div>
                </div>

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