import React, {Component} from 'react';

export default class FollowUserButton
    extends Component {

    render() {
        const {eventlist, currentUser} = this.props;
        return (
            currentUser ?
                <button type={'button'}
                        style={{minWidth: 'fit-content'}}>
                    {currentUser.eventlists.owns.includes(eventlist.id) ||
                    currentUser.eventlists.follows.includes(eventlist.id) ?
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