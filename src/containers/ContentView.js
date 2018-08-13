import React, {Component} from 'react';

export default class ContentView
    extends Component {

    render() {
        return (
            <div className='content-wrapper'>
                <div className='content-container'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

ContentView.propTypes = {};

ContentView.defaultProps = {};