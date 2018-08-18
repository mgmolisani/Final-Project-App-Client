import React, {Component} from 'react';
import FormLabel from "../form/FormLabel";
import UserSearchResultsItem from "./UserSearchResultsItem";

export default class UserSearchResults
    extends Component {

    render() {
        return (
            <React.Fragment>
                <FormLabel label={'User Search Results'}/>
                {this.props.users.length > 0 ?
                    <div className='profile-recent-list'>
                        {this.props.users.map(user => {
                            return <UserSearchResultsItem key={user._id}
                                                          user={user}/>
                        })}
                    </div> :
                    <div className='text-white'>
                        No results found for search.
                    </div>}
            </React.Fragment>
        );
    }
}

UserSearchResults.propTypes = {};

UserSearchResults.defaultProps = {};