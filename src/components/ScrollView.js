import React, {Component} from 'react';

export default class ScrollView
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scrollX: 0,
            scrollBarThumbWidth: 0,
            scrollLeft: 0
        };

        this.scrollBoxRef = null;
        this.contentRef = null;
        this.scrollBarRef = null;
        this.scrollBarTrackRef = null;
        this.scrollBarThumbRef = null;

        this.onWheelHandler = this.onWheelHandler.bind(this);
    }

    onWheelHandler(event) {
        if (this.contentRef && this.scrollBoxRef) {
            const deltaX = -event.deltaX;
            let scrollLeft = this.state.scrollLeft + deltaX;
            let maxScrollLeft = this.contentRef.scrollWidth - this.scrollBoxRef.offsetWidth;
            if (scrollLeft < 0) {
                scrollLeft = 0;
            } else if (scrollLeft > maxScrollLeft) {
                scrollLeft = maxScrollLeft;
            }
            this.setState({scrollLeft});
        }
    }

    getScrollPercentage() {
        return this.state.scrollLeft / (this.contentRef.scrollWidth - this.scrollBoxRef.offsetWidth);
    }

    setScrollState() {
        if (this.scrollBoxRef && this.contentRef && this.scrollBarTrackRef) {
            this.setState({
                scrollBarThumbWidth:
                this.scrollBoxRef.offsetWidth
                / this.contentRef.scrollWidth
                * this.scrollBarTrackRef.offsetWidth
            });
        }
    }

    render() {
        return (
            <div>
                <div ref={node => this.scrollBoxRef = node}
                     style={{
                         width: '100%',
                         overflowX: 'hidden',
                         position: 'relative'
                     }}
                     onWheel={this.onWheelHandler}
                     onTouchMove={this.onWheelHandler}>
                    <div ref={node => this.contentRef = node}
                         style={{
                             position: 'relative',
                             left: -this.state.scrollLeft,
                             overflowX: 'visible',
                             transition: 'left 0.5s',
                             transitionTimingFunction: 'ease'
                         }}>
                        {this.props.children}
                    </div>

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
                </div>
            </div>
        );
    }
}
