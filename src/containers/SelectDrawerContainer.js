import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delContent, delStyle, changeContentState, changeStyleState } from '../store/modules/selectData';
import { putAugmented } from '../store/modules/resultData';
import SelectDrawer from '../components/SelectDrawer/SelectDrawer';

export default function SelectDrawerContainer() {
    const dispatch = useDispatch();

    const contentData = useSelector(state => state.selectData.contentData);
    const styleData = useSelector(state => state.selectData.styleData);
    const openContentState = useSelector(state => state.selectData.openContentState);
    const openStyleState = useSelector(state => state.selectData.openStyleState);

    const delDataFromContent = (object) => {
        dispatch(delContent(object));
    }

    const delDataFromStyle = (object) => {
        dispatch(delStyle(object));
    }

    const putContentDataToAugmented = (object) => {
        dispatch(putAugmented(object));
    }

    const changeContentDataState = () => {
        dispatch(changeContentState());
    }

    const changeStyleDataState = () => {
        dispatch(changeStyleState());
    }

    return (
        <SelectDrawer 
            contentData={contentData}
            styleData={styleData}
            openContentState={openContentState}
            openStyleState={openStyleState}
            delDataFromContent={delDataFromContent}
            delDataFromStyle={delDataFromStyle}
            putContentDataToAugmented={putContentDataToAugmented}
            changeContentDataState={changeContentDataState}
            changeStyleDataState={changeStyleDataState}
        />
    );
}
