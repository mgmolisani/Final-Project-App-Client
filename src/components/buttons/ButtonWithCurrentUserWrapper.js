import React, {Component} from 'react';
import {AuthenticationConsumer} from "../../containers/authentication/AuthenticationContext";

export function withCurrentUserButton(WrappedButton) {
    return class extends Component {

        render() {
            return <AuthenticationConsumer>
                {context => (
                    <WrappedButton currentUser={context.currentUser}
                                   updateCurrentUser={context.updateCurrentUser}
                                   {...this.props}/>
                )}
            </AuthenticationConsumer>
        }
    }
}