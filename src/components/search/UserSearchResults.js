import React, {Component} from 'react';
import FormLabel from "../form/FormLabel";
import UserSearchResultsItem from "./UserSearchResultsItem";
import withLogin from "../utils/withLogin";

class UserSearchResults
    extends Component {

    render() {
        return (
            <React.Fragment>
                <FormLabel label={'User Search Results'}/>
                <div className='profile-recent-list'>
                    {this.props.users.map(user => {
                        return <UserSearchResultsItem key={user.id}
                                                      user={user}
                                                      currentUser={this.props.currentUser}/>
                    })}
                </div>
            </React.Fragment>
        );
    }
}

export default withLogin(UserSearchResults);

UserSearchResults.propTypes = {};

UserSearchResults.defaultProps = {};