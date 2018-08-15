import React, {Component} from 'react';
import * as CalendarViewTypes from "../constants/CalendarViewTypes";
import CalendarGrid from "../components/calendar/CalendarGrid";
import moment from "moment";
import CalendarList from "../components/calendar/CalendarList";
import CalendarMonthSelection from "../components/calendar/CalendarMonthSelection";
import CalendarTypeSelection from "../components/calendar/CalendarTypeSelection";
import * as DummyData from "../constants/DummyData";
import ContentView from "./ContentView";
import NavigationMenu from "./NavigationMenu";

export default class CalendarView
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            viewType: CalendarViewTypes.GRID,
            activeDate: moment(),
            events: DummyData.events
        };
        this.changeActiveDate = this.changeActiveDate.bind(this);
        this.changeViewType = this.changeViewType.bind(this);
    }

    changeActiveDate(date) {
        this.setState({activeDate: date});
    }

    changeViewType(viewType) {
        this.setState({viewType})
    }

    render() {
        return (
            <div className='d-flex'
                 style={{
                     position: 'absolute',
                     top: 0,
                     bottom: 0,
                     left: 0,
                     right: 0,
                     overflow: 'hidden'
                 }}>
                <NavigationMenu/>
                <ContentView>
                    <div style={{
                        flexBasis: '70%',
                        height: '100%'
                    }}>
                        <div className='h-100 position-relative text-white'
                             style={{
                                 backgroundColor: 'rgb(25, 26, 26)'
                             }}>
                            <div className='d-flex flex-column'
                                 style={{
                                     position: 'absolute',
                                     top: 0,
                                     bottom: 0,
                                     left: 0,
                                     right: 0,
                                     userSelect: 'none'
                                 }}>
                                <div className='calendar-view-header d-flex align-items-center'>
                                    <CalendarMonthSelection date={this.state.activeDate}
                                                            changeDate={this.changeActiveDate}/>
                                    <CalendarTypeSelection changeViewType={this.changeViewType}/>
                                </div>
                                <div className='position-relative'
                                     style={{
                                         flexBasis: '100%'
                                     }}>
                                    {this.state.viewType === CalendarViewTypes.GRID
                                    && <CalendarGrid activeDate={this.state.activeDate}
                                                     events={this.state.events}
                                                     changeActiveDate={this.changeActiveDate}
                                                     changeViewType={this.changeViewType}/>}
                                    {this.state.viewType === CalendarViewTypes.LIST
                                    && <CalendarList activeDate={this.state.activeDate}
                                                     events={this.state.events}
                                                     changeActiveDate={this.changeActiveDate}
                                                     changeViewType={this.changeViewType}/>}
                                </div>
                            </div>
                        </div>
                    </div>
                </ContentView>
            </div>
        );
    }
}