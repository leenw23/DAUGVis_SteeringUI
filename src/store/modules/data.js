import { createAction, handleActions } from 'redux-actions'

const PUT_CONTENT = 'data/PUT_CONTENT' // Content_Data에 데이터 추가
const PUT_STYLE = 'data/PUT_STYLE' // Style_Data에 데이터 추가
const DEL_CONTENT = 'data/DEL_CONTENT' // Content_Data에서 데이터 삭제
const DEL_STYLE = 'data/DEL_STYLE' // Stlye_Data에서 데이터 삭제

let content_id = 0
let style_id = 0

export const putContent = createAction(PUT_CONTENT, object => ({ object, content_id: content_id++ }))
export const putStyle = createAction(PUT_STYLE, object => ({ object, style_id: style_id++ }))
export const delContent = createAction(DEL_CONTENT, object => object)
export const delStyle = createAction(DEL_STYLE, object => object)

// type = 0:neutral | 1:content | 2:style
const initialState = {
    sampleData: [
        {
            key: 0, 
            src: 'images/sample0.jpg',
            type: 0,
        },
        {
            key: 1, 
            src: 'images/sample1.jpeg',
            type: 0,
        },
        {
            key: 2, 
            src: 'images/sample2.png',
            type: 0,
        },
        {
            key: 3, 
            src: 'images/sample3.png',
            type: 0,
        },
        {
            key: 4, 
            src: 'images/sample4.jpeg',
            type: 0,
        },
        {
            key: 5,
            src: 'images/sample5.jpeg',
            type: 0,
        },
        {
            key: 6,
            src: 'images/sample6.jpg',
            type: 0,
        },
        {
            key: 7, 
            src: 'images/sample7.jpeg',
            type: 0,
        },
        {
            key: 8, 
            src: 'images/sample8.jpeg',
            type: 0,
        },
        {
            key: 9, 
            src: 'images/sample9.jpg',
            type: 0,
        },
        {
            key: 10, 
            src: 'images/sample10.jpg',
            type: 0,
        },
        {
            key: 11, 
            src: 'images/sample11.jpg',
            type: 0,
        },
        {
            key: 12, 
            src: 'images/sample12.jpg',
            type: 0,
        },
        {
            key: 13, 
            src: 'images/sample13.jpg',
            type: 0,
        },
        {
            key: 14, 
            src: 'images/sample14.jpg',
            type: 0,
        },
        {
            key: 15, 
            src: 'images/sample15.jpg',
            type: 0,
        },
    ],
    contentData: [],
    styleData: [],
}

export default handleActions(
    {
        [PUT_CONTENT]: (state, action) => ({
            ...state,
            contentData: state.contentData.concat({
                id: action.payload.content_id,
                key: action.payload.object.key,
                src: action.payload.object.src,
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
        })
    },
    initialState
)
