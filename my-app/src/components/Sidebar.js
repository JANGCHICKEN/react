import { ListGroup } from "react-bootstrap";

export default function Sidebar() {
  return (
    <ListGroup>
      <ListGroup.Item>Home</ListGroup.Item>
      <ListGroup.Item>데이터 관리</ListGroup.Item>
      <ListGroup.Item>표준 프로세스</ListGroup.Item>
      <ListGroup.Item>데이터소스</ListGroup.Item>
    </ListGroup>
  );
}
