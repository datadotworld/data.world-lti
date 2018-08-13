import 'bootstrap';
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Navbar } from "./components/Navbar";
import { CourseAnnouncement } from "./components/CourseAnnouncement";


(Window as any).DDW_LTI = (Window as any).DDW_LTI || (() => {

    return {

        initialize: (config: any) => {

            ReactDOM.render(

                <div>

                    <Navbar/>
                    <CourseAnnouncement text="This is a primary alert—check it out!"/>

                </div>,

                document.getElementById("root")

            );

        }

    };

})();