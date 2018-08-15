import React, {Component} from 'react';
import ContentView from "./ContentView";
import NavigationMenu from "./NavigationMenu";

export default class PageNotFoundView
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
                    <div className='d-flex flex-column h-100 justify-content-center align-items-center'>
                        <h1 className='text-white'>
                            NOPE.
                        </h1>
                    </div>
                </ContentView>
            </div>
        );
    }
}