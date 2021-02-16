import {ActionTypes} from "./types";

const initialState = {
    posts: [],
    loading: false
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.POSTS_LOADING: {
            console.log('...Loading')
            return {...state, loading: action.payload}
        }
        case ActionTypes.GET_POSTS: {
            return {...state, posts: action.payload}
        }
        case ActionTypes.DELETE_POST: {
            return {...state, posts: state.posts.filter(post => post.uuid !== action.payload)}
        }
        default:
            return state
    }
}