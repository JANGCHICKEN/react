import { useState } from "react";
import { Card, Modal } from "react-bootstrap";

export default function CardDataset(props) {
  //   const [show, setShow] = useState(false);

  //   const onClickCard = () => setShow(true);
  const onClickCard = () => {
    props.clickEvent(props.index);
  };
  //   const onHideModal = () => setShow(false);

  const getBg = () => {
    return props.selected ? "primary" : "light";
  };

  const getText = () => {
    return props.selected ? "white" : "dark";
  };

  return (
    <>
      <Card bg={getBg()} text={getText()} onClick={onClickCard}>
        <Card.Body>
          <Card.Title>{props.item.title}</Card.Title>
          <Card.Text>생성자 - {props.item.createdBy}</Card.Text>
        </Card.Body>
      </Card>

      {/* <Modal show={show} onHide={onHideModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{props.item.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>상세정보</Modal.Body>
      </Modal> */}
    </>
  );
}
