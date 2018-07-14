import React, {Component} from 'react';

export default class ScrollBar
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            maxScroll: 0,
            bar: {
                width: 0
            },
            track: {},
            thumb: {
                width: 0,
                scroll: 0
            }

        };

        this.scrollBarRef = null;
        this.scrollBarTrackRef = null;
        this.scrollBarThumbRef = null;
    }

    render() {
        return (
            <div ref={node => this.scrollBarRef = node}
                 style={{
                     backgroundColor: 'red',
                     height: 20,
                     display: 'flex'
                 }}>
                <div style={{
                    backgroundColor: 'blue',
                    width: 20,
                    height: '100%'
                }}/>
                <div ref={node => this.scrollBarTrackRef = node}
                     style={{
                         backgroundColor: 'green',
                         height: '100%',
                         width: '100%'
                     }}>
                    <div ref={node => this.scrollBarThumbRef = node}
                         style={{
                             backgroundColor: 'yellow',
                             height: '100%',
                             width: this.state.scrollBarThumbWidth
                         }}>
                    </div>
                </div>
                <div style={{
                    backgroundColor: 'blue',
                    width: 20,
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <i className='fa fa-chevron-right'
                       style={{color: 'white'}}/>
                </div>
            </div>
        )
    }
}
