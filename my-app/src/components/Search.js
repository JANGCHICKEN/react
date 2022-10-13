import { Button, Form, InputGroup } from "react-bootstrap";

export default function Search() {
  return (
    <InputGroup className="search-form">
      <Form.Control aria-describedby="search-button"></Form.Control>
      <Button id="search-button" variant="outline-secondary">
        검색
      </Button>
    </InputGroup>
  );
}
