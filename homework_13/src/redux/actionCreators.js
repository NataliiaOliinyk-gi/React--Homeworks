import { SET_USERS, SET_FILTER } from "./types";

export const onSetUsers = (users) => {
    return {
        type: SET_USERS,
        payload: users,
    }
};

export const setFilter = (text) => {
    return {
        type: SET_FILTER,
        payload: text,
    }
}
