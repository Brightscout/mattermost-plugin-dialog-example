import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import {
    Button,
    Modal,
    Clearfix,
} from 'react-bootstrap';

export default class SurveyModal extends React.PureComponent {
    static propTypes = {
        theme: PropTypes.object.isRequired,
        modalPayload: PropTypes.object.isRequired,
        visible: PropTypes.bool.isRequired,
        close: PropTypes.func.isRequired,
    };

    handleClose = () => {
        this.props.close();
    };

    render() {
        const {visible, modalPayload} = this.props;

        return (
            <Modal
                aria-hidden={!visible}
                aria-labelledby='modal-title'
                show={visible}
                onHide={this.handleClose}
                backdrop={'static'}
            >
                <Modal.Header
                    closeButton={true}
                    closeLabel={'Close'}
                >
                    <Modal.Title id='modal-title'>
                        {modalPayload.title || `[no-title]`}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-body'>
                    {modalPayload.header || ''}
                    <Clearfix />
                    <div className="form-row">
                        {(modalPayload['form_fields'] || []).map((inputField, index) => (
                            <div key={inputField.id} className="form-group">
                                <label htmlFor={inputField.id}>{inputField.label}</label>
                                <input
                                    type={inputField.type}
                                    className="form-control"
                                    id={inputField.id}
                                    name={inputField.id}
                                />
                            </div>
                        ))}
                    </div>
                    {modalPayload.footer || ''}
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        type='button'
                        bsStyle='secondary'
                        onClick={this.handleClose}
                    >
                        {'Cancel'}
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
