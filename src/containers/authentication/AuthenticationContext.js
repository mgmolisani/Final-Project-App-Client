import React, {Component} from 'react';
import UserService from "../../services/UserServices";

const AuthenticationContext = React.createContext();

export class AuthenticationProvider
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: {},
            updateCurrentUser: userId => {
                if (userId) {
                    this.userService
                        .findUserById(userId)
                        .then(currentUser => {
                            this.setState({currentUser})
                        })
                } else {
                    this.setState({currentUser: {}})
                }
            }
        };
        this.userService = UserService.instance;
    };

    componentDidMount() {
        this.userService
            .getProfile()
            .then(user => {
                if (user._id) {
                    this.state.updateCurrentUser(user._id)
                }
            })
            .catch(() => {})
    }

    render() {
        return (
            <AuthenticationContext.Provider value={this.state}>
                {this.props.children}
            </AuthenticationContext.Provider>
        );
    }
}

export const AuthenticationConsumer = AuthenticationContext.Consumer;