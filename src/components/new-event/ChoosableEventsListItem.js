import React, {Component} from 'react';
import PropTypes from 'prop-types'
import models from "../../models/models";
import moment from "moment/moment";
import Avatar from "../user/Avatar";
import {Link} from "react-router-dom";
import {Col, Row} from "reactstrap";

export default class ChoosableEventsListItem
    extends Component {

    render() {
        const {event} = this.props;

        return (
            <div className='comment-container'>
                <div className='comment-avatar'>
                    <Avatar avatar={event.images[0]}
                            username={event.name}
                            size={'4em'}/>
                </div>
                <div className='comment-content-container'>
                    <Row className='h-100' noGutters>
                        <Col>
                            <h5 className='username'>
                                <Link to={`/event/${event.id}`}>
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
                            <button type={'button'}>
                                Add
                            </button>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

ChoosableEventsListItem.propTypes = {
    event: PropTypes.shape(models.event).isRequired
};

ChoosableEventsListItem.defaultProps = {};