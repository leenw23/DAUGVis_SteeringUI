import { createAction, handleActions } from 'redux-actions'

const PUT_CONTENT = 'select/PUT_CONTENT' // contentData에 데이터 추가
const PUT_STYLE = 'select/PUT_STYLE' // styleData에 데이터 추가
const DEL_CONTENT = 'select/DEL_CONTENT' // contentData에서 데이터 삭제
const DEL_STYLE = 'select/DEL_STYLE' // styleData에서 데이터 삭제

const ON_CONTENT_STATE = 'select/ON_CONTENT_STATE' // contentData Grid 열기
const CHANGE_CONTENT_STATE = 'select/CHANGE_CONTENT_STATE' // contentData Grid 열기 상태 변경
const ON_STYLE_STATE = 'select/ON_STYLE_STATE' // styleData Grid 열기
const CHANGE_STYLE_STATE = 'select/CHANGE_STYLE_STATE' // styleData Grid 열기 상태 변경

const RESET_SELECT = 'select/RESET' // 데이터 초기화

let content_id = 0
let style_id = 0

export const putContent = createAction(PUT_CONTENT, object => ({ object, content_id: content_id++ }))
export const putStyle = createAction(PUT_STYLE, object => ({ object, style_id: style_id++ }))
export const delContent = createAction(DEL_CONTENT, object => object)
export const delStyle = createAction(DEL_STYLE, object => object)

export const onContentState= createAction(ON_CONTENT_STATE)
export const changeContentState = createAction(CHANGE_CONTENT_STATE)
export const onStyleState= createAction(ON_STYLE_STATE)
export const changeStyleState = createAction(CHANGE_STYLE_STATE)

export const resetSelect = createAction(RESET_SELECT)

// type = 0:neutral | 1:content | 2:style
const initialState = {
    sampleData: [
        {
            key: 0, 
            src: 'images/sample0.jpg',
            // augmentedSrc is temporary attribute
            augmentedSrc: 'images/augmentSample/sample0.png',
            type: 0,
        },
        {
            key: 1, 
            src: 'images/sample1.jpeg',
            augmentedSrc: 'images/augmentSample/sample1.jpeg',
            type: 0,
        },
        {
            key: 2, 
            src: 'images/sample2.png',
            augmentedSrc: 'images/augmentSample/sample2.jpg',
            type: 0,
        },
        {
            key: 3, 
            src: 'images/sample3.png',
            augmentedSrc: 'images/augmentSample/sample3.jpg',
            type: 0,
        },
        {
            key: 4, 
            src: 'images/sample4.jpeg',
            augmentedSrc: 'images/augmentSample/sample4.jpeg',
            type: 0,
        },
        {
            key: 5,
            src: 'images/sample5.jpeg',
            augmentedSrc: 'images/augmentSample/sample5.jpeg',
            type: 0,
        },
        {
            key: 6,
            src: 'images/sample6.jpg',
            augmentedSrc: 'images/augmentSample/sample6.jpg',
            type: 0,
        },
        {
            key: 7, 
            src: 'images/sample7.jpeg',
            augmentedSrc: 'images/augmentSample/sample7.jpeg',
            type: 0,
        },
        {
            key: 8, 
            src: 'images/sample8.jpeg',
            augmentedSrc: 'images/augmentSample/sample8.jpeg',
            type: 0,
        },
        {
            key: 9, 
            src: 'images/sample9.jpg',
            augmentedSrc: 'images/augmentSample/sample9.jpg',
            type: 0,
        },
        {
            key: 10, 
            src: 'images/sample10.jpg',
            augmentedSrc: 'images/augmentSample/sample10.jpeg',
            type: 0,
        },
        {
            key: 11, 
            src: 'images/sample11.jpg',
            augmentedSrc: 'images/augmentSample/sample11.jpeg',
            type: 0,
        },
        {
            key: 12, 
            src: 'images/sample12.jpg',
            augmentedSrc: 'images/augmentSample/sample12.jpg',
            type: 0,
        },
        {
            key: 13, 
            src: 'images/sample13.jpg',
            augmentedSrc: 'images/augmentSample/sample13.jpg',
            type: 0,
        },
        {
            key: 14, 
            src: 'images/sample14.jpg',
            augmentedSrc: 'images/augmentSample/sample14.jpg',
            type: 0,
        },
        {
            key: 15, 
            src: 'images/sample15.jpg',
            augmentedSrc: 'images/augmentSample/sample15.jpg',
            type: 0,
        },
    ],
    contentData: [],
    styleData: [],
    openContentState: false,
    openStyleState: false,
}

export default handleActions(
    {
        [PUT_CONTENT]: (state, action) => ({
            ...state,
            contentData: state.contentData.concat({
                id: action.payload.content_id,
                key: action.payload.object.key,
                src: action.payload.object.src,
                // Temporary
                augmentedSrc: action.payload.object.augmentedSrc,
                type: 1
            }),
            sampleData: state.sampleData.map(
                data =>
                    data.key === action.payload.object.key
                        ? { ...data, type: 1 }
                        : data
            )
        }),
        [PUT_STYLE]: (state, action) => ({
            ...state,
            styleData: state.styleData.concat({
                id: action.payload.style_id,
                key: action.payload.object.key,
                src: action.payload.object.src,
                type: 2
            }),
            sampleData: state.sampleData.map(
                data =>
                    data.key === action.payload.object.key
                        ? { ...data, type: 2 }
                        : data
            )
        }),
        [DEL_CONTENT]: (state, action) => ({
            ...state,
            contentData: state.contentData.filter(data => data.key !== action.payload.key),
            sampleData: state.sampleData.map(
                data =>
                    data.key === action.payload.key
                        ? {...data, type: 0}
                        : data
            )
        }),
        [DEL_STYLE]: (state, action) => ({
            ...state,
            styleData: state.styleData.filter(data => data.key !== action.payload.key),
            sampleData: state.sampleData.map(
                data =>
                    data.key === action.payload.key
                        ? {...data, type: 0}
                        : data
            )
        }),
        [ON_CONTENT_STATE]: (state) => ({
            ...state,
            openContentState: true
        }),
        [CHANGE_CONTENT_STATE]: (state) => ({
            ...state,
            openContentState: !state.openContentState
        }),
        [ON_STYLE_STATE]: (state) => ({
            ...state,
            openStyleState: true
        }),
        [CHANGE_STYLE_STATE]: (state) => ({
            ...state,
            openStyleState: !state.openStyleState
        }),
        [RESET_SELECT]: (state) => ({
            ...state,
            sampleData: initialState.sampleData,
            contentData: initialState.contentData,
            styleData: initialState.styleData
        })
    },
    initialState
)
