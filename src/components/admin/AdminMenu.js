import React, {Component} from 'react';
import TopMenu from "../top-menu/TopMenu";
import TopMenuItem from "../top-menu/TopMenuItem";

export default class AdminMenu
    extends Component {

    render() {
        return (
            <TopMenu>
                <TopMenuItem to={'/admin/user'}>
                    Users
                </TopMenuItem>
                <TopMenuItem to={'/admin/event'}>
                    Events
                </TopMenuItem>
            </TopMenu>
        );
    }
}