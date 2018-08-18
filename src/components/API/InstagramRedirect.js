import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import UserService from "../../services/UserServices";

export default class InstagramRedirect
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    componentDidMount() {
        UserService.instance
            .addInstagramTokenForUser(this.props.currentUser._id, this.props.token)
            .then(() => {
                this.setState({redirect: true});
                this.props.callback(this.props.currentUser._id);
            });
    }

    componentDidUpdate() {
        if (this.state.redirect) {
            this.setState({redirect: false});
        }
    }

    render() {
        return this.state.redirect ?
            <Redirect to={`/profile/${this.props.currentUser._id}`}
                      push/> :
            null
    }
}