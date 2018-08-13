import React, {Component} from 'react';
import withLogin from "../utils/withLogin";
import FormInput from "../form/FormInput";
import moment from "moment";
import Avatar from "../user/Avatar";
import {Col, Row} from "reactstrap";

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
                dateOfBirth: moment().format(moment.HTML5_FMT.DATE)
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

    renderSensitive() {
        const {user, currentUser} = this.props;
        const {inputFields} = this.state;
        if (user.id === currentUser.id) {
            return (
                <React.Fragment>
                    <FormInput label={'Address'}
                               value={inputFields.address}
                               onChange={value => this.updateInputField({address: value})}/>
                    <FormInput label={'Phone Number'}
                               value={inputFields.phoneNumber}
                               onChange={value => this.updateInputField({phoneNumber: value})}/>
                    <FormInput label={'Email'}
                               value={inputFields.email}
                               onChange={value => this.updateInputField({email: value})}/>
                    <FormInput label={'Birthday'}
                               value={moment(inputFields.dateOfBirth).format(moment.HTML5_FMT.DATE)}
                               type={'date'}
                               onChange={value => {
                                   if (value) {
                                       this.updateInputField({dateOfBirth: moment(value).toArray().slice(0, 3)})
                                   }
                               }}/>
                </React.Fragment>
            )
        }
    }

    renderUpdateButton() {
        const {user, currentUser} = this.props;
        if (user.id === currentUser.id) {
            return <button type={'button'}
                           onClick={() => this.updateUser()}>
                Update User
            </button>
        }
    }

    renderFollowButton() {
        const {user, currentUser} = this.props;
        if (currentUser && user.id !== currentUser.id) {
            return <button type={'button'}
                           onClick={() => {}}>
                Follow
            </button>
        }
    }

    render() {
        const {user, currentUser} = this.props;
        const {inputFields} = this.state;
        const readOnly = user.id !== currentUser.id;
        return (
            <Row noGutters>
                <div className='form-wrapper'>
                    <div className='form-container'>
                        <Col className='p-3'
                             md={'auto'}>
                            <div className='profile-banner'
                                 style={{
                                     minHeight: 50,
                                     minWidth: 50
                                 }}>
                                <Avatar avatar={user.avatar}
                                        username={user.username}
                                        size={'30vmin'}/>
                                <h3 className='username'>
                                    {user.username}
                                </h3>
                                <h5 className='role'>
                                    {`${user.role} User`}
                                </h5>
                                {this.renderFollowButton()}
                            </div>
                        </Col>
                        <Col>
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
                                {this.renderSensitive()}
                                {this.renderUpdateButton()}
                            </form>
                        </Col>
                    </div>
                </div>
            </Row>
        );
    }
}

export default withLogin(ProfileInfo);

ProfileInfo.propTypes = {};

ProfileInfo.defaultProps = {};