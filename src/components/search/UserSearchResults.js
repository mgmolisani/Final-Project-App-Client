import React, {Component} from 'react';
import FormLabel from "../form/FormLabel";
import UserSearchResultsItem from "./UserSearchResultsItem";
import withLogin from "../utils/withLogin";

export default class UserSearchResults
    extends Component {

    render() {
        return (
            <React.Fragment>
                <FormLabel label={'User Search Results'}/>
                <div className='profile-recent-list'>
                    {this.props.users.map(user => {
                        return <UserSearchResultsItem key={user._id}
                                                      user={user}/>
                    })}
                </div>
            </React.Fragment>
        );
    }
}

UserSearchResults.propTypes = {};

UserSearchResults.defaultProps = {};