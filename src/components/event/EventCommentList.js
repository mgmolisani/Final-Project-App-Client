import React, {Component} from 'react';
import PropTypes from 'prop-types'
import EventCommentListItem from "./EventCommentListItem";
import * as DummyData from "../../constants/DummyData";

export default class EventCommentList
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    fetchCommentsForEvent() {
        this.setState({comments: DummyData.comments});
    }

    componentDidMount() {
        this.fetchCommentsForEvent();
    }

    componentDidUpdate(prevProps) {
        if (this.props.eventId !== prevProps.eventId) {
            this.fetchCommentsForEvent();
        }
    }

    render() {
        return (
            <div>
                {this.state.comments.map(comment => {
                    return <EventCommentListItem comment={comment}/>
                })}
            </div>
        );
    }
}

EventCommentList.propTypes = {
    eventId: PropTypes.number.isRequired
};

EventCommentList.defaultProps = {};