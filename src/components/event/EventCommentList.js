import React, {Component} from 'react';
import PropTypes from 'prop-types'
import EventCommentListItem from "./EventCommentListItem";
import * as DummyData from "../../constants/DummyData";
import moment from "moment";

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

    sortedCommentsByDate() {
        let sortedComments = [...this.state.comments];
        sortedComments.sort((a, b) => {
            return moment(a.date).isBefore(moment(b.date)) ?
                -1 :
                1
        });
        return sortedComments
    }

    render() {
        return (
            <div>
                {this.sortedCommentsByDate().map(comment => {
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