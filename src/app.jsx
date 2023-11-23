import cockpit from 'cockpit';
import React from 'react';
import {Card, CardTitle} from "@patternfly/react-core/dist/esm/components/Card/index.js";
import DockerService from "./DockerService.jsx";


const _ = cockpit.gettext;

export class Application extends React.Component {
    constructor() {
        super();
        this.state = {hostname: _("Unknown")};

        cockpit.file('/etc/hostname').watch(content => {
            this.setState({hostname: content.trim()});
        });
    }

    render() {
        return (<Card>
                <CardTitle>TEST</CardTitle>
                    <DockerService/>
            </Card>);
    }
}
