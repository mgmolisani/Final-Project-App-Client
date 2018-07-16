import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import {faTimes} from "@fortawesome/free-solid-svg-icons/index.es";

export default class ImageSearchTagsList
    extends Component {

    render() {
        return (
            <div>
                <h5>
                    Tags
                </h5>
                <ListGroup className='my-3'>
                    {this.props.tags.map(tag => {
                        return (
                            <ListGroupItem style={{wordWrap: 'break-word'}}>
                                {tag}
                                <span className='float-right'>
                                    <FontAwesomeIcon icon={faTimes}
                                                     size={'lg'}
                                                     onClick={event => {
                                                         this.props.removeSearchTag(tag);
                                                     }}/>
                                </span>
                            </ListGroupItem>
                        )
                    })}
                </ListGroup>
            </div>
        );
    }
};
