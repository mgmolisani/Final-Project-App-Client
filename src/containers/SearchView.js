import React, {Component} from 'react';
import ContentView from "./ContentView";
import SearchMenu from "../components/search/SearchMenu";
import SearchForm from "../components/search/SearchForm";
import NewEventView from "./new-event/NewEventView";
import {Route, Switch} from "react-router-dom";
import UserSearchResultsView from "./search/UserSearchResultsView";
import EventSearchResultsView from "./search/EventSearchResultsView";
import EventlistSearchResultsView from "./search/EventlistSearchResultsView";

export default class SearchView
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ContentView>
                <div className='d-flex flex-column w-100 h-100'
                     style={{
                         overflow: 'hidden'
                     }}>
                    <SearchMenu/>
                    <ContentView>
                        <div className='d-flex flex-column'>
                            <SearchForm/>
                            <Switch>
                                <Route path={`/search/user`}
                                       component={UserSearchResultsView}/>
                                <Route path={`/search/eventlist`}
                                       component={EventlistSearchResultsView}/>
                                <Route path={`/search/event`}
                                       component={EventSearchResultsView}/>
                            </Switch>
                        </div>
                    </ContentView>
                </div>
            </ContentView>
        );
    }
}