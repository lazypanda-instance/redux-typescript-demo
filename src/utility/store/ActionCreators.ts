import { User } from "../../component/userForm/User";
import { DispatchType, UserAction } from "../type";
import * as actionTypes from "./ActionTypes";

export const addUser = (user: User) => {
    const action: UserAction = {
        type: actionTypes.ADD_USER,
        user
    }
    return performRequest(action);
}

export const removeUser = (user: User) => {
    const action: UserAction = {
        type: actionTypes.REMOVE_USER,
        user
    }

    return performRequest(action);
}

export const updateUser = (user: User) => {
    const action: UserAction = {
        type: actionTypes.UPDATE_USER,
        user
    }

    return performRequest(action);
}

const performRequest = (action: UserAction) => {
    return (dispatch: DispatchType) => {
        dispatch(action);
    }
}