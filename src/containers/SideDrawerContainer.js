import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as dataActions from '../store/modules/data';
import SideDrawer from '../components/SideDrawer/SideDrawer';

class SideDrawerContainer extends Component {
    delDataFromContent = object => {
        const {DelActions} = this.props
        DelActions.delContent(object)
    }

    delDataFromStyle = object => {
        const {DelActions} = this.props
        DelActions.delStyle(object)
    }

    render() {
        const { contentData, styleData } = this.props
        return (
            <SideDrawer 
                contentData={contentData}
                styleData={styleData}
                delDataFromContent={this.delDataFromContent}
                delDataFromStyle={this.delDataFromStyle}
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
    DelActions: bindActionCreators(dataActions, dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideDrawerContainer);