import React, {Component} from 'react';
import ContentView from "./ContentView";
import NewEventMenu from "../components/new-event/NewEventMenu";
import {Route, Switch} from "react-router-dom";
import NewEventView from "./new-event/NewEventView";
import NewEventlistView from "./new-event/NewEventlistView";

export default class CreateView
    extends Component {

    render() {
        const {url} = this.props.match;
        return (
            <ContentView>
                <div className='d-flex flex-column w-100 h-100'
                     style={{
                         overflow: 'hidden'
                     }}>
                    <NewEventMenu/>
                    <Switch>
                        <Route path={`${url}/eventlist`}
                               component={NewEventlistView}/>
                        <Route path={`${url}/event`}
                               component={NewEventView}/>
                    </Switch>
                </div>
            </ContentView>
        );
    }
}