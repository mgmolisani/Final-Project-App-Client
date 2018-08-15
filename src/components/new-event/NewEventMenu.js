import React, {Component} from 'react';
import TopMenu from "../top-menu/TopMenu";
import TopMenuItem from "../top-menu/TopMenuItem";

export default class NewEventMenu
    extends Component {

    render() {
        return (
            <TopMenu>
                <TopMenuItem to={'/create/event'}>
                    New Event
                </TopMenuItem>
                <TopMenuItem to={'/create/eventlist'}>
                    New Event List
                </TopMenuItem>
            </TopMenu>
        );
    }
}

NewEventMenu.propTypes = {};

NewEventMenu.defaultProps = {};