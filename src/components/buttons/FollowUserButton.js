import React, {Component} from 'react';
import withLogin from "../utils/withLogin";
import UserService from "../../services/UserServices";

class FollowUserButton
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: {}
        };
        this.toggleFollow = this.toggleFollow.bind(this);
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

    toggleFollow() {
        const {user, currentUser} = this.props;
        if (currentUser.following.includes(user._id)) {
            this.userService
                .unfollowUser(currentUser._id, user._id)
                .then(() => {
                    this.updateCurrentUser();
                })
        } else {
            this.userService
                .followUser(currentUser._id, user._id)
                .then(() => {
                    this.updateCurrentUser();
                })
        }
    }

    render() {
        const {user} = this.props;
        const {currentUser} = this.props;
        return (
            currentUser._id && user._id !== currentUser._id ?
                <button type={'button'}
                        style={{minWidth: 'fit-content'}}
                        onClick={this.toggleFollow}>
                    {currentUser.following.includes(user._id) ?
                        'Unfollow' :
                        'Follow'
                    }
                </button> :
                null
        )
    }
}

export default withLogin(FollowUserButton);

FollowUserButton.propTypes = {};

FollowUserButton.defaultProps = {};