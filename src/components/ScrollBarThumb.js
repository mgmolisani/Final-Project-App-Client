import React, {Component} from 'react';

export default class ScrollBarThumb
    extends Component {

    constructor(props) {
        super(props);
        this.scrollBarThumbRef = null;
    }

    render() {
        return (
            <div ref={node => this.scrollBarThumbRef = node}
                 style={{
                     backgroundColor: 'yellow',
                     height: '100%',
                     width: this.props.width,
                     position: 'relative',
                     left: this.props.scroll
                 }}>
            </div>
        )
    }
}
