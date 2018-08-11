import React, {Component} from 'react';

export default class EventCommentPanel
    extends Component {

    constructor(props) {
        super(props);
        this.state ={
            value: ''
        }
    }

    onChange(value) {
        this.setState({value});
    }

    render() {
        return (
            <div>
                {this.props.comments.map(comment => {
                    return <div key={comment.date}
                                className='p-3'>
                        {comment.content}
                    </div>
                })}
                <textarea className='w-100' style={{
                    resize: 'none'
                }}
                rows={4}
                placeholder={'Enter a comment...'}
                value={this.state.value}
                onChange={event => this.onChange(event.target.value)}/>
            </div>
        );
    }
}

EventCommentPanel.propTypes = {};

EventCommentPanel.defaultProps = {};