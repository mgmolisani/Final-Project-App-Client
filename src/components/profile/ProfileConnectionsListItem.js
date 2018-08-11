import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class ProfileConnectionsListItem
    extends Component {

    constructor(props) {
        super(props);
    }

    renderFollowButton() {
        const {user, currentUser} = this.props;
        return (
            currentUser ?
                <button>
                    {currentUser.connections.following.includes(user.id) ?
                        'Unfollow' :
                        'Follow'
                    }
                </button> :
                null
        )
    }

    render() {
        const {user} = this.props;
        return (
            <div>
                <img src={user.avatar} alt={''}/>
                <h4>
                    {`${user.firstName} ${user.lastName}`}
                </h4>
                <h6>
                    {`${user.username}`}
                </h6>
                <h6>
                    {`${user.connections.followers.length} followers`}
                </h6>
                {this.renderFollowButton()}
            </div>
        );
    }
}

ProfileConnectionsListItem.propTypes = {
    user: PropTypes.object.isRequired,
    currentUser: PropTypes.object.isRequired
};

ProfileConnectionsListItem.defaultProps = {};