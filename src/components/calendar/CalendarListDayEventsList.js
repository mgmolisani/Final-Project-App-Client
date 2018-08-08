import React, {Component} from 'react';
import moment from "moment/moment";

export default class CalendarListDayEventsList
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.events.map(activity => {
                    return <div key={activity.name}
                                className='p-3'>
                        <div className='d-flex justify-content-between'>
                            <h5>
                                {activity.name}
                            </h5>
                            <h5>
                                {moment(activity.start).format('h:mma').slice(0, -1)}
                            </h5>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div>
                                {activity.description}
                            </div>
                            <div>
                                {moment(activity.end).format('h:mma').slice(0, -1)}
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