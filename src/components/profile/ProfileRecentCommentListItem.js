import React, {Component} from 'react';
import PropTypes from 'prop-types'
import models from "../../models/models";
import {events} from "../../constants/DummyData";
import moment from "moment/moment";
import Avatar from "../user/Avatar";
import {Link} from "react-router-dom";

export default class ProfileRecentCommentListItem
    extends Component {

    render() {
        const {/*forEvent, */content, date} = this.props.comment;
        const forEvent = events[0];

        return (
            <div className='comment-container'>
                <div className='comment-avatar'>
                    <Avatar avatar={forEvent.images[0]}
                            username={forEvent.name}
                            size={'4em'}/>
                </div>
                <div className='comment-content-container'>
                    <h5 className='username'>
                        <Link to={`/event/${forEvent.id}`}>
                            {forEvent.name}
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

ProfileRecentCommentListItem.propTypes = {
    comment: PropTypes.shape(models.comment).isRequired
};

ProfileRecentCommentListItem.defaultProps = {};