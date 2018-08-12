import React, {Component} from 'react';
import FormInput from "../form/FormInput";
import FormSelect from "../form/FormSelect";
import {userRoles} from "../../constants/enumerations";
import ContentView from "../../containers/ContentView";

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
                role: userRoles.PRIVATE
            },
            passwordVisible: false
        };
        this.updateInputField = this.updateInputField.bind(this);
        this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
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
            <div className='login-form-wrapper'>
                <form className='login-form-container'>
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
                    <button onClick={this.togglePasswordVisibility}
                            type={'button'}>
                        Toggle
                    </button>
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
                    <button type={'button'}>
                        Register
                    </button>
                </form>
            </div>
        );
    }
}

RegisterForm.propTypes = {};

RegisterForm.defaultProps = {};