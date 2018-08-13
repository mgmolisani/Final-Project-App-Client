import React, {Component} from 'react';
import TopMenu from "../top-menu/TopMenu";
import TopMenuItem from "../top-menu/TopMenuItem";

export default class NewEventMenu
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TopMenu>
                <TopMenuItem to={'/new/event'}>
                    New Event
                </TopMenuItem>
                <TopMenuItem to={'/new/eventlist'}>
                    New Event List
                </TopMenuItem>
            </TopMenu>
        );
    }
}

NewEventMenu.propTypes = {};

NewEventMenu.defaultProps = {};