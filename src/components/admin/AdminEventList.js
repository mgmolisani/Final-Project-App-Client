import React, {Component} from 'react';
import FormLabel from "../form/FormLabel";
import AdminEventListItem from "./AdminEventListItem";

export default class AdminEventList
    extends Component {

    render() {
        return (
            <React.Fragment>
                <FormLabel label={'All Events'}/>
                {this.props.events.length > 0 ?
                    <div className='profile-recent-list'>
                        {this.props.events.map(event => {
                            return <AdminEventListItem key={event._id}
                                                       event={event}
                                                       updateList={this.props.updateList}/>
                        })}
                    </div> :
                    <div className='text-white'>
                        No events have been created.
                    </div>}
            </React.Fragment>
        );
    }
}