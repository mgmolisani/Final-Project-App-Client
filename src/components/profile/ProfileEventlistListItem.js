import React, {Component} from 'react';
import PropTypes from 'prop-types'
import models from "../../models/models";
import ProfileConnectionsListItem from "./ProfileConnectionsListItem";
import Avatar from "../user/Avatar";
import {Col, Row} from "reactstrap";
import {Link} from "react-router-dom";
import {events} from "../../constants/DummyData";

export default class ProfileEventlistListItem
    extends Component {

    renderFollowButton() {
        const {eventlist, currentUser} = this.props;
        return (
            currentUser ?
                <button type={'button'}
                        style={{minWidth: 'fit-content'}}>
                    {currentUser.eventlists.owns.includes(eventlist.id) ||
                        currentUser.eventlists.follows.includes(eventlist.id) ?
                        'Unfollow' :
                        'Follow'
                    }
                </button> :
                null
        )
    }

    render() {
        const {eventlist} = this.props;
        return (
            <div className='comment-container'>
                <div className='comment-avatar'>
                    <Avatar avatar={events[0].images[0]}
                            username={eventlist.name}
                            size={'5em'}/>
                </div>
                <div className='comment-content-container'>
                    <Row className='h-100' noGutters>
                        <Col>
                            <h5 className='username'>
                                <Link to={`/eventlist/${eventlist.id}`}>
                                    {eventlist.name}
                                </Link>
                            </h5>
                            <h6 className='timestamp'>
                                {`${eventlist.followers.length} Followers`}
                            </h6>
                        </Col>
                        <Col xs={12}
                             md={'auto'}>
                            <div className='d-flex align-items-center h-100'>
                                {this.renderFollowButton()}
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

ProfileConnectionsListItem.propTypes = {
    user: PropTypes.shape(models.user).isRequired,
    currentUser: PropTypes.shape(models.user).isRequired
};

ProfileEventlistListItem.defaultProps = {};