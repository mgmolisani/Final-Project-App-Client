import React, {Component} from 'react';
import TopMenu from "../top-menu/TopMenu";
import TopMenuItem from "../top-menu/TopMenuItem";

export default class SearchMenu
    extends Component {

    render() {
        return (
            <TopMenu>
                <TopMenuItem to={'/search/user'}>
                    Users
                </TopMenuItem>
                <TopMenuItem to={'/search/event'}>
                    Events
                </TopMenuItem>
            </TopMenu>
        );
    }
}