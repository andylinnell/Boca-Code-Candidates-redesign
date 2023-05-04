import { HashLink } from "react-router-hash-link";
import { Container, Row, Col, Button } from "../../utilis/Bootstrap.jsx";

export default function Intro() {

  return (
    <main>
      <Container fluid className="p-5">
        <Row className="d-flex align-items-center justify-content-center">
          <Col 
            sm={10} 
            // lg={ {span: 6, offset: 4} }
            // xl={5} 
            className="p-4">
              <h1><span>Boca Code's</span> Candidates Page Redesign</h1>
              <p>I am a software engineer residing in south Florida. I love JavaScript, React.js, CSS, Python, MongoDB and more. When I'm not crafting code, you will find me tending to my garden, keeping my Belgian Malinois on her toes (paws), and revving up my Ducati like it's an API.</p>
              <HashLink to="/#portfolio" style={{"textDecoration":"none"}}><Button 
                size="lg" 
                variant="outline-danger" 
                className="button-style button-effect">See Figma</Button></HashLink>
          </Col>
        </Row>
      </Container>
    </main>
  )
}