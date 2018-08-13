import React, {Component} from 'react';
import {Link} from "react-router-dom";
import withLogin from "../utils/withLogin";

class ProfileIcon
    extends Component {

    render() {
        return (
            <div className='profile-icon-container'>
                <div className='profile-icon'>
                    <Link to={`/profile/${this.props.currentUser.id}`}>
                        <img src={'https://picsum.photos/200/300'} alt={''}/>
                    </Link>
                </div>
            </div>
        );
    }
}

export default withLogin(ProfileIcon);

ProfileIcon.propTypes = {};

ProfileIcon.defaultProps = {};