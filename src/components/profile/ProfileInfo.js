import React, {Component} from 'react';
import moment from "moment";
import UserService from "../../services/UserServices";
import {Redirect} from "react-router-dom";
import FormInput from "../form/FormInput";
import {Col, Row} from "reactstrap";
import FollowUserButton from "../buttons/FollowUserButton";
import Avatar from "../user/Avatar";

const INSTAGRAM_REDIRECT_URL = 'https://api.instagram.com/oauth/authorize/' +
    '?client_id=abe38ea0dc7746cc9f087e0cc54d97b5&' +
    'redirect_uri=https://mmolisani-final-project-cs5610.herokuapp.com/instagram/access_token' +
    '&response_type=token';

export default class ProfileInfo
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
                dateOfBirth: moment().format(moment.HTML5_FMT.DATE),
            },
            redirectToLogin: false
        };
        this.userService = UserService.instance;
        this.logoutUser = this.logoutUser.bind(this);
        this.updateInputField = this.updateInputField.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    updateUser() {
        const {inputFields} = this.state;
        this.props.updateUser(inputFields);
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
        if (this.state.redirectToLogin) {
            this.setState({redirectToLogin: false});
        }
        if (this.props.user._id !== prevProps.user._id) {
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

    logoutUser() {
        this.userService
            .logout()
            .then(() => {
                this.props.updateCurrentUser(null);
                this.setState({redirectToLogin: true});
            })
    }

    renderLinkInstagramButton() {
        const {user, currentUser} = this.props;
        if (user._id === currentUser._id && !currentUser.instagramAccessToken) {
            return <button className='btn btn-secondary'
                           type={'button'}>
                <a href={INSTAGRAM_REDIRECT_URL}>
                    Connect to Instagram
                </a>
            </button>
        }
    }

    renderLogoutButton() {
        if (this.props.currentUser._id) {
            return <button className='btn btn-secondary mb-3'
                           type={'button'}
                           onClick={this.logoutUser}>
                Logout
            </button>
        }
    }

    renderSensitive(inputFields) {
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

    renderUpdateButton() {
        return <div className='d-flex justify-content-center my-3'>
            <button className='btn btn-secondary'
                    type={'button'}
                    onClick={() => this.updateUser()}>
                Update User
            </button>
        </div>
    }

    render() {
        const {user, currentUser} = this.props;
        const {inputFields, redirectToLogin: redirect} = this.state;
        const readOnly = !(user._id === currentUser._id || currentUser.role === 'Administrator');
        return (
            <Row noGutters>
                {redirect ?
                    <Redirect to={'/login'}
                              push/> :
                    null}
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
                                {this.renderLogoutButton()}
                                {this.renderLinkInstagramButton()}
                                <FollowUserButton user={user}/>
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
                                {!readOnly ?
                                    <React.Fragment>
                                        {this.renderSensitive(inputFields)}
                                        {this.renderUpdateButton()}
                                    </React.Fragment> :
                                    null}
                            </form>
                        </Col>
                    </div>
                </div>
            </Row>
        );
    }
}