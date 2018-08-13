import * as React from "react";
import { ConfigurationURLComponent } from "./ConfigurationURLComponent";

export interface ConfigurationBuilderComponentProps { }

export class ConfigurationBuilder extends React.Component<ConfigurationBuilderComponentProps, {}> {

    render() {

        return <div className="card-body">

            <form>

                <div className="form-group">

                    <label htmlFor="configurationType">Configuration Type</label>
                    <input id="configurationType" className="form-control" type="text"
                           placeholder="By URL" readOnly/>

                </div>

                <div className="form-group">

                    <label htmlFor="">Name</label>
                    <input id="configurationName" className="form-control" type="text"
                           placeholder="data.world" readOnly/>

                </div>

                <div className="form-group">

                    <label htmlFor="configurationConsumerKey">Consumer Key</label>
                    <input id="configurationConsumerKey" className="form-control" type="text"
                           placeholder="None" readOnly/>
                    <small id="configurationConsumerKeyHelp" className="form-text text-muted">
                        This field should be left blank.
                    </small>

                </div>

                <div className="form-group">

                    <label htmlFor="configurationSharedSecret">Shared Secret</label>
                    <input id="configurationSharedSecret" className="form-control" type="text"
                           placeholder="None" readOnly/>
                    <small id="configurationSharedSecretHelp" className="form-text text-muted">
                        This field should be left blank.
                    </small>

                </div>

                <ConfigurationURLComponent/>

            </form>

        </div>;

    }
}