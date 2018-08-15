import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import {Link} from "react-router-dom";
import Avatar from "../user/Avatar";
import FollowUserButton from "../buttons/FollowUserButton";

export default class UserSearchResultsItem
    extends Component {

    render() {
        const {user} = this.props;
        return (
            <div className='comment-container'>
                <div className='comment-avatar'>
                    <Avatar avatar={user.avatar}
                            username={user.username}
                            size={'5em'}/>
                </div>
                <div className='comment-content-container'>
                    <Row className='h-100' noGutters>
                        <Col>
                            <h5 className='username'>
                                <Link to={`/profile/${user._id}`}>
                                    {user.username}
                                </Link>
                            </h5>
                            <h6 className='timestamp'>
                                {`${user.eventlists.owns.length} Event Lists`}
                            </h6>
                        </Col>
                        <Col xs={12}
                             md={'auto'}>
                            <div className='d-flex align-items-center h-100'>
                                <FollowUserButton user={user}/>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

UserSearchResultsItem.propTypes = {};

UserSearchResultsItem.defaultProps = {};