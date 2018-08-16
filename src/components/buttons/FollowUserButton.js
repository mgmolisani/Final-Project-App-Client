import React, {Component} from 'react';
import UserService from "../../services/UserServices";
import {withCurrentUserButton} from "./ButtonWithCurrentUserWrapper";

class FollowUserButton
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            following: false
        };
        this.toggleFollowing = this.toggleFollowing.bind(this);
        this.userService = UserService.instance;
    }

    toggleFollowing(callback) {
        const {user, currentUser} = this.props;
        if (currentUser.following.includes(user._id)) {
            this.userService
                .unfollowUser(currentUser._id, user._id)
                .then(() => {
                    this.props.updateCurrentUser(currentUser._id);
                })
        } else {
            this.userService
                .followUser(currentUser._id, user._id)
                .then(() => {
                    this.props.updateCurrentUser(currentUser._id);
                })
        }
    }

    render() {
        const {user, currentUser} = this.props;
        return (
            currentUser._id && user._id !== currentUser._id ?
                <button type={'button'}
                        style={{minWidth: 'fit-content'}}
                        onClick={this.toggleFollowing}>
                    {currentUser.following.includes(user._id) ?
                        'Unfollow' :
                        'Follow'
                    }
                </button> :
                null
        )
    }
}

export default withCurrentUserButton(FollowUserButton);