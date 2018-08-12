import React, {Component} from 'react';
import withLogin from "../utils/withLogin";
import FormInput from "../form/FormInput";
import moment from "moment";

class ProfileInfo
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputFields: {
                username: '',
                firstName: '',
                lastName: '',
                address: '',
                phoneNumber: '',
                email: '',
                dateOfBirth: '',
            }
        };
        this.updateInputField = this.updateInputField.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    updateInputField(input) {
        this.setState({
            inputFields: {
                ...this.state.inputFields,
                ...input
            }
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.user.id !== prevProps.user.id) {
            this.updateInputField({
                username: this.props.user.username,
                firstName: this.props.user.firstName,
                lastName: this.props.user.lastName,
                address: this.props.user.address,
                phoneNumber: this.props.user.phoneNumber,
                email: this.props.user.email,
                dateOfBirth: this.props.user.dateOfBirth
            });
        }
    }

    updateUser() {
        const {inputFields} = this.state;
        this.props.updateUser({inputFields});
    }

    render() {
        const {user, currentUser} = this.props;
        const {inputFields} = this.state;
        const readOnly = user.id !== currentUser.id;
        return (
            <form>
                <FormInput label={'Username'}
                           value={inputFields.username}
                           readOnly={readOnly}
                           onChange={value => this.updateInputField({username: value})}/>
                <FormInput label={'First Name'}
                           value={inputFields.firstName}
                           readOnly={readOnly}
                           onChange={value => this.updateInputField({firstName: value})}/>
                <FormInput label={'Last Name'}
                           value={inputFields.lastName}
                           readOnly={readOnly}
                           onChange={value => this.updateInputField({lastName: value})}/>
                <FormInput label={'Address'}
                           value={inputFields.address}
                           readOnly={readOnly}
                           onChange={value => this.updateInputField({address: value})}/>
                <FormInput label={'Phone Number'}
                           value={inputFields.phoneNumber}
                           readOnly={readOnly}
                           onChange={value => this.updateInputField({phoneNumber: value})}/>
                <FormInput label={'Email'}
                           value={inputFields.email}
                           readOnly={readOnly}
                           onChange={value => this.updateInputField({email: value})}/>
                <FormInput label={'Birthday'}
                           value={moment(inputFields.dateOfBirth).format(moment.HTML5_FMT.DATE)}
                           type={'date'}
                           readOnly={readOnly}
                           onChange={value => {
                               value ?
                                   this.updateInputField({dateOfBirth: moment(value).toArray().slice(0, 3)}) :
                                   null
                           }}/>
                <button type={'button'}
                        onClick={() => this.updateUser()}>
                    Update User
                </button>
                {user.role} User
                <img src={user.avatar} alt={''}/>
            </form>
        );
    }
}

export default withLogin(ProfileInfo);

ProfileInfo.propTypes = {};

ProfileInfo.defaultProps = {};