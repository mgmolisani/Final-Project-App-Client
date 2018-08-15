import React, {Component} from 'react';
import UserService from "../../services/UserServices";

export default function withLogin(WrappedComponent) {
    return class extends Component {

        constructor(props) {
            super(props);
            this.state = {
                currentUser: {},
                update: false
            };
            this.updateHandler = this.updateHandler.bind(this);
            this.userService = UserService.instance;
        }

        updateHandler() {
            this.setState({update: true});
        }


        componentDidMount() {
            this.userService
                .getProfile()
                .then(currentUser => {
                    this.setState({currentUser});
                })
                .catch((error) => {
                });
        }

        render() {
            return <WrappedComponent currentUser={this.state.currentUser}
                                     updateHandler={this.updateHandler}
                                     {...this.props}/>;
        }
    };
}

