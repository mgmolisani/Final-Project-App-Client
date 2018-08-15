import React, {Component} from 'react';
import moment from "moment/moment";
import Avatar from "../user/Avatar";
import {Link} from "react-router-dom";

export default class EventSearchResultsItem
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
                </div>
            </div>
        );
    }
}

EventSearchResultsItem.propTypes = {};

EventSearchResultsItem.defaultProps = {};