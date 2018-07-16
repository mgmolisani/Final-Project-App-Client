import React, {Component} from 'react';
import {
    addSearchTags,
    changeSearchDateRange,
    changeSearchFromDateField,
    changeSearchTagField, changeSearchToDateField,
    removeSearchTag
} from "../actions/instagramActions";
import {connect} from "react-redux";
import ImageSearchTagField from "../components/ImageSearchTagField";
import ImageSearchTagsList from "../components/ImageSearchTagsList";
import ImageSearchDateFields from "../components/ImageSearchDateFields";

function mapDispatchToProps(dispatch, ownProps) {
    return {
        changeSearchTagField: tag => {
            dispatch(changeSearchTagField(tag));
        },
        addSearchTags: tags => {
            dispatch(addSearchTags(tags));
        },
        removeSearchTag: tag => {
            dispatch(removeSearchTag(tag));
        },
        changeSearchDateRange: (fromDate, toDate) => {
            dispatch(changeSearchDateRange(fromDate, toDate));
        },
        changeSearchFromDateField: fromDate => {
            dispatch(changeSearchFromDateField(fromDate));
        },
        changeSearchToDateField: toDate => {
            dispatch(changeSearchToDateField(toDate));
        }
    }
}

class InstagramPhotoSearchForm
    extends Component {

    render() {
        return (
            <div className='row'>
                <div className='col-4'>
                    <ImageSearchTagsList tags={this.props.searchFilters.tags}
                                         removeSearchTag={this.props.removeSearchTag}/>
                </div>
                <div className='col-8'>
                    <ImageSearchTagField tagField={this.props.imageSearchFields.tagField}
                                         changeSearchTagField={this.props.changeSearchTagField}
                                         addSearchTags={() => this.props.addSearchTags(this.props.imageSearchFields.tagField)}/>
                    <ImageSearchDateFields fromDateField={this.props.imageSearchFields.fromDateField}
                                           toDateField={this.props.imageSearchFields.toDateField}
                                           changeSearchDateRange={this.props.changeSearchDateRange}
                                           changeSearchFromDateField={this.props.changeSearchFromDateField}
                                           changeSearchToDateField={this.props.changeSearchToDateField}

                                />
                </div>
            </div>
        )
    }
}

export default connect(
    state => (state),
    mapDispatchToProps
)(InstagramPhotoSearchForm);
