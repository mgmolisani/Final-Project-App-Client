import React, {Component} from 'react';
import {connect} from "react-redux";
import moment from "moment/moment";
import * as CalendarViewTypes from "../constants/CalendarViewTypes";
import CalendarList from "../components/calendar/CalendarList";
import CalendarGrid from "../components/calendar/CalendarGrid";
import CalendarTypeSelection from "../components/calendar/CalendarTypeSelection";
import CalendarMonthSelection from "../components/calendar/CalendarMonthSelection";
import {fetchAllEventsForUser} from "../actions/calendar";

function mapStateToProps(state, ownProps) {
    return {
        events: state.calendar.events,
        isFetching: state.calendar.isFetching
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        fetchAllEventsForUser: () => {
            dispatch(fetchAllEventsForUser())
        }
    }
}

class Calendar
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            viewType: CalendarViewTypes.GRID,
            activeDate: moment(),
        };
        this.changeActiveDate = this.changeActiveDate.bind(this);
        this.changeViewType = this.changeViewType.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllEventsForUser();
    }

    changeActiveDate(date) {
        this.setState({activeDate: date});
    }

    changeViewType(viewType) {
        this.setState({viewType})
    }

    render() {
        return (
            <div className='container h-100 position-relative'>
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
                        <CalendarMonthSelection date={this.state.activeDate}
                                                changeDate={this.changeActiveDate}/>
                    </div>
                    <div style={{
                        flexBasis: 'content'
                    }}>
                        <CalendarTypeSelection changeViewType={this.changeViewType}/>
                    </div>
                    <div className='position-relative'
                         style={{
                             flexBasis: '100%'
                         }}>
                        {this.state.viewType === CalendarViewTypes.GRID
                        && <CalendarGrid activeDate={this.state.activeDate}
                                         events={this.props.events}
                                         changeActiveDate={this.changeActiveDate}
                                         changeViewType={this.changeViewType}/>}
                        {this.state.viewType === CalendarViewTypes.LIST
                        && <CalendarList activeDate={this.state.activeDate}
                                         events={this.props.events}
                                         changeActiveDate={this.changeActiveDate}
                                         changeViewType={this.changeViewType}/>}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calendar);
