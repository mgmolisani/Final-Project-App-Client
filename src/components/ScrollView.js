import React, {Component} from 'react';
import ScrollBarTrack from "./ScrollBarTrack";

export default class ScrollView
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contentPercent: 1,
            scrollPercent: 0,
            maxContentScroll: 0
        };

        this.scrollBoxRef = null;
        this.contentBoxRef = null;

        this.onWheelHandler = this.onWheelHandler.bind(this);
        this.updateScrollableArea = this.updateScrollableArea.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateScrollableArea)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateScrollableArea);
    }

    componentDidUpdate(prevProps, prevState) {
        const maxContentScroll = this.contentBoxRef.scrollWidth - this.scrollBoxRef.offsetWidth;
        if (maxContentScroll !== prevState.maxContentScroll) {
            this.setState({maxContentScroll: this.contentBoxRef.scrollWidth - this.scrollBoxRef.offsetWidth});
            this.updateScrollableArea()
        }
    }

    refsAreSet() {
        return this.scrollBoxRef && this.contentBoxRef;
    }

    onWheelHandler(event) {
        if (this.contentBoxRef && this.scrollBoxRef) {
            const deltaX = -event.deltaX;
            const maxScroll = this.state.maxContentScroll;

            let scroll = this.state.scrollPercent * maxScroll + deltaX;

            if (scroll < 0) {
                scroll = 0;
            } else if (scroll > maxScroll) {
                scroll = maxScroll;
            }

            this.setState({scrollPercent: scroll / maxScroll || 0});
        }
    }

    updateScrollableArea() {
        if (this.refsAreSet()) {
            this.setState({
                contentPercent: this.scrollBoxRef.offsetWidth / this.contentBoxRef.scrollWidth
            });
        }
    }

    renderScrollBar() {
        if (this.props.visible
            && this.scrollBoxRef
            && this.contentBoxRef
            && this.scrollBoxRef.offsetWidth < this.contentBoxRef.scrollWidth) {
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
                    <ScrollBarTrack percentWidth={this.state.contentPercent}
                                    scrollPercentage={this.state.scrollPercent}/>
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

    render() {
        return (
            <div>
                <div ref={node => this.scrollBoxRef = node}
                     style={{
                         width: '100%',
                         overflowX: 'hidden',
                         position: 'relative'
                     }}
                     onWheel={this.onWheelHandler}>
                    <div ref={node => this.contentBoxRef = node}
                         style={{
                             position: 'relative',
                             left: -this.state.maxContentScroll * this.state.scrollPercent,
                             overflowX: 'visible',
                             transition: 'left 0.5s',
                             transitionTimingFunction: 'ease'
                         }}>
                        {this.props.children}
                    </div>
                    {this.renderScrollBar()}
                </div>
            </div>
        );
    }
}
