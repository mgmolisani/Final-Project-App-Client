import React, {Component} from 'react';
import withLogin from "../utils/withLogin";
import ProfileConnectionsListItem from "./ProfileConnectionsListItem";
import {users} from "../../constants/DummyData";

class ProfileConnectionsList
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
                                                       user={user}
                                                       currentUser={this.props.currentUser}/>
                })}
            </div>
        );
    }
}

export default withLogin(ProfileConnectionsList);

ProfileConnectionsList.propTypes = {};

ProfileConnectionsList.defaultProps = {};