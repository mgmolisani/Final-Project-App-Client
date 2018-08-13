import React, {Component} from 'react';
import TopMenu from "../top-menu/TopMenu";
import TopMenuItem from "../top-menu/TopMenuItem";

export default class SearchMenu
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TopMenu>
                <TopMenuItem to={'/search/user'}>
                    Users
                </TopMenuItem>
                <TopMenuItem to={'/search/event'}>
                    Events
                </TopMenuItem>
                <TopMenuItem to={'/search/eventlist'}>
                    Event Lists
                </TopMenuItem>
            </TopMenu>
        );
    }
}

SearchMenu.propTypes = {};

SearchMenu.defaultProps = {};