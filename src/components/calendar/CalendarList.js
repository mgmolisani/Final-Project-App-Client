import React, {Component} from 'react';
import moment from "moment/moment";
import CalendarListDay from "./CalendarListDay";
import UserService from "../../services/UserServices";

export default class CalendarList
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: {
                hosting: [],
                following: [],
                invitedTo: []
            }
        };
        this.userService = UserService.instance;
    }

    fetchAllEventsForUser() {
        this.userService
            .findAllEventsForUser(this.props.currentUser)
            .then(events => {
                this.setState({events})
            })
    }

    componentDidMount() {
        this.fetchAllEventsForUser()
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentUser._id !== prevProps.currentUser._id) {
            this.fetchAllEventsForUser();
        }
    }

    getStartDate() {
        return moment(this.props.activeDate).startOf('month');
    }

    getEndDate() {
        return moment(this.props.activeDate).endOf('month');
    }


    getActivitiesForDate(date) {
        return this.props.events;
    }

    renderDates() {
        const startDate = this.getStartDate();
        const endDate = this.getEndDate();
        const dates = [];
        for (let loopDate = moment(startDate);
             loopDate.isSameOrBefore(endDate);
             loopDate.add(1, 'days')) {
            const currentDate = moment(loopDate);
            dates.push(currentDate);
        }
        return dates.reduce((validDates, date) => {
            const activities = this.getActivitiesForDate(date);
            if (activities.length > 0) {
                validDates.push(<CalendarListDay key={date.format()}
                                                 date={date}
                                                 events={activities}
                                                 disabled={date.month() !== this.props.activeDate.month()}/>)
            }
            return validDates;
        }, []);
    }

    render() {
        return (
            <div style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                userSelect: 'none',
                overflow: 'auto'
            }}>
                {this.renderDates()}
            </div>
        );
    }
}

CalendarList.propTypes = {};

CalendarList.defaultProps = {};