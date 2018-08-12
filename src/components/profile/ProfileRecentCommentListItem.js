import React, {Component} from 'react';
import PropTypes from 'prop-types'

export default class ProfileRecentCommentListItem
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {comment} = this.props;
        return (
            <div>
                <p>
                    {comment.content}
                </p>
            </div>
        );
    }
}

ProfileRecentCommentListItem.propTypes = {};

ProfileRecentCommentListItem.defaultProps = {};