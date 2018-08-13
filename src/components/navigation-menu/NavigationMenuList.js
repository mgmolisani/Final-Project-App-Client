import React, {Component} from 'react';
import NavigationMenuListItem from "./NavigationMenuListItem";
import withLogin from "../utils/withLogin";

class NavigationMenuList
    extends Component {

    render() {
        return (
            <ul className='text-secondary text-center'>
                <NavigationMenuListItem to={'/calendar'}
                                        icon={['far', 'calendar']}
                                        alerts={3}/>
                <NavigationMenuListItem to={'/eventlist'}
                                        icon={'list'}
                                        alerts={0}/>
                <NavigationMenuListItem to={'/search/user'}
                                        isActive={(match, location) => {
                                            return location.pathname.startsWith('/search');
                                        }}
                                        icon={'search'}
                                        alerts={0}/>
                <NavigationMenuListItem to={'/new/event'}
                                        isActive={(match, location) => {
                                            return location.pathname.startsWith('/new');
                                        }}
                                        icon={'plus'}
                                        alerts={0}/>
            </ul>
        );
    }
}

export default withLogin(NavigationMenuList)

NavigationMenuList.propTypes = {};

NavigationMenuList.defaultProps = {};