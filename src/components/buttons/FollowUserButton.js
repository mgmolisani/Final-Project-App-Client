import React, {Component} from 'react';

export default class FollowUserButton
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {user, currentUser} = this.props;
        return (
            currentUser && user.id !== currentUser.id ?
                <button type={'button'}
                        style={{minWidth: 'fit-content'}}>
                    {currentUser.connections.following.includes(user.id) ?
                        'Unfollow' :
                        'Follow'
                    }
                </button> :
                null
        )
    }
}

FollowUserButton.propTypes = {};

FollowUserButton.defaultProps = {};