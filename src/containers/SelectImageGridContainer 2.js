import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { putContent, putStyle, onContentState, onStyleState } from '../store/modules/selectData';
import SelectImageGrid from '../components/SelectImageGrid/SelectImageGrid';

export default function SelectImageGridContainer() {
    const dispatch = useDispatch();

    const sampleData = useSelector(state => state.selectData.sampleData);
    const contentData = useSelector(state => state.selectData.contentData);
    const styleData = useSelector(state => state.selectData.styleData);

    const putDataToContent = (object) => {
        dispatch(putContent(object));
    }

    const putDataToStyle = (object) => {
        dispatch(putStyle(object));
    }

    const onContentDataState = () => {
        dispatch(onContentState());
    }

    const onStyleDataState = () => {
        dispatch(onStyleState());
    }
    return (
        <SelectImageGrid
            sampleData={sampleData}
            contentData={contentData}
            styleData={styleData}
            putDataToContent={putDataToContent}
            putDataToStyle={putDataToStyle}
            onContentDataState={onContentDataState}
            onStyleDataState={onStyleDataState}
        />
    );
}
