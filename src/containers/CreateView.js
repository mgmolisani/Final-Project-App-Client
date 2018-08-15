import React, {Component} from 'react';
import ContentView from "./ContentView";
import NewEventMenu from "../components/new-event/NewEventMenu";
import {Route, Switch} from "react-router-dom";
import NewEventView from "./new-event/NewEventView";
import NewEventlistView from "./new-event/NewEventlistView";
import NavigationMenu from "./NavigationMenu";

export default class CreateView
    extends Component {

    render() {
        const {url} = this.props.match;
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
            </div>
        );
    }
}