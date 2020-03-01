import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetSelect } from '../store/modules/selectData';
import { delAccepted, resetResult, changeState } from '../store/modules/resultData';
import ResultDrawer from '../components/ResultDrawer/ResultDrawer';

export default function ResultDrawerContainer() {
    const dispatch = useDispatch();

    const styleData = useSelector(state => state.selectData.styleData);
    const acceptedData = useSelector(state => state.resultData.acceptedData);
    const openState = useSelector(state => state.resultData.openState);

    const allDataReset = () => {
        dispatch(resetSelect());
        dispatch(resetResult());
    };

    const resultDataReset = () => {
        dispatch(resetResult());
    }

    const delDataAccepted = (object) => {
        dispatch(delAccepted(object));
    }

    const changeOpenState = () => {
        dispatch(changeState());
    }

    return (
        <ResultDrawer
            styleData={styleData}
            acceptedData={acceptedData}
            delDataAccepted={delDataAccepted}
            openState={openState}
            changeOpenState={changeOpenState}
            allDataReset={allDataReset}
            resultDataReset={resultDataReset}
        />
    );
}