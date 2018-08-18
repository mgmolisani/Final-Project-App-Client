import React, {Component} from 'react';
import CalendarEventsList from "./CalendarEventsList";

export default class CalendarDay
    extends Component {

    render() {
        return (
            <div className='calendar-cell d-flex flex-column'
                 style={{
                     backgroundColor: this.props.disabled ? 'black' : 'default'
                 }}>
                <h5 className='m-2'>
                    {this.props.date.date()}
                </h5>
                {!this.props.disabled && <CalendarEventsList date={this.props.date}
                                                             events={this.props.events}/>}
            </div>
        );
    }
}