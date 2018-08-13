import React, {Component} from 'react';
import Avatar from "../user/Avatar";
import {Link} from "react-router-dom";
import {events} from "../../constants/DummyData";
import {Col, Row} from "reactstrap";
import FollowEventlistButton from "../buttons/FollowEventlistButton";

export default class EventSearchResultsItem
    extends Component {

    render() {
        const {eventlist, currentUser} = this.props;
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
                                <FollowEventlistButton eventlist={eventlist.id}
                                                       currentUser={currentUser}/>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

EventSearchResultsItem.propTypes = {};

EventSearchResultsItem.defaultProps = {};