import React, {Component} from 'react';
import EventInfo from "../components/event/EventInfo";
import EventMenu from "../components/event/EventMenu";
import EventSidebarActivityList from "../components/event/EventActivityList";
import EventCommentPanel from "../components/event/EventCommentPanel";
import * as DummyData from "../constants/DummyData";

export default class EventView
    extends Component {

    constructor(props) {
        super(props);
        this.state ={
            event: {
                name: null,
                description: null,
                images: [],
                activities: [],
                comments:[]
            }
        }
    }

    updateEvent(eventId) {
        const e = DummyData.events.find(event => {
            console.log(event.id);
            return event.id === Number.parseInt(eventId);
        });
        this.setState({event: e})
    }

    componentDidMount() {
        this.updateEvent(this.props.match.params.eventId)
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.eventId !== prevProps.match.params.eventId) {
            this.updateEvent(this.props.match.params.eventId)
        }
    }

    render() {
        return (
            <div className='h-100 text-white event-sidebar d-flex'
                 style={{
                     backgroundColor: 'rgb(15, 16, 16)'
                 }}>
                <div className='h-100 position-relative w-50'>
                    <div className='d-flex flex-column'
                         style={{
                             position: 'absolute',
                             top: 0,
                             bottom: 0,
                             left: 0,
                             right: 0,
                             userSelect: 'none'
                         }}>
                        <EventCommentPanel eventId={this.state.event.id}/>
                        <div style={{
                            flexBasis: '70%'
                        }}>
                            <EventInfo name={this.state.event.name}
                                       description={this.state.event.description}
                                       images={this.state.event.images}/>
                        </div>
                        <div style={{
                            flexBasis: '30%',
                            overflow: 'auto'
                        }}>
                            <EventSidebarActivityList activities={this.state.event.activities}/>
                        </div>
                        <div style={{
                            flexBasis: 'content'
                        }}>
                            <EventMenu/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}