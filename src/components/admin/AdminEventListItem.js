import React, {Component} from 'react';
import moment from "moment/moment";
import Avatar from "../user/Avatar";
import {Link} from "react-router-dom";
import {Col, Row} from "reactstrap";
import EventService from "../../services/EventService";

export default class AdminEventListItem
    extends Component {

    deleteEvent() {
        EventService.instance
            .deleteEvent(this.props.event._id)
            .then(this.props.updateList)
    }

    renderDeleteButton() {
        return <button className='btn btn-secondary'
                       type={'button'}
                       onClick={this.deleteEvent.bind(this)}>
            Delete
        </button>
    }

    render() {
        const {event} = this.props;
        return (
            <div className='comment-container'>
                <div className='comment-avatar'>
                    <Avatar avatar={event.image}
                            username={event.name}
                            size={'5em'}/>
                </div>
                <div className='comment-content-container'>
                    <Row className='h-100' noGutters>
                        <Col>
                            <h5 className='username'>
                                <Link to={`/event/${event._id}`}>
                                    {event.name}
                                </Link>
                            </h5>
                            <h6 className='timestamp'>
                                {`Start: ${moment(event.start).format('L LT')}`}
                            </h6>
                            <h6 className='timestamp'>
                                {`End: ${moment(event.end).format('L LT')}`}
                            </h6>
                            <p className='content'>
                                {event.description}
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