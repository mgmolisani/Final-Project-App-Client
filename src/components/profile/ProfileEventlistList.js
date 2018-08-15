import React, {Component} from 'react';
import ProfileEventlistListItem from "./ProfileEventlistListItem";
import withLogin from "../utils/withLogin";

class ProfileEventlistList
    extends Component {

    render() {
        const {eventlists, currentUser} = this.props;
        return (
            <div className='profile-recent-list'>
                {eventlists.map(eventlist => {
                    return <ProfileEventlistListItem key={eventlist._id}
                                                     eventlist={eventlist}
                                                     currentUser={currentUser}/>
                })}
            </div>
        );
    }
}

export default withLogin(ProfileEventlistList);

ProfileEventlistList.propTypes = {};

ProfileEventlistList.defaultProps = {};