import Constants from '../constants';

export const openModal = (payload) => (dispatch) => {
    dispatch({
        type: Constants.ACTION_TYPES.OPEN_MODAL,
        payload,
    });
};

export const closeModal = () => (dispatch) => {
    dispatch({
        type: Constants.ACTION_TYPES.CLOSE_MODAL,
    });
};

export default {
    openModal,
    closeModal,
};
