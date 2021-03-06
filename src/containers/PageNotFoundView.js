import React, {Component} from 'react';
import ContentView from "./ContentView";

export default class PageNotFoundView
    extends Component {

    render() {
        return (
            <ContentView>
                <div className='d-flex flex-column h-100 justify-content-center align-items-center'>
                    <h1 className='text-white'>
                        NOPE.
                    </h1>
                </div>
            </ContentView>
        );
    }
}