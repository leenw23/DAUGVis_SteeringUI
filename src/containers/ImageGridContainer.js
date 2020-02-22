import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as dataActions from '../store/modules/data';
import ImageGrid from '../components/ImageGrid/ImageGrid';

class ImageGridContainer extends Component {
    putDataToContent = object => {
        const {PutActions} = this.props
        PutActions.putContent(object)
    }

    putDataToStyle = object => {
        const {PutActions} = this.props
        PutActions.putStyle(object)
    }

    render() {
        const { sampleData, contentData } = this.props
        return (
            <ImageGrid 
                sampleData={sampleData}
                contentData={contentData}
                putDataToContent={this.putDataToContent}
                putDataToStyle={this.putDataToStyle}
            />
        );
    }
}

const mapStateToProps = ({ data }) => ({
    sampleData: data.sampleData,
    contentData: data.contentData,
    styleData: data.styleData,
})

const mapDispatchToProps = dispatch => ({
    PutActions: bindActionCreators(dataActions, dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageGridContainer);