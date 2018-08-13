import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Avatar from "../user/Avatar";
import models from "../../models/models";
import {users} from "../../constants/DummyData";
import {Link} from "react-router-dom";
import moment from "moment";

export default class EventCommentListItem
    extends Component {

    render() {
        const {/*postedBy, */content, date} = this.props.comment;
        const postedBy = users[0];

        return (
            <div className='comment-container'>
                <div className='comment-avatar'>
                    <Avatar avatar={postedBy.avatar}
                            username={postedBy.username}
                            size={'4em'}/>
                </div>
                <div className='comment-content-container'>
                    <h5 className='username'>
                        <Link to={`/profile/${postedBy.id}`}>
                            {postedBy.username}
                        </Link>
                    </h5>
                    <h6 className='timestamp'>
                        {moment(date).format('L LT')}
                    </h6>
                    <p className='content'>
                        {content}
                    </p>
                </div>
            </div>
        );
    }
}

EventCommentListItem.propTypes = {
    comment: PropTypes.shape(models.comment).isRequired
};

EventCommentListItem.defaultProps = {};