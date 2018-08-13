import React, {Component} from 'react';
import NavigationMenu from "./NavigationMenu";
import {Route, Switch} from "react-router-dom";
import EventListGridView from "./EventListGridView";
import ProfileView from "./ProfileView";
import SearchView from "./SearchView";
import PageNotFoundView from "./PageNotFoundView";
import HomeView from "./HomeView";
import CreateView from "./CreateView";
import CalendarView from "./CalendarView";
import LoginView from "./LoginView";
import RegisterView from "./RegisterView";

export default class App
    extends Component {

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
                <Switch>
                    <Route path={'/'}
                           exact
                           component={HomeView}/>
                    <Route path={'/calendar'}
                           component={CalendarView}/>
                    <Route path={'/eventlist'}
                           component={EventListGridView}/>
                    <Route path={'/search'}
                           component={SearchView}/>
                    <Route path={'/new'}
                           component={CreateView}/>
                    <Route path={'/profile/:userId'}
                           component={ProfileView}/>
                    <Route path={'/login'}
                           component={LoginView}/>
                    <Route path={'/register'}
                           component={RegisterView}/>
                    <Route component={PageNotFoundView}/>
                </Switch>
            </div>
        );
    }
}
