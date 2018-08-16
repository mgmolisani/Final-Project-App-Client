import React, {Component} from 'react';
import InvitedGuessListItem from "./InvitedGuessListItem";

export default class InvitedGuestList
    extends Component {

    render() {
        return (
            <div className='profile-recent-list'>
                {this.props.users.map(user => {
                    return <InvitedGuessListItem key={user._id}
                                                 user={user}
                                                 currentUser={this.props.currentUser}/>
                })}
            </div>
        );
    }
}