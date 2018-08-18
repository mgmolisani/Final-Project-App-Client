import React, {Component} from 'react';
import FormLabel from "../form/FormLabel";
import AdminUserListItem from "./AdminUserListItem";
import {AuthenticationConsumer} from "../../containers/authentication/AuthenticationContext";

export default class AdminUserList
    extends Component {

    render() {
        return (
            <React.Fragment>
                <FormLabel label={'User Search Results'}/>
                {this.props.users.length > 0 ?
                    <AuthenticationConsumer>
                        {({currentUser}) => (
                            <div className='profile-recent-list'>
                                {this.props.users.map(user => {
                                    return <AdminUserListItem key={user._id}
                                                              user={user}
                                                              currentUser={currentUser}
                                                              updateList={this.props.updateList}/>
                                })}
                            </div>)}
                    </AuthenticationConsumer> :
                    <div className='text-white'>
                        No users have been created.
                    </div>}
            </React.Fragment>
        );
    }
}