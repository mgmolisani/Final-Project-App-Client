import React, {Component} from 'react';
import FormInput from "../form/FormInput";
import FormSelect from "../form/FormSelect";
import {userRoles} from "../../constants/enumerations";
import UserService from "../../services/UserServices";
import {Redirect} from "react-router-dom";
import Avatar from "../user/Avatar";

export default class RegisterForm
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputFields: {
                username: '',
                password: '',
                verify: '',
                firstName: '',
                lastName: '',
                email: '',
                role: userRoles.PRIVATE,
                avatar: ''
            },
            passwordVisible: false,
            redirectToCalendar: false
        };
        this.updateInputField = this.updateInputField.bind(this);
        this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
        this.registerUser = this.registerUser.bind(this);
        this.userService = UserService.instance;
    }

    registerUser() {
        const {inputFields} = this.state;
        if (Object.values(inputFields).some(input => {
            return !input;
        })) {
            alert('All fields are required to register.')
        } else if (inputFields.password !== inputFields.verify) {
            alert('Passwords do not match.')
        } else {
            this.userService
                .findUserByCredentials({username: inputFields.username})
                .then(user => {
                    if (user) {
                        alert('Username is already taken.');
                    } else {
                        this.userService
                            .register(this.state.inputFields)
                            .then(user => {
                                if (user) {
                                    this.props.updateCurrentUser(user._id);
                                    this.setState({redirectToCalendar: true})
                                } else {
                                    alert('Register attempt failed.')
                                }
                            })
                    }
                })
        }
    }

    updateInputField(input) {
        this.setState({
            inputFields: {
                ...this.state.inputFields,
                ...input
            }
        });
    }

    togglePasswordVisibility() {
        this.setState({passwordVisible: !this.state.passwordVisible})
    }

    render() {
        const {inputFields, passwordVisible} = this.state;
        return (
            <div className='form-wrapper'>
                <form className='form-container'>
                    <h4 className='text-white mt-3'>
                        Register
                    </h4>
                    <FormInput label={'Username'}
                               value={inputFields.username}
                               onChange={value => this.updateInputField({username: value})}/>
                    <FormInput label={'Password'}
                               value={inputFields.password}
                               type={passwordVisible ? 'text' : 'password'}
                               onChange={value => this.updateInputField({password: value})}/>
                    <FormInput label={'Verify Password'}
                               value={inputFields.verify}
                               type={passwordVisible ? 'text' : 'password'}
                               onChange={value => this.updateInputField({verify: value})}/>
                    <FormInput label={'First Name'}
                               value={inputFields.firstName}
                               onChange={value => this.updateInputField({firstName: value})}/>
                    <FormInput label={'Last Name'}
                               value={inputFields.lastName}
                               onChange={value => this.updateInputField({lastName: value})}/>
                    <FormInput label={'Email'}
                               value={inputFields.email}
                               type={'email'}
                               onChange={value => this.updateInputField({email: value})}/>
                    <FormSelect label={'Role'}
                                value={inputFields.role}
                                options={Object.values(userRoles)}
                                onChange={value => this.updateInputField({role: value})}/>
                    <FormInput label={'Profile Picture'}
                               value={inputFields.avatar}
                               onChange={value => this.updateInputField({avatar: value})}/>
                    {inputFields.avatar ?
                        <div className='m-auto d-flex justify-content-center p-3'>
                            <Avatar avatar={inputFields.avatar}
                                    username={inputFields.username}
                                    size={'10em'}/>
                        </div> :
                        null}
                    <div className='d-flex justify-content-center my-3'>
                        <button className='btn btn-secondary'
                                type={'button'}
                                onClick={this.registerUser}>
                            Register
                        </button>
                    </div>
                    {this.state.redirectToCalendar ?
                        <Redirect to={'/calendar'}
                                  push/> :
                        null}
                </form>
            </div>
        );
    }
}

RegisterForm.propTypes = {};

RegisterForm.defaultProps = {};