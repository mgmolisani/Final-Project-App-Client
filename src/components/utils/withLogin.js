import React, {Component} from 'react';
import {users} from "../../constants/DummyData";

export default function withLogin(WrappedComponent) {
    return class extends Component {

        constructor(props) {
            super(props);
            this.state = {
                currentUser: users[0]
            }
        }

        render() {
            return <WrappedComponent currentUser={this.state.currentUser}
                                     {...this.props}/>;
        }
    };
}