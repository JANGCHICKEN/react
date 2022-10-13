import { Container, Navbar } from "react-bootstrap";

export default function Header(props) {
  return (
    <Navbar bg="dark" variant="dark" className={props.className}>
      <Container>
        <Navbar.Brand href="/">IPR</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
