import React, {Component} from 'react';
import NavigationMenuListItem from "./NavigationMenuListItem";
import withLogin from "../utils/withLogin";

class NavigationMenuList
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className='text-secondary text-center'>
                <NavigationMenuListItem to={'/calendar'}
                                        icon={['far', 'calendar']}
                                        alerts={3}/>
                <NavigationMenuListItem to={'/eventlist'}
                                        icon={'list'}
                                        alerts={0}/>
                <NavigationMenuListItem to={'/search'}
                                        icon={'search'}
                                        alerts={0}/>
                <NavigationMenuListItem to={'/new'}
                                        icon={'plus'}
                                        alerts={0}/>
            </ul>
        );
    }
}

export default withLogin(NavigationMenuList)

NavigationMenuList.propTypes = {};

NavigationMenuList.defaultProps = {};