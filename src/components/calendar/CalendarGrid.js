import React, {Component} from 'react';
import moment from "moment";
import CalendarDay from "./CalendarDay";

export default class CalendarGrid
    extends Component {

    getStartDate() {
        const activeDate = moment(this.props.activeDate);
        return activeDate.startOf('month').subtract(activeDate.day(), 'days');
    }

    getEndDate() {
        const activeDate = moment(this.props.activeDate);
        return activeDate.endOf('month').add(6 - activeDate.day(), 'days');
    }

    getEventsForDate(date) {
        return this.props.events;
    }

    renderDates() {
        const startDate = this.getStartDate();
        const endDate = this.getEndDate();
        const rows = [];
        let currentWeek = [];
        for (let loopDate = moment(startDate);
             loopDate.isSameOrBefore(endDate);
             loopDate.add(1, 'days')) {
            const currentDate = moment(loopDate);
            currentWeek.push(currentDate);
            if (currentWeek.length === 7) {
                rows.push([...currentWeek]);
                currentWeek = [];
            }
        }
        return <div className='d-flex flex-column h-100'>
            {rows.map((week, weekIndex) => {
                return <div key={weekIndex}
                            className='d-flex'
                            style={{
                                flexBasis: '100%',
                                borderTop: '1px solid lightgrey'
                            }}>
                    {week.map((date, dayIndex) => {
                        return <CalendarDay key={dayIndex}
                                            date={date}
                                            events={this.getEventsForDate(date)}
                                            disabled={date.month() !== this.props.activeDate.month()}/>
                    })}
                </div>;
            })}
        </div>
    }

    static renderDatesHeader() {
        return <div className='d-flex'>
            {moment.weekdaysShort().map(day => {
                return <div key={day}
                            className='calendar-cell'>
                    <h4 className='text-center'>
                        {day}
                    </h4>
                </div>
            })}
        </div>
    }

    render() {
        return (
            <div className='d-flex flex-column'
                 style={{
                     position: 'absolute',
                     top: 0,
                     bottom: 0,
                     left: 0,
                     right: 0,
                     userSelect: 'none'
                 }}>
                <div style={{
                    flexBasis: 'content'
                }}>
                    {CalendarGrid.renderDatesHeader()}
                </div>
                <div style={{
                    flexBasis: '100%'
                }}>
                    {this.renderDates()}
                </div>
            </div>
        );
    }
}

CalendarGrid.propTypes = {};

CalendarGrid.defaultProps = {};