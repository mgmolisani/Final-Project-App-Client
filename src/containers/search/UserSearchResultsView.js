import React, {Component} from 'react';
import UserSearchResults from "../../components/search/UserSearchResults";
import * as queryString from "query-string";
import {users} from "../../constants/DummyData";

export default class UserSearchResultsView
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    findMatchingUsers(search) {
        this.setState({users: users});
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

UserSearchResultsView.propTypes = {};

UserSearchResultsView.defaultProps = {};