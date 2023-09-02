import {Navbar, Container ,Nav} from "react-bootstrap";
import { useState, useEffect } from "react";

import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";


const Navbot = () => {

  const successAlert = () => {
    Swal.fire({
      title: 'Promo Akan Segera Hadir',
      // text: 'Terima Kasih Telah Subscribe',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }

  const [changeColor, setChangeColor] = useState(false); 

  const changeBackgroundColor = () => {
    if(window.scrollY > 10) {
      setChangeColor(true);
    }else {
      setChangeColor(false)
    }
  }; 

  useEffect(() =>{
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });
  return (
    <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
      <Container>
        <Navbar.Brand className="brand" href="#home">CodeBuy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="burger" />
        <Navbar.Collapse id="basic-navbar-nav" className="burger2">
          <Nav className="mx-auto">
            {navLinks.map((data) => {
              return (
              <div className="nav-link" key={data.id}>
            <NavLink to={data.path}   className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  } end>{data.text}</NavLink>
              </div>
              );
              })}
          </Nav>
          <div>
            <button onClick={successAlert} className="btnww ">Promo</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbot
