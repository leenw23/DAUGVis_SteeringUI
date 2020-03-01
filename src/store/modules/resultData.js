import { createAction, handleActions } from 'redux-actions'

const PUT_AUGMENTED = 'result/PUT_AUGMENTED' // Selected Class를 augmentedData에 추가 (임시 함수)
const PUT_ACCEPTED = 'result/PUT_ACCEPTED' // acceptedData에 데이터 추가
const DEL_ACCEPTED = 'result/DEL_ACCEPTED' // acceptedData에서 데이터 삭제
const ON_STATE = 'result/ON_STATE' // acceptedData Grid 열기
const CHANGE_STATE = 'result/CHANGE_STATE' // acceptedData Grid 열기 상태 변경
const RESET_RESULT = 'result/RESET' // 데이터 초기화

let augmented_id = 0
let accepted_id = 0

export const putAugmented = createAction(PUT_AUGMENTED, object => ({ object, augmented_id: augmented_id++ }))
export const putAccepted = createAction(PUT_ACCEPTED, object => ({ object, accepted_id: accepted_id++ }))
export const delAccepted = createAction(DEL_ACCEPTED, object => object)
export const onState= createAction(ON_STATE)
export const changeState = createAction(CHANGE_STATE)
export const resetResult = createAction(RESET_RESULT)

const initialState = {

    augmentedData: [
        // Example DataType
        // {
        //     key: 0, 
        //     classSrc: 'images/sample0.jpg',
        //     augmentedSrc: 'images/sample3.png',
        //     accepted: false,
        // },
    ],
    acceptedData: [],
    openState: false,
}

export default handleActions(
    {
        [PUT_AUGMENTED]: (state, action) => ({
            ...state,
            augmentedData: state.augmentedData.concat({
                id: action.payload.accepted_id,
                key: action.payload.object.key,
                classSrc: action.payload.object.src,
                augmentedSrc: action.payload.object.augmentedSrc,
                accepted: false
            })
        }),
        [PUT_ACCEPTED]: (state, action) => ({
            ...state,
            acceptedData: state.acceptedData.concat({
                id: action.payload.accepted_id,
                key: action.payload.object.key,
                classSrc: action.payload.object.classSrc,
                augmentedSrc: action.payload.object.augmentedSrc,
                accepted: true
            }),
            augmentedData: state.augmentedData.map(
                data =>
                    data.key === action.payload.object.key
                        ? { ...data, accepted: true }
                        : data
            )
        }),
        [DEL_ACCEPTED]: (state, action) => ({
            ...state,
            acceptedData: state.acceptedData.filter(data => data.key !== action.payload.key),
            augmentedData: state.augmentedData.map(
                data =>
                    data.key === action.payload.key
                        ? {...data, accepted: false}
                        : data
            )
        }),
        [ON_STATE]: (state) => ({
            ...state,
            openState: true
        }),
        [CHANGE_STATE]: (state) => ({
            ...state,
            openState: !state.openState
        }),
        [RESET_RESULT]: (state) => ({
            ...state,
            augmentedData: initialState.augmentedData,
            acceptedData: initialState.acceptedData,
        })
    },
    initialState
)
