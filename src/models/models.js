import PropTypes from "prop-types";
import {userRoles} from "../constants/enumerations";

const models = {
    comment: {
        id: PropTypes.number.isRequired,
        postedBy: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired,
        date: PropTypes.arrayOf(PropTypes.number).isRequired
    },
    user: {
        id: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        role: PropTypes.oneOf([...userRoles]).isRequired,
        address: PropTypes.string,
        phoneNumber: PropTypes.string,
        dateOfBirth: [1994, 6, 30],
        email: PropTypes.arrayOf(PropTypes.number),
        connections: PropTypes.object.isRequired,
        createdEventsEventlistId: PropTypes.number.isRequired,
        followedEventsEventlistId: PropTypes.number.isRequired,
        eventlists: PropTypes.object.isRequired,
        avatar: PropTypes.string.isRequired
    }

};

export default models;