import React, {Component} from 'react';
import ContentView from "./ContentView";
import SearchMenu from "../components/search/SearchMenu";
import SearchForm from "../components/search/SearchForm";
import {Route, Switch} from "react-router-dom";
import UserSearchResultsView from "./search/UserSearchResultsView";
import EventSearchResultsView from "./search/EventSearchResultsView";
import EventlistSearchResultsView from "./search/EventlistSearchResultsView";
import NavigationMenu from "./NavigationMenu";

export default class SearchView
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
                <ContentView>
                    <div className='d-flex flex-column w-100 h-100'
                         style={{
                             overflow: 'hidden'
                         }}>
                        <SearchMenu/>
                        <ContentView>
                            <div className='d-flex flex-column'>
                                <div className='form-wrapper'>
                                    <form className='form-container'>
                                        <SearchForm/>
                                        <Switch>
                                            <Route path={`/search/user`}
                                                   component={UserSearchResultsView}/>
                                            <Route path={`/search/eventlist`}
                                                   component={EventlistSearchResultsView}/>
                                            <Route path={`/search/event`}
                                                   component={EventSearchResultsView}/>
                                        </Switch>
                                    </form>
                                </div>
                            </div>
                        </ContentView>
                    </div>
                </ContentView>
            </div>
        );
    }
}