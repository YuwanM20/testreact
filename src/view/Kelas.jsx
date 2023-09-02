import {Container, Col, Row,} from "react-bootstrap";
import { semuaKelas } from "../data/index";
import Faq from "../components/Faq";
import Swal from "sweetalert2";


const kelas = () => {

  const successAlert = () => {
    Swal.fire({
      title: 'Yah Halaman Lagi Diperbaiki!',
      // text: 'Terima Kasih Telah Subscribe',
      icon: 'error',
      confirmButtonText: 'Ok'
    })
  }


  return (
    <div className="kelas-page">
    <div className="kelass min-vh-100">
      <Container>
        <Row>
          <Col data-aos="fade-up" data-aos-duration="1000" className="">
          <h1 className="fw-bold text-center ">Semua Kelas</h1>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </Col>
        </Row>
        <Row>
        {semuaKelas.map((dataa) => {
              return (
                <Col data-aos="fade-up" data-aos-duration="1000" key={dataa.id} className="shadow rounded">
                  <img src={dataa.image} alt="hero-img" className="w-100 mb-5 rounded-top" />
                  <div data-aos="fade-up" data-aos-duration="900" className="star mb-2 px-3">
                    <i className={dataa.star1}></i>
                    <i className={dataa.star2}></i>
                    <i className={dataa.star3}></i>
                    <i className={dataa.star4}></i>
                    <i className={dataa.star5}></i>
                  </div>
                  <h5 className="mb-5 px-3" >{dataa.title}</h5>
                  <div className="ket px-3 pb-3 d-flex justify-content-between align-items-center">
                    <p className="m-0 pricee fw-bold" >{dataa.price}</p>
                    <button onClick={successAlert} className="btnw11">{dataa.buy}</button>
                  </div>
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
    <Faq />
    </div>
  )
}

export default kelas