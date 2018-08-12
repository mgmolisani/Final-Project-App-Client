import PropTypes from "prop-types";

const models = {
    comment: {
        id: PropTypes.number.isRequired,
        postedBy: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired,
        date: PropTypes.arrayOf(PropTypes.number).isRequired
    }
};

export default models;