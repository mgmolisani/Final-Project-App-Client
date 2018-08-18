import React, {Component} from 'react';
import Avatar from "../user/Avatar";
import {Link} from "react-router-dom";
import {Col, Row} from "reactstrap";

export default class InviteGuestListItem
    extends Component {

    constructor(props) {
        super(props);
        this.toggleInvited = this.toggleInvited.bind(this);
    }

    toggleInvited(invited) {
        if (invited) {
            this.props.updateInvitedGuests(this.props.invited.filter(userId => (
                this.props.user._id !== userId)))
        } else {
            this.props.updateInvitedGuests([...this.props.invited, this.props.user._id])
        }
    }

    renderAddButton() {
        const invited = this.props.invited.some(userId => (this.props.user._id === userId));
        return <button className='btn btn-secondary'
                       type={'button'}
                       onClick={() => this.toggleInvited(invited)}>
            {invited ? 'Remove' : 'Add'}
        </button>
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
                                {this.renderAddButton()}
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}