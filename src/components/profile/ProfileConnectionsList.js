import React, {Component} from 'react';
import PropTypes from 'prop-types'
import withLogin from "../utils/withLogin";
import ProfileConnectionsListItem from "./ProfileConnectionsListItem";

class ProfileConnectionsList
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {users, currentUser} = this.props;
        return (
            <div>
                {users.map(user => {
                    return <ProfileConnectionsListItem user={user}
                                                       currentUser={currentUser}/>
                })};
            </div>
        );
    }
}

export default withLogin(ProfileConnectionsList);

ProfileConnectionsList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.number).isRequired
};

ProfileConnectionsList.defaultProps = {};