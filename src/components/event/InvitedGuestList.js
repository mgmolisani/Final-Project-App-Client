import React, {Component} from 'react';
import withLogin from "../utils/withLogin";
import InvitedGuessListItem from "./InvitedGuessListItem";

class InvitedGuestList
    extends Component {

    render() {
        return (
            <div className='profile-recent-list'>
                {this.props.users.map(user => {
                    return <InvitedGuessListItem key={user._id}
                                                 user={user}
                                                 currentUser={this.props.currentUser}/>
                })}
            </div>
        );
    }
}

export default withLogin(InvitedGuestList);

InvitedGuestList.propTypes = {};

InvitedGuestList.defaultProps = {};