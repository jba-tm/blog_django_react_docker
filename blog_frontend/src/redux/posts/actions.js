import {ActionTypes, DataTypes} from "./types";
import axios from "axios";
import {RestUrls} from "../../data/urls";

export const getPosts = () => {
    return dispatch => {
        dispatch({
            type: ActionTypes.POSTS_LOADING, payload: true
        })

        axios.get(RestUrls[DataTypes.POSTS])
            .then(response => {
                dispatch({type: ActionTypes.GET_POSTS, payload: response.data})
            })
            .catch(err => {
                    console.log(err)
                    dispatch({type: ActionTypes.POSTS_LOADING, payload: false})
                }
            )
    }
}

export const deletePost = (uuid, callback) => {
    return dispatch => {
        dispatch({type: ActionTypes.POSTS_LOADING, payload: true})
        axios.delete(`${RestUrls[DataTypes.POSTS]}/${uuid}/`)
            .then(response => {
                dispatch({type: ActionTypes.DELETE_POST, payload: uuid})
                callback()
            })
            .catch(err => {
                    console.log(err)
                }
            )
    }
}

export const createPost=(data, callback)=>{
    return dispatch=>{
        axios.post(RestUrls[DataTypes.POSTS], data)
            .then(response=>{
                console.log(response)
                dispatch({type: ActionTypes.CREATE_POST, payload: response.data})
                callback()
            })
            .catch(err=>{
                console.log(err)
                dispatch({type: ActionTypes.POSTS_LOADING, payload: false})
            })
    }
}
