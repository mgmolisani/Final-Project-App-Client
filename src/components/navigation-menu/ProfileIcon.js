import React, {Component} from 'react';
import {Link} from "react-router-dom";
import UserService from "../../services/UserServices";

export default class ProfileIcon
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
                            <img src={currentUser.avatar}
                                 alt={currentUser.username}/>
                        </Link>
                    </div>
                </div> :
                <div className='profile-icon-container'>
                    <Link to={`/login`}>
                        Login
                    </Link>
                </div>
        );
    }
}