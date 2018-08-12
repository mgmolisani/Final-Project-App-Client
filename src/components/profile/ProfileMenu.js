import React, {Component} from 'react';
import ProfileMenuItem from "./ProfileMenuItem";
import {withRouter} from "react-router-dom";
import * as DummyData from "../../constants/DummyData";

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
            <div className='profile menu-container'>
                <ul>
                    <ProfileMenuItem to={`${url}`}
                                     exact>
                        <div className='px-4'>
                            Overview
                        </div>
                    </ProfileMenuItem>
                    <ProfileMenuItem to={`${url}/recent`}>
                        <div className='px-4'>
                            Recent Activity
                        </div>
                    </ProfileMenuItem>
                    <ProfileMenuItem to={`${url}/eventlists`}>
                        <div className='px-4'>
                            Event Lists
                        </div>
                    </ProfileMenuItem>
                    <ProfileMenuItem to={`${url}/followers`}>
                        <div className='px-4'>
                            {`Followers${user ? ` (${user.connections.followers.length})` : ''}`}
                        </div>
                    </ProfileMenuItem>
                    <ProfileMenuItem to={`${url}/following`}>
                        <div className='px-4'>
                            {`Following${user ? ` (${user.connections.following.length})` : ''}`}
                        </div>
                    </ProfileMenuItem>
                </ul>
            </div>
        );
    }
}

export default withRouter(ProfileMenu);

ProfileMenu.propTypes = {};

ProfileMenu.defaultProps = {};