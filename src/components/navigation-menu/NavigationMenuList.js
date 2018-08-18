import React, {Component} from 'react';
import NavigationMenuListItem from "./NavigationMenuListItem";

export default class NavigationMenuList
    extends Component {

    render() {
        const {currentUser} = this.props;
        return (
            <ul className='text-secondary text-center'>
                <NavigationMenuListItem to={'/search/user'}
                                        isActive={(match, location) => {
                                            return location.pathname.startsWith('/search');
                                        }}
                                        icon={'search'}
                                        alerts={0}/>
                {currentUser.role && <React.Fragment>
                    <NavigationMenuListItem to={'/calendar'}
                                            icon={['far', 'calendar']}
                                            alerts={0}/>
                    <NavigationMenuListItem to={'/event/new'}
                                            icon={'plus'}
                                            alerts={0}/>
                </React.Fragment>}
                {currentUser.role === 'Administrator' && <NavigationMenuListItem to={'/admin/user'}
                                                                                 isActive={(match, location) => {
                                                                                     return location.pathname.startsWith('/admin');
                                                                                 }}
                                                                                 icon={'database'}
                                                                                 alerts={0}/>}
            </ul>
        );
    }
}