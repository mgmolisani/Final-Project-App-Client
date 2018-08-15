import React, {Component} from 'react';
import FormInput from "../form/FormInput";
import UserService from "../../services/UserServices";
import {Redirect} from "react-router-dom";

export default class LoginForm
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputFields: {
                username: '',
                password: ''
            },
            redirectToCalendar: false
        };
        this.updateInputField = this.updateInputField.bind(this);
        this.loginUser = this.loginUser.bind(this);
        this.userService = UserService.instance;
    }

    loginUser() {
        this.userService
            .login(this.state.inputFields)
            .then(user => {
                if (user) {
                    this.setState({redirectToCalendar: true})
                } else {
                    alert('Login attempt failed. User with provided credentials not found.')
                }
            })
    }

    updateInputField(input) {
        this.setState({
            inputFields: {
                ...this.state.inputFields,
                ...input
            }
        });
    }

    render() {
        const {username, password} = this.state.inputFields;
        return (
            <div className='form-wrapper'>
                <form className='form-container'>
                    <div>
                        <h4 className='text-white mt-3'>
                            Login
                        </h4>
                        <FormInput label={'Username'}
                                   value={username}
                                   onChange={value => this.updateInputField({username: value})}/>
                        <FormInput label={'Password'}
                                   value={password}
                                   onChange={value => this.updateInputField({password: value})}/>
                        <button type={'button'}
                                onClick={this.loginUser}>
                            Login
                        </button>
                        {this.state.redirectToCalendar ?
                            <Redirect to={'/calendar'}
                                      push/> :
                            null}
                    </div>
                </form>
            </div>
        );
    }
}

LoginForm.propTypes = {};

LoginForm.defaultProps = {};