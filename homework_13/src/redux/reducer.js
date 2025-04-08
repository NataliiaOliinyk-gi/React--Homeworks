import { SET_USERS, SET_FILTER } from "./types";

const initialStore = {
    users: [],
    filter: ''
};

const reducer = (store = initialStore, { type, payload }) => {
    switch (type) {
        case SET_USERS:
            return { ...store, users: payload };

        case SET_FILTER:
            return { ...store, filter: payload };

        default:
            return store;
    }

};

export default reducer;