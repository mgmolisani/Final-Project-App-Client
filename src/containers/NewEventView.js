import React, {Component} from 'react';
import ContentView from "./ContentView";
import NewEventForm from "../components/event/NewEventForm";
import {AuthenticationConsumer} from "./authentication/AuthenticationContext";

export default class EventView
    extends Component {

    render() {
        return (
            <ContentView>
                <div className='d-flex flex-column w-100 h-100'
                     style={{
                         overflow: 'hidden'
                     }}>
                    <ContentView>
                        <div className='d-flex flex-column'>
                            <div className='form-wrapper'>
                                <form className='form-container pt-4'>
                                    <AuthenticationConsumer>
                                        {({currentUser, updateCurrentUser}) => (
                                            <NewEventForm currentUser={currentUser}
                                                          updateCurrentUser={updateCurrentUser}/>
                                        )}
                                    </AuthenticationConsumer>
                                </form>
                            </div>
                        </div>
                    </ContentView>
                </div>
            </ContentView>
        );
    }
}