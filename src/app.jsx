import cockpit from 'cockpit';
import React from 'react';
import {Alert} from "@patternfly/react-core/dist/esm/components/Alert/index.js";
import {Card, CardBody, CardTitle} from "@patternfly/react-core/dist/esm/components/Card/index.js";
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
                <CardTitle>Starter Kit</CardTitle>
                <CardBody>
                    <DockerService/>
                </CardBody>
            </Card>);
    }
}
