import { Col, Container, Row } from "react-bootstrap";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Full(props) {
  return (
    <Container fluid className="p-0">
      <Header className="App-header" />
      <Row className="App-main d-flex">
        <Col xs={2} md={3}>
          <Sidebar/>
        </Col>
        <Col xs={8} md={9} as="main">
          {props.children}
        </Col>
      </Row>
    </Container>
  );
}

export default Full;
