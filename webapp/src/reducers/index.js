import {combineReducers} from 'redux';

import Constants from '../constants';

const INITIAL_STATE = {
    visible: false,
    payload: {},
};

const modal = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case Constants.ACTION_TYPES.OPEN_MODAL:
        return {
            visible: true,
            payload: action.payload,
        };
    case Constants.ACTION_TYPES.CLOSE_MODAL:
        return INITIAL_STATE;
    default:
        return state;
    }
};

export default combineReducers({
    modal,
});
