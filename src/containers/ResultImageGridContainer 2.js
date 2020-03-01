import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { putAccepted, delAccepted, onState } from '../store/modules/resultData';
import ResultImageGrid from '../components/ResultImageGrid/ResultImageGrid';

export default function ResultImageGridContainer() {
    const augmentedData = useSelector(state => state.resultData.augmentedData);
    const dispatch = useDispatch();

    const putDataAccepted = (object) => {
        dispatch(putAccepted(object));
    }

    const delDataAccepted = (object) => {
        dispatch(delAccepted(object));
    }

    const onOpenStatus = () => {
        dispatch(onState())
    }

    return (
        <ResultImageGrid
            augmentedData={augmentedData}
            putDataAccepted={putDataAccepted}
            delDataAccepted={delDataAccepted}
            onOpenStatus={onOpenStatus}
        />
    );
}