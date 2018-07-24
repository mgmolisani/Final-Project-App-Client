import React, {Component} from 'react';
import LocationSearchField from "../locationSearch/LocationSearchField";

export default class HomeSearch
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='map-container'>
                <LocationSearchField/>
            </div>
        );
    }
}

HomeSearch.propTypes = {};

HomeSearch.defaultProps = {};