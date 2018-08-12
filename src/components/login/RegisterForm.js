import React, {Component} from 'react';
import FormInput from "../form/FormInput";
import FormSelect from "../form/FormSelect";
import {userRoles} from "../../constants/enumerations";

export default class RegisterForm
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            verify: '',
            firstName: '',
            lastName: '',
            email: '',
            role: userRoles.PRIVATE
        };
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.updateVerify = this.updateVerify.bind(this);
        this.updateFirstName = this.updateFirstName.bind(this);
        this.updateLastName = this.updateLastName.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updateRole = this.updateRole.bind(this);
    }

    updateUsername(username) {
        this.setState({username});
    }

    updatePassword(password) {
        this.setState({password});
    }

    updateVerify(verify) {
        this.setState({verify});
    }

    updateFirstName(firstName) {
        this.setState({firstName});
    }

    updateLastName(lastName) {
        this.setState({lastName});
    }

    updateEmail(email) {
        this.setState({email});
    }

    updateRole(role) {
        this.setState({role});
    }

    render() {
        const {username, password, verify, firstName, lastName, email, role} = this.state;
        return (
            <div>
                <FormInput label={'Username'}
                           value={username}
                           onChange={event => this.updateUsername(event.target.value)}/>
                <FormInput label={'Password'}
                           value={password}
                           onChange={event => this.updatePassword(event.target.value)}/>
                <FormInput label={'Verify Password'}
                           value={verify}
                           onChange={event => this.updateVerify(event.target.value)}/>
                <FormInput label={'First Name'}
                           value={firstName}
                           onChange={event => this.updateFirstName(event.target.value)}/>
                <FormInput label={'Last Name'}
                           value={lastName}
                           onChange={event => this.updateLastName(event.target.value)}/>
                <FormInput label={'Email'}
                           value={email}
                           type={'email'}
                           onChange={event => this.updateEmail(event.target.value)}/>
                <FormSelect label={'Role'}
                            value={role}
                            options={Object.values(userRoles)}
                            onChange={event => this.updateRole(event.target.value)}/>
                <button>
                    Register
                </button>
            </div>
        );
    }
}

RegisterForm.propTypes = {};

RegisterForm.defaultProps = {};