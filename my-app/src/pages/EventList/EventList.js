import { Card, Col, Container, Row } from "react-bootstrap";

import Search from "../../components/Search";

import datasets from "../../datas/datasets.json";
import repositorys from "../../datas/repositorys.json";

export default function EventList() {
  return (
    <Container className="h-100 p-2">
      <Search></Search>
      <Row className="d-flex">
        <Col md={3}>
          <h2>데이터셋</h2>
          {datasets.map((value, index) => {
            return (
              <Card key={`dataset-${index}`}>
                <Card.Body>
                  <Card.Title>{value.title}</Card.Title>
                  <Card.Text>생성자 - {value.createdBy}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </Col>
        <Col md={7}>
          <h2>이벤트로그</h2>
          {repositorys.map((value, index) => {
            return (
              <Card key={`repository-${index}`}>
                <Card.Body>
                  <Card.Title>{value.title}</Card.Title>
                  <Card.Text>생성자 - {value.createdBy}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}
