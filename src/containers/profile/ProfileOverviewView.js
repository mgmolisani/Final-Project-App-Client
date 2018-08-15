import React, {Component} from 'react';
import ProfileInfo from "../../components/profile/ProfileInfo";
import ContentView from "../ContentView";
import UserService from "../../services/UserServices";

export default class ProfileOverviewView
    extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
        ;
        this.updateUser = this.updateUser.bind(this);
        this.userService = UserService.instance;
    }

    findUserById() {
        const {userId} = this.props;
        this.userService
            .findUserById(userId)
            .then(user => {
                this.setState({user});
            });
    }

    updateUser(user) {
        this.userService
            .updateUser(this.props.userId, user)
            .then(user => {
                this.setState({user});
            })
    };

    componentDidMount() {
        this.findUserById();
    }

    componentDidUpdate(prevProps) {
        if (this.props.userId !== prevProps.userId) {
            this.findUserById();
        }
    }

    render() {
        return (
            <ContentView>
                <div className='d-flex flex-column'>
                    <ProfileInfo user={this.state.user}
                                 updateUser={this.updateUser}/>
                </div>
            </ContentView>
        );
    }
}

ProfileOverviewView.propTypes = {};

ProfileOverviewView.defaultProps = {};