import { Container, Row, Col} from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";
import { kelasTerbaru, dataSwiper } from "../data/index";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';

import Faq from "../components/Faq";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Swal from "sweetalert2";



const home = () => {

  const successAlert = () => {
    Swal.fire({
      title: 'Yah Halaman Lagi Diperbaiki!',
      // text: 'Terima Kasih Telah Subscribe',
      icon: 'error',
      confirmButtonText: 'Ok'
    })
  }

  let navigate = useNavigate();

  return (
    <div className="Home ">
      <header className="overflow-hidden w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="hd-box d-flex align-items-center">
            <Col className="animate__animated animate__fadeInUp" lg="6">
            <h1 >Temukan <br /> <span className="">Bakatmu Disini</span> <br /> Bersama Kami</h1>
            <p className="" >Skilmu Adalah Harapan Masa Depanmu Nanti</p>
            <button href="#kelass" className=" btnw1d rounded-1 me-2"><a href="#kelass"> Lihat kelas</a></button>
            <button onClick={() => navigate("/kelas")} className=" btnw1 ">Lihat Promo</button>
            </Col>
            <Col>
            <img className=" animate__animated animate__fadeInUp mt-2 mb-4 pt-lg-0 pt-2" src={HeroImage} alt="hero-img" />
            </Col>
          </Row>
        </Container>
      
      </header>
      <div id="kelass" className="kelas w-100 min-vh-100" >
        <Container>
          <Row>
            <Col>
            <h1 className="text-center fw-bold">Kelas Baru</h1>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Col>
          </Row>

          <Row>
            {kelasTerbaru.map((dataa) => {
              return (
                <Col data-aos="fade-down" data-aos-duration="1000" key={dataa.id} className="shadow rounded">
                  <img src={dataa.image} alt="hero-img" className="w-100 mb-5 rounded-top" />
                  <div data-aos="fade-up" data-aos-duration="1500" className="star mb-2 px-3">
                    <i className={dataa.star1}></i>
                    <i className={dataa.star2}></i>
                    <i className={dataa.star3}></i>
                    <i className={dataa.star4}></i>
                    <i className={dataa.star5}></i>
                  </div>
                  <h5  className="mb-5 px-3" >{dataa.title}</h5>
                  <div className="ket px-3 pb-3 d-flex justify-content-between align-items-center">
                    <p  className="m-0 pricee fw-bold" >{dataa.price}</p>
                    <button onClick={successAlert} className="btnw11">{dataa.buy}</button>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col data-aos="fade-up" data-aos-duration="1000" className="text-center mt-3">
              <button className="btnwd rounded-5" onClick={() => navigate("/kelas")}>
                Lebih Banyak <i className="fa-solid fa-chevron-right ms-3"></i>
              </button>
              
            </Col>
          </Row>
        </Container>
      </div>
      <div className="testi py-5 ">
        <Container>
        <Row>
          <Col>
          <h1 className="text-center mt-3 fw-bold my-5 w-100">Testimonial</h1>
          </Col>
        </Row>
        <Row data-aos="zoom-out-down" data-aos-duration="1500">
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {dataSwiper.map((swipp) => {
          return (
            <SwiperSlide key={swipp.id} className=" rounded-2 shadow-sm"> 
            <p className="desc">{swipp.desc}</p> 
            <div className="people">
              <img src={swipp.image} alt="" />
              <div>
                <h5 className="mb-1">{swipp.name}</h5>
                <p className="m-0 fw-bold">{swipp.skill}</p>
              </div>
            </div>
            </SwiperSlide>
          );

        })}
        
      </Swiper>
        </Row>
        </Container>
      </div>
      {/* SECTION FAQ */}
      <Faq />
      
    </div>


  );
};


export default home