import { Container, Row, Col, } from "react-bootstrap";
import { Link} from "react-router-dom";
import Swal from "sweetalert2";


const Footer = () => {
  const successAlert = () => {
    Swal.fire({
      title: 'Terima Kasih Telah Subscribe',
      // text: 'Terima Kasih Telah Subscribe',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }

  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-conten-between">
          <Col lg="5">
          <h1 className="fw-bold">CodeBuy</h1>
          <p className="desc">Lorem ipsum dolor sit amet consectetur, 
            laborum eaque cumque obcaecati, 
            aliquam similique recusandae animi 
            maxime dolores lestiae accusamus?</p>
            <div className="no mb-1 mt-4">
              <Link className="text-decoration-none">
              <i className="fa-brands fa-whatsapp"></i>
              <p className="m-0">+62 123-3122-2132</p>
              </Link>
            </div>
            <div className="email">
            <Link className="text-decoration-none">
          <i className="fa-regular fa-envelope"></i>
          <p className="m-0">CustCodeBuy@gmail.com</p>
          </Link>
            </div>
          </Col>

          <Col className="mt-5 col mt-lg-0 col-lg-2 col d-flex flex-column">
          <h5>Menu</h5>
          <Link to="">Home</Link>
          <Link to="kelas">Kelas</Link>
          <Link to="testi">Testimonial</Link>
          <Link to="faq">Faq</Link>
          </Col>

          <Col lg="4" className="mt-lg-0 mt-5">
          <h5 className="fw-bold mb-3">Subscribe untuk info menarik</h5>
          <div className="subs ">
            <input type="text" placeholder="Subscribe..." />
            <buttnon  onClick={successAlert}  className="btn rounded-end rounded-0 btn-dark" >
              Subscribe</buttnon>
          </div>
          <div className=" social mt-3">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-youtube"></i>

          </div>
          </Col>
        </Row>
        <Row>

        <Col>
        <p className="text-center px-md-0 px-3">&copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">CodeBuy</span>, All Right Reserved </p>
        </Col>
        
        </Row>
      </Container>
    </div>
  );
}

export default Footer