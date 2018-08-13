import React, {Component} from 'react';
import EventListCard from "./EventListCard";

export default class EventListGrid
    extends Component {

    render() {
        return (
            <div style={{
                backgroundColor: 'black'
            }}>
                <div>
                    <div className='d-flex flex-wrap text-white'>
                        {this.props.eventlists.map(eventlist => {
                            return <EventListCard eventlist={eventlist}/>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

EventListGrid.propTypes = {};

EventListGrid.defaultProps = {};