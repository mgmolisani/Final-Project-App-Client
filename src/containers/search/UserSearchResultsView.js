import React, {Component} from 'react';
import UserSearchResults from "../../components/search/UserSearchResults";
import * as queryString from "query-string";
import UserService from "../../services/UserServices";

export default class UserSearchResultsView
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
        this.userService = UserService.instance;
    }

    findMatchingUsers(search) {
        if (search.search) {
            this.userService
                .searchForUsers(search)
                .then(users => {
                    console.log(users);
                    this.setState({users});
                });
        }
    }

    componentDidMount() {
        const search = queryString.parse(this.props.location.search);
        this.findMatchingUsers(search);
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.search !== prevProps.location.search) {
            const search = queryString.parse(this.props.location.search);
            this.findMatchingUsers(search);
        }
    }

    render() {
        return (
            <UserSearchResults users={this.state.users}/>
        );
    }
}