import React, {Component} from 'react';
import EventCommentListItem from "./EventCommentListItem";
import moment from "moment/moment";
import EventService from "../../services/EventService";
import FormTextArea from "../form/FormTextArea";
import CommentService from "../../services/CommentService";
import FormLabel from "../form/FormLabel";

export default class EventCommentList
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            commentContent: ''
        };
        this.eventSerivice = EventService.instance;
        this.commentService = CommentService.instance;
        this.fetchCommentsForEvent = this.fetchCommentsForEvent.bind(this);
        this.createComment = this.createComment.bind(this);
        this.updateCommentContent = this.updateCommentContent.bind(this);
    }

    fetchCommentsForEvent() {
        if (this.props.eventId) {
            this.eventSerivice
                .findEventById(this.props.eventId)
                .then(event => {
                    this.setState({comments: event.comments});
                })
        }
    }

    updateCommentContent(commentContent) {
        this.setState({commentContent})
    }

    createComment() {
        this.commentService
            .createComment({
                content: {
                    content: this.state.commentContent,
                    date: moment().toArray().slice(0, 5)
                },
                by: this.props.currentUser._id,
                for: this.props.eventId
            })
            .then(() => {
                this.fetchCommentsForEvent();
                this.setState({commentContent: ''});
            })
    }


    componentDidMount() {
        this.fetchCommentsForEvent();
    }

    componentDidUpdate(prevProps) {
        if (this.props.eventId !== prevProps.eventId) {
            this.fetchCommentsForEvent();
        }
    }

    sortComments() {
        let sortedComments = [...this.state.comments];
        sortedComments.sort((a, b) => {
            return moment(a.date).isBefore(moment(b.date)) ?
                -1 :
                1
        });
        return sortedComments;
    }

    render() {
        return (
            <div>
                <FormLabel label={'Comments'}/>
                {this.sortComments().map(comment => {
                    return <EventCommentListItem key={comment._id}
                                                 comment={comment}
                                                 eventId={this.props.eventId}
                                                 currentUser={this.props.currentUser}
                                                 callback={this.fetchCommentsForEvent}/>
                })}
                {this.props.currentUser._id ?
                    <React.Fragment>
                        <FormTextArea label={'New Comment'}
                                      value={this.state.commentContent}
                                      onChange={value => this.updateCommentContent(value)}/>
                        <div className='d-flex justify-content-center my-3'>
                            <button className='btn btn-secondary'
                                    type={'button'}
                                    onClick={this.createComment}>
                                Add Comment
                            </button>
                        </div>
                    </React.Fragment> :
                    null}
            </div>
        );
    }
}