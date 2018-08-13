import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import * as DummyData from "../../constants/DummyData";
import TopMenuItem from "../top-menu/TopMenuItem";
import TopMenu from "../top-menu/TopMenu";

class ProfileMenu
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    fetchUserById() {
        const {userId} = this.props.match.params;
        this.setState({user: DummyData.users[userId - 1]});
    }

    componentDidMount() {
        this.fetchUserById();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.fetchUserById();
        }
    }

    render() {
        const {url} = this.props.match;
        const {user} = this.state;
        return (
            <TopMenu>
                <TopMenuItem to={`${url}`}
                             exact>
                    Overview
                </TopMenuItem>
                <TopMenuItem to={`${url}/recent`}>
                    Recent Activity
                </TopMenuItem>
                <TopMenuItem to={`${url}/eventlists`}>
                    Event Lists
                </TopMenuItem>
                <TopMenuItem to={`${url}/followers`}>
                    {`Followers${user ? ` (${user.connections.followers.length})` : ''}`}
                </TopMenuItem>
                <TopMenuItem to={`${url}/following`}>
                    {`Following${user ? ` (${user.connections.following.length})` : ''}`}
                </TopMenuItem>
            </TopMenu>
        );
    }
}

export default withRouter(ProfileMenu);

ProfileMenu.propTypes = {};

ProfileMenu.defaultProps = {};