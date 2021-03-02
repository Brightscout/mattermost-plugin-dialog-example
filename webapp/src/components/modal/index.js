import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Actions from 'actions';
import Selectors from 'selectors';

import Modal from './modal';

const mapStateToProps = (state) => ({
    visible: Selectors.modal(state).visible,
    modalPayload: Selectors.modal(state).payload,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    close: Actions.closeModal,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
