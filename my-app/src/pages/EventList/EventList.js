import { Card, Col, Container, Row } from "react-bootstrap";

import Search from "../../components/Search";

import CardDataset from "./components/CardDataset";
import CardRepository from "./components/CardRepository";

import datasets from "../../datas/datasets.json";
import repositorys from "../../datas/repositorys.json";
import { useState } from "react";

export default function EventList() {
  const [selected, setSelected] = useState(-1);

  const isSelected = (index) => {
    return selected === index;
  };

  const onClickDataset = (index) => {
    setSelected(index);
  };

  return (
    <Container className="h-100 p-2">
      <Search></Search>
      <Row className="d-flex">
        <Col md={3}>
          <h2>데이터셋</h2>
          {datasets.map((value, index) => (
            <CardDataset
              key={`dataset-${index}`}
              index={index}
              item={value}
              selected={isSelected(index)}
              clickEvent={onClickDataset}
            />
          ))}
        </Col>
        <Col md={7}>
          <h2>이벤트로그</h2>
          {repositorys.map((value, index) => (
            <CardRepository item={value} key={`repository-${index}`} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}
