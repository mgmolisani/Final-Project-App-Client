import React, {Component} from 'react';
import PropTypes from 'prop-types'
import FormInput from "../form/FormInput";

export default class LoginForm
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
    }

    updateUsername(username) {
        this.setState({username});
    }

    updatePassword(password) {
        this.setState({password});
    }

    render() {
        const {username, password} = this.state;
        return (
            <div>
                <FormInput label={'Username'}
                           value={username}
                           onChange={event => this.updateUsername(event.target.value)}/>
                <FormInput label={'Password'}
                           value={password}
                           onChange={event => this.updatePassword(event.target.value)}/>
                <button>
                    Login
                </button>
            </div>
        );
    }
}

LoginForm.propTypes = {};

LoginForm.defaultProps = {};