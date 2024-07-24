import React from "react";
import Modal from "./Modal";


class Component extends React.Component {
    static Modal = Modal;

    state = {modal: false};

    toggle = (e) => {
        e.preventDefault();
        this.setState({
            modal: !this.state.modal,
        });
    };

    render() {
        return (
            <div className="container mt-5">
                <button type="button" className="modal-open-button btn btn-danger" onClick={this.toggle}>Open</button>
                <Modal isOpen={this.state.modal}>
                    <Modal.Header toggle={this.toggle}>Modal title</Modal.Header>
                    <Modal.Body>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Modal.Body>
                    <Modal.Footer onClick={this.toggle}>
                        <button type="button" className="modal-close-button btn btn-secondary"
                                onClick={this.toggle}>Cancel
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Component;