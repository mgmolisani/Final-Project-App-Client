import React, {Component} from 'react';
import PropTypes from 'prop-types';
import models from "../../models/models";
import Avatar from "../user/Avatar";
import {Link} from "react-router-dom";
import {Col, Row} from "reactstrap";

export default class ProfileConnectionsListItem
    extends Component {

    constructor(props) {
        super(props);
    }

    renderFollowButton() {
        const {user, currentUser} = this.props;
        return (
            currentUser && user.id !== currentUser.id ?
                <button type={'button'}
                style={{minWidth: 'fit-content'}}>
                    {currentUser.connections.following.includes(user.id) ?
                        'Unfollow' :
                        'Follow'
                    }
                </button> :
                null
        )
    }

    render() {
        const {user} = this.props;
        return (
            <div className='comment-container'>
                <div className='comment-avatar'>
                    <Avatar avatar={user.avatar}
                            username={user.username}
                            size={'7em'}/>
                </div>
                <div className='comment-content-container'>
                    <Row noGutters>
                        <Col xs={11}>
                            <h5 className='username'>
                                <Link to={`/profile/${user.id}`}>
                                    {user.username}
                                </Link>
                            </h5>
                            <h6 className='timestamp'>
                                {`${user.connections.followers.length} Followers`}
                            </h6>
                        </Col>
                        <Col md={1} >
                            {this.renderFollowButton()}
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

ProfileConnectionsListItem.propTypes = {
    user: PropTypes.shape(models.user).isRequired,
    currentUser: PropTypes.shape(models.user).isRequired
};

ProfileConnectionsListItem.defaultProps = {};