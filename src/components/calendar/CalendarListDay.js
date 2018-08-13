import React, {Component} from 'react';
import CalendarListDayEventsList from "./CalendarListDayEventsList";

export default class CalendarListDay
    extends Component {

    render() {
        return (
            <div className='calendar-list-day d-flex flex-nowrap'>
                <div className='flex-grow-0'
                     style={{
                         width: '20%'
                     }}>
                    <h5 className='p-3 d-inline-block'>
                        {this.props.date.format('ddd D MMM')}
                    </h5>
                </div>
                <div className='flex-grow-1'
                     style={{
                         width: '80%'
                     }}>
                    <CalendarListDayEventsList date={this.props.date}
                                               events={this.props.events}/>
                </div>
            </div>
        );
    }
}

CalendarListDay.propTypes = {};

CalendarListDay.defaultProps = {};