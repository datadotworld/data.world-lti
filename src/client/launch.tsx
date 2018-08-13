import 'bootstrap';
import * as React from "react";
import * as ReactDOM from "react-dom";

import { CourseAnnouncement } from "./components/CourseAnnouncement";
import { Navbar } from "./components/Navbar";

const context = (Window as any).DDW_LTI_CONTEXT || {};
const widgetOptions = (Window as any).DDW_WIDGET_OPTIONS || {};
const dataworld = require('dataworldWidgets');
const widget = new dataworld.DatasetSelector(widgetOptions);

ReactDOM.render(

    [
        <Navbar/>,
        <CourseAnnouncement name={context['lis_person_name_given']}
                            invitationLink={context['custom_ddw_org_invite_link']}
                            widget={widget}/>

    ],
    document.getElementById('root')

);

