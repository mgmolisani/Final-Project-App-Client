import React, {Component} from 'react';

export default class EventInfo
    extends Component {

    render() {
        return (
            <div className='d-flex flex-column h-100 p-3'>
                <div style={{
                    flexBasis: '100%',
                    position: 'relative'
                }}>
                    <div className='p-5'
                         style={{
                             position: 'absolute',
                             top: 0,
                             bottom: 0,
                             left: 0,
                             right: 0
                         }}>
                        <img src={this.props.images[0]} alt={'hi'} style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                            boxShadow: '0px 0px 50px 10px rgba(0, 0, 0, 1)'
                        }}/>
                    </div>
                </div>
                <div className='text-center'
                     style={{
                         flexBasis: 'content'
                     }}>
                    <h3>
                        {this.props.name}
                    </h3>
                    <h5>
                        {this.props.description}
                    </h5>
                </div>
            </div>
        );
    }
}

EventInfo.propTypes = {};

EventInfo.defaultProps = {};