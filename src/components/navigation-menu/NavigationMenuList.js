import React, {Component} from 'react';
import NavigationMenuListItem from "./NavigationMenuListItem";
import withLogin from "../utils/withLogin";

class NavigationMenuList
    extends Component {

    render() {
        return (
            <ul className='text-secondary text-center'>
                <NavigationMenuListItem to={'/search/user'}
                                        isActive={(match, location) => {
                                            return location.pathname.startsWith('/search');
                                        }}
                                        icon={'search'}
                                        alerts={0}/>
                <NavigationMenuListItem to={'/calendar'}
                                        icon={['far', 'calendar']}
                                        alerts={0}/>
                <NavigationMenuListItem to={'/create/event'}
                                        isActive={(match, location) => {
                                            return location.pathname.startsWith('/create');
                                        }}
                                        icon={'plus'}
                                        alerts={0}/>
                <NavigationMenuListItem to={'/admin'}
                                        icon={'database'}
                                        alerts={0}/>
            </ul>
        );
    }
}

export default withLogin(NavigationMenuList)

NavigationMenuList.propTypes = {};

NavigationMenuList.defaultProps = {};