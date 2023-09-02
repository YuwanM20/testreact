
import { faq } from "../data/index";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = () => {
  return (
    <div className="faq">
      <Container>
      <Row>
        <Col>
        <h2 className=" mt-3 text-center fw-bold">Pertanyaan Yang Sering Ditanyakan</h2>
        </Col>
      </Row>
      <Row className=" pt-5 g-4 row-cols-lg-2 row-cols-1">
        {faq.map((faqq) =>{
          return(
            <Col key={faqq.id} >
            <Accordion data-aos="fade-up" data-aos-duration="1000" className="shadow-sm-white">
        <Accordion.Item eventKey={faqq.eventKey}>
          <Accordion.Header>{faqq.title}</Accordion.Header>
          <Accordion.Body>
{faqq.desc}
          </Accordion.Body>
        </Accordion.Item>
    
      </Accordion>
    
            </Col>
          );
        })}


      </Row>
      </Container>

  </div>
  )
}

export default Faq