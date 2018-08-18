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
        const {event, currentUser} = this.props;
        if (currentUser.events.following.includes(event._id)) {
            this.userService
                .unfollowEvent(currentUser._id, event._id)
                .then(() => {
                    this.props.updateCurrentUser(currentUser._id);
                })
        } else {
            this.userService
                .followEvent(currentUser._id, event._id)
                .then(() => {
                    this.props.updateCurrentUser(currentUser._id);
                })
        }
    }

    render() {
        const {event, currentUser} = this.props;
        return (
            currentUser._id && !currentUser.events.hosting.includes(event._id) ?
                <button className='btn btn-secondary'
                        type={'button'}
                        style={{minWidth: 'fit-content'}}
                        onClick={this.toggleFollowing}>
                    {currentUser.events.following.includes(event._id) ?
                        'Unfollow' :
                        'Follow'
                    }
                </button> :
                null
        )
    }
}

export default withCurrentUserButton(FollowUserButton);