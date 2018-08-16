import React, {Component} from 'react';
import moment from "moment/moment";
import Avatar from "../user/Avatar";
import CommentService from "../../services/CommentService";

export default class EventCommentListItem
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
        this.commentService = CommentService.instance;
    }

    componentDidMount() {
        this.commentService
            .findPosterForComment(this.props.comment._id)
            .then(user => {
                console.log(user);
                this.setState({user});
            })
    }

    render() {
        const {comment} = this.props;
        const {user} = this.state;
        return (
            <div className='comment-container'>
                <div className='comment-avatar'>
                    <Avatar avatar={user.avatar}
                            username={user.username}
                            size={'4em'}/>
                </div>
                <div className='comment-content-container'>
                    <h6 className='username'>
                        {user.username}
                    </h6>
                    <h6 className='timestamp'>
                        {moment(comment.date).format('L LT')}
                    </h6>
                    <p className='content'>
                        {comment.content}
                    </p>
                </div>
            </div>
        );
    }
}

EventCommentListItem.propTypes = {};

EventCommentListItem.defaultProps = {};