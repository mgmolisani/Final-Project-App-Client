import React, {Component} from 'react';
import UserService from "../../services/UserServices";

export default class FollowEventlistButton
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: {}
        };
        this.userService = UserService.instance;
    }

    updateCurrentUser() {
        const userId = this.props.currentUser._id;
        if (userId) {
            this.userService
                .findUserById(userId)
                .then(currentUser => {
                    this.setState({currentUser})
                });
        }
    }

    componentDidMount() {
        this.updateCurrentUser();
    }

    render() {
        const {eventlist, currentUser} = this.props;
        return (
            currentUser ?
                <button type={'button'}
                        style={{minWidth: 'fit-content'}}>
                    {currentUser.eventlists.owns.includes(eventlist._id) ||
                    currentUser.eventlists.follows.includes(eventlist._id) ?
                        'Unfollow' :
                        'Follow'
                    }
                </button> :
                null
        )
    }
}

FollowEventlistButton.propTypes = {};

FollowEventlistButton.defaultProps = {};