import React, {Component} from 'react';
import ScrollBarThumb from "./ScrollBarThumb";

export default class ScrollBarTrack
    extends Component {

    constructor(props) {
        super(props);
        this.trackRef = null;

        this.getThumbWidth = this.getThumbWidth.bind(this);
        this.getThumbScroll = this.getThumbScroll.bind(this);
    }

    getThumbWidth() {
        if (this.trackRef) {
            return this.trackRef.offsetWidth * this.props.percentWidth;
        }
        return 0;
    }

    getThumbScroll() {
        if (this.trackRef) {
            return (this.trackRef.offsetWidth - this.getThumbWidth()) * this.props.scrollPercent;
        }
        return 0;
    }

    render() {
        return (
            <div ref={node => this.trackRef = node}
                 style={{
                     backgroundColor: 'green',
                     height: '100%',
                     width: '100%',
                     position: 'relative'
                 }}>
                <ScrollBarThumb width={this.getThumbWidth()}
                                scroll={this.getThumbScroll()}/>
            </div>
        )
    }
}
