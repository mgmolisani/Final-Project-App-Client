import React, {Component} from 'react';
import ContentView from "./ContentView";
import LoginMenu from "../components/login/LoginMenu";
import LoginForm from "../components/login/LoginForm";
import {AuthenticationConsumer} from "./authentication/AuthenticationContext";

export default class LoginView
    extends Component {

    render() {
        return (
            <ContentView>
                <div className='d-flex flex-column w-100 h-100'
                     style={{
                         overflow: 'hidden'
                     }}>
                    <LoginMenu/>
                    <ContentView>
                        <div className='d-flex flex-column'>
                            <AuthenticationConsumer>
                                {({updateCurrentUser}) => (
                                    <LoginForm updateCurrentUser={updateCurrentUser}/>
                                )}
                            </AuthenticationConsumer>
                        </div>
                    </ContentView>
                </div>
            </ContentView>
        );
    }
}

LoginView.propTypes = {};

LoginView.defaultProps = {};