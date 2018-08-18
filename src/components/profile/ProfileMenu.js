import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import TopMenuItem from "../top-menu/TopMenuItem";
import TopMenu from "../top-menu/TopMenu";

class ProfileMenu
    extends Component {

    render() {
        const {url} = this.props.match;
        return (
            <TopMenu>
                <TopMenuItem to={`${url}`}
                             exact>
                    Overview
                </TopMenuItem>{/*
                <TopMenuItem to={`${url}/recent`}>
                    Recent Activity
                </TopMenuItem>*/}
                <TopMenuItem to={`${url}/events`}>
                    Followed Events
                </TopMenuItem>
                <TopMenuItem to={`${url}/followers`}>
                    Followers
                </TopMenuItem>
                <TopMenuItem to={`${url}/following`}>
                    Following
                </TopMenuItem>
            </TopMenu>
        );
    }
}

export default withRouter(ProfileMenu);

ProfileMenu.propTypes = {};

ProfileMenu.defaultProps = {};