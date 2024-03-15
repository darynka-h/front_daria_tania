import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import './addpost.css';

class Addpost extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
        <Modal
        {...this.props}
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="AddTextInput">
            <input type="text" placeholder="Add text" />
            <input type="file" placeholder="Add image" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant = 'danger' onClick={this.props.onHide}>Create</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Addpost;