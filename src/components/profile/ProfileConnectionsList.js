import React, {Component} from 'react';
import PropTypes from 'prop-types'
import withLogin from "../utils/withLogin";
import ProfileConnectionsListItem from "./ProfileConnectionsListItem";
import ProfileRecentCommentList from "./ProfileRecentCommentList";
import models from "../../models/models";
import {users} from "../../constants/DummyData";

class ProfileConnectionsList
    extends Component {

    constructor(props) {
        super(props);
    }

    sortedFollowersByUsername() {
        let sortedFollowers = [...users];
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
                    return <ProfileConnectionsListItem user={user}
                                                       currentUser={this.props.currentUser}/>
                })}
            </div>
        );
    }
}

export default withLogin(ProfileConnectionsList);

ProfileRecentCommentList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape(models.user)).isRequired
};

ProfileConnectionsList.defaultProps = {};