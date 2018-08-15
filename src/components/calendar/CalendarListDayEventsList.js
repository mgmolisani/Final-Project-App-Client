import React, {Component} from 'react';
import moment from "moment/moment";

export default class CalendarListDayEventsList
    extends Component {

    render() {
        return (
            <div>
                {this.props.events.map(event => {
                    return <div key={event.id}
                                className='p-3'>
                        <div className='d-flex justify-content-between'>
                            <h5>
                                {event.name}
                            </h5>
                            <h5>
                                {moment(event.start).format('h:mma').slice(0, -1)}
                            </h5>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div>
                                {event.description}
                            </div>
                            <div>
                                {moment(event.end).format('h:mma').slice(0, -1)}
                            </div>
                        </div>
                    </div>
                })}
            </div>
        );
    }
}

CalendarListDayEventsList.propTypes = {};

CalendarListDayEventsList.defaultProps = {};