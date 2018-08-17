import * as url from "url";
import * as React from "react";

const config = (Window as any).DDW_LTI_CONFIG || {};


export class ConfigurationURLComponent extends React.Component<any, any> {

    private configUrlInput: HTMLInputElement;

    constructor(props: React.ReactPropTypes) {

        super(props);

        this.state = {

            configurationUrl: '',
            courseOrg: '',
            inputStyle: 'form-control-plaintext',
            readOnly: true,
            copyBtnStyle: 'input-group-append d-none',
            invitationLink: ''

        };

        this.handleChangeInvitationLink = this.handleChangeInvitationLink.bind(this);
        this.handleChangeCourseOrg = this.handleChangeCourseOrg.bind(this);
        this.handleCopyBtnClick = this.handleCopyBtnClick.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    getOrgOwnerFromUrl(orgUrl: string) {

        let parsed = url.parse(orgUrl);
        return parsed['pathname'].split("/")[1];

    }

    handleChangeCourseOrg(event: React.ChangeEvent<HTMLInputElement>) {

        event.preventDefault();
        this.setState({courseOrg: event.target.value});

    }

    handleChangeInvitationLink(event: React.ChangeEvent<HTMLInputElement>) {

        event.preventDefault();
        this.setState({invitationLink: event.target.value});

    }

    handleClick(event: React.MouseEvent<HTMLElement>) {

        event.preventDefault();

        let ltiConfigUrl = url.format({

            protocol: config['protocol'],
            host: config['host'],
            pathname: "/lti/config",
            query: {
                'custom_ddw_course_org': this.getOrgOwnerFromUrl(this.state.courseOrg),
                'custom_ddw_org_invite_link': this.state.invitationLink
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
                            <button className="btn btn-primary text-white" type="button" onClick={this.handleCopyBtnClick}>
                                Copy
                            </button>
                        </div>
                </div>

            </div>,
            <label htmlFor="courseOrg">Course Configuration</label>,
            <div className="input-group mb-3">
                <div className = "input-group-prepend">
                    <span className="input-group-text min-width-160" id="courseOrgLabel">Organization URL</span>
                </div>
                <input type="text" className="form-control" id="courseOrg" aria-describedby="courseOrgLabel"
                    value={this.state.courseOrg} onChange={this.handleChangeCourseOrg}/>
            </div>,
            <div className="input-group mb-3">
                <div className = "input-group-prepend">
                    <span className="input-group-text min-width-160" id="courseOrgLabel">Invitation Link</span>
                </div>
                <input type="text" className="form-control" id="invitationLink" aria-describedby="invitationLinkLabel"
                       value={this.state.invitationLink} onChange={this.handleChangeInvitationLink}/>
            </div>,
            <button type="button" className="btn btn-primary text-white" onClick={this.handleClick}>

                Generate

            </button>

        ];

    }
}