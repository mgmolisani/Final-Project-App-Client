import React, {Component} from 'react';
import EventCommentListItem from "./EventCommentListItem";
import {withRouter} from "react-router-dom";

class EventCommentList
    extends Component {

    render() {
        return (
            <div className='profile-recent-list'>
                {this.props.comments.map(comment => {
                    return <EventCommentListItem key={comment._id}
                                                 comment={comment}/>
                })}
            </div>
        );
    }
}

export default withRouter(EventCommentList);

EventCommentList.propTypes = {};

EventCommentList.defaultProps = {};