import React, {Component} from 'react';
import {AuthenticationConsumer} from "./authentication/AuthenticationContext";
import InstagramRedirect from "../components/API/InstagramRedirect";
import * as queryString from "query-string";

export default class InstagramToken
    extends Component {

    render() {
        return (
            <AuthenticationConsumer>
                {({currentUser}) => {
                    if (currentUser._id) {
                        return <InstagramRedirect currentUser={currentUser}
                                                  token={{token: queryString.parse(this.props.location.hash).access_token}}/>
                    }
                }}
            </AuthenticationConsumer>
        );
    }
}