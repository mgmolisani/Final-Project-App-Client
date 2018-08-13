import React, {Component} from 'react';
import PropTypes from 'prop-types'
import ProfileEventlistListItem from "./ProfileEventlistListItem";
import models from "../../containers/EventView";
import withLogin from "../utils/withLogin";

class ProfileEventlistList
    extends Component {

    render() {
        const {eventlists, currentUser} = this.props;
        return (
            <div className='profile-recent-list'>
                {eventlists.map(eventlist => {
                    return <ProfileEventlistListItem key={eventlist.id}
                                                     eventlist={eventlist}
                                                     currentUser={currentUser}/>
                })}
            </div>
        );
    }
}

export default withLogin(ProfileEventlistList);

ProfileEventlistList.propTypes = {
    eventlists: PropTypes.arrayOf(PropTypes.shape(models.event)).isRequired
};

ProfileEventlistList.defaultProps = {};