import React, {Component} from 'react';
import moment from "moment/moment";
import Avatar from "../user/Avatar";
import CommentService from "../../services/CommentService";
import {Col, Row} from "reactstrap";
import {Link} from "react-router-dom";

export default class EventCommentListItem
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
        this.commentService = CommentService.instance;
        this.deleteComment = this.deleteComment.bind(this);
    }

    componentDidMount() {
        this.commentService
            .findPosterForComment(this.props.comment._id)
            .then(user => {
                this.setState({user});
            })
    }

    deleteComment() {
        this.commentService
            .deleteComment(this.props.comment._id)
            .then(() => this.props.callback())
    }

    renderDeleteButton() {
        if (this.state.user._id === this.props.currentUser._id || this.props.currentUser.role === 'Administrator') {
            return <button className='btn btn-secondary'
                           type={'button'}
                           onClick={this.deleteComment}>
                Delete
            </button>
        }
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
                    <Row className='h-100' noGutters>
                        <Col>
                            <h6 className='username'>
                                <Link to={`/profile/${user._id}`}>
                                    {user.username}
                                </Link>
                            </h6>
                            <h6 className='timestamp'>
                                {moment(comment.date).format('L LT')}
                            </h6>
                            <p className='content'>
                                {comment.content}
                            </p>
                        </Col>
                        <Col xs={12}
                             md={'auto'}>
                            <div className='d-flex align-items-center h-100'>
                                {this.renderDeleteButton()}
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}