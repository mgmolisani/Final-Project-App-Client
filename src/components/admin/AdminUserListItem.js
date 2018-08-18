import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import {Link} from "react-router-dom";
import Avatar from "../user/Avatar";
import UserService from "../../services/UserServices";

export default class AdminUserListItem
    extends Component {

    deleteUser() {
        console.log(this.props.user._id);
        UserService.instance
            .deleteUser(this.props.user._id)
            .then(this.props.updateList)
    }

    renderDeleteButton() {
        if (this.props.user._id !== this.props.currentUser._id) {
            return <button className='btn btn-secondary'
                           type={'button'}
                           onClick={this.deleteUser.bind(this)}>
                Delete
            </button>
        }
    }

    render() {
        const {user} = this.props;
        return (
            <div className='comment-container'>
                <div className='comment-avatar'>
                    <Avatar avatar={user.avatar}
                            username={user.username}
                            size={'5em'}/>
                </div>
                <div className='comment-content-container'>
                    <Row className='h-100' noGutters>
                        <Col>
                            <h5 className='username'>
                                <Link to={`/profile/${user._id}`}>
                                    {user.username}
                                </Link>
                            </h5>
                            <h6 className='timestamp'>
                                {`${user.events.following.length} Events`}
                            </h6>
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