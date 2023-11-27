import cockpit from 'cockpit';
import React from 'react';
import {NewPlayground} from "./new-playground/NewPlayground.jsx";

const _ = cockpit.gettext;

export class Application extends React.Component {
    constructor() {
        super();
        this.state = { hostname: _("Unknown") };

        cockpit.file('/etc/hostname').watch(content => {
            this.setState({ hostname: content.trim() });
        });
    }

    render() {
        return (
            <>
                <NewPlayground />
            </>
        );
    }
}
