import React, {Component} from 'react';
import ProfileConnectionsListItem from "./ProfileConnectionsListItem";

export default class ProfileConnectionsList
    extends Component {

    sortedFollowersByUsername() {
        let sortedFollowers = [...this.props.users];
        sortedFollowers.sort((a, b) => {
            return a.username < b.username ?
                -1 :
                1
        });
        return sortedFollowers;
    }

    render() {
        return (
            <div className='profile-recent-list'>
                {this.sortedFollowersByUsername().map(user => {
                    return <ProfileConnectionsListItem key={user._id}
                                                       user={user}/>
                })}
            </div>
        );
    }
}