import React, {Component} from 'react';
import UserService from "../../services/UserServices";
import {Link} from "react-router-dom";
import AdminUserList from "../../components/admin/AdminUserList";

export default class UserAdminView
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
        this.userService = UserService.instance;
        this.findAllUsers = this.findAllUsers.bind(this);
    }

    findAllUsers() {
        this.userService
            .findAllUsers()
            .then(users => {
                this.setState({users});
            });
    }

    componentDidMount() {
        this.findAllUsers();
    }

    render() {
        return (
            <div>
                <div className='d-flex justify-content-center'>
                    <button className='btn btn-secondary mt-3'
                            type={'button'}>
                        <Link to={'/register'}>
                            Create New User
                        </Link>
                    </button>
                </div>
                <AdminUserList users={this.state.users}
                               updateList={this.findAllUsers}/>
            </div>
        );
    }
}