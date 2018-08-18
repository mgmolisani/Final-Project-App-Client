import React, {Component} from 'react';
import InviteGuestListItem from "./InviteGuestListItem";
import UserService from "../../services/UserServices";

export default class InviteGuestList
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            following: []
        };
        this.userService = UserService.instance;
    }

    fetchFollowerForCurrentUser() {
        if (this.props.currentUser._id) {
            this.userService
                .findFollowingForUser(this.props.currentUser._id)
                .then(following => {
                    this.setState({following});
                })
        }
    }

    componentDidMount() {
        this.fetchFollowerForCurrentUser();
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentUser._id !== prevProps.currentUser._id) {
            this.fetchFollowerForCurrentUser()
        }
    }

    render() {
        return (
            this.state.following.length > 0 ?
                <div className='profile-recent-list'>
                    {this.state.following.map(user => {
                        return <InviteGuestListItem key={user._id}
                                                    user={user}
                                                    invited={this.props.invited}
                                                    currentUser={this.props.currentUser}
                                                    updateInvitedGuests={this.props.updateInvitedGuests}/>
                    })}
                </div> :
                <div className='text-white'>
                    You must follow users to invite them to events.
                </div>
        );
    }
}