import React, {Component} from 'react';
import {Link} from "react-router-dom";
import withLogin from "../utils/withLogin";
import UserService from "../../services/UserServices";

class ProfileIcon
    extends Component {

    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.userService = UserService.instance
    }

    logoutUser() {
        this.userService
            .logout()
            .then(() => {
                window.location.pathname = '/login'
            })
    }

    render() {
        const {currentUser} = this.props;
        return (
            currentUser._id ?
                <div className='profile-icon-container'>
                    <div className='profile-icon'>
                        <Link to={`/profile/${currentUser._id}`}>
                            <img src={'https://picsum.photos/200/300'} alt={''}/>
                        </Link>
                    </div>
                    <button type={'button'}
                            onClick={this.logoutUser}>
                        Logout
                    </button>
                </div> :
                <Link to={`/login`}>
                    Login
                </Link>
        );
    }
}

export default withLogin(ProfileIcon);

ProfileIcon.propTypes = {};

ProfileIcon.defaultProps = {};