import { useState } from "react";

import { Card, Modal } from "react-bootstrap";

export default function CardRepository(props) {
  const [show, setShow] = useState(false);

  const onClickCard = () => setShow(true);
  const onHideModal = () => setShow(false)

  return (
    <>
      <Card onClick={onClickCard}>
        <Card.Body>
          <Card.Title>{props.item.title}</Card.Title>
          <Card.Text>생성자 - {props.item.createdBy}</Card.Text>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={onHideModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{props.item.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>상세정보</Modal.Body>
      </Modal>
    </>
  );
}
