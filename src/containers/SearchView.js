import React, {Component} from 'react';
import ContentView from "./ContentView";
import SearchMenu from "../components/search/SearchMenu";
import SearchForm from "../components/search/SearchForm";
import {Route, Switch} from "react-router-dom";
import UserSearchResultsView from "./search/UserSearchResultsView";
import EventSearchResultsView from "./search/EventSearchResultsView";

export default class SearchView
    extends Component {

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
                            <div className='form-wrapper'>
                                <div className='form-container'>
                                    <SearchForm/>
                                    <Switch>
                                        <Route path={`/search/user`}
                                               component={UserSearchResultsView}/>
                                        <Route path={`/search/event`}
                                               component={EventSearchResultsView}/>
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </ContentView>
                </div>
            </ContentView>
        );
    }
}