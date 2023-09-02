import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sctop from "./components/Sctop.jsx";
import "animate.css";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

// ..
AOS.init();

import { BrowserRouter } from "react-router-dom";
import "./assets/fontcss/main.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Sctop />
    <App />
    </BrowserRouter>
  </React.StrictMode>,
);
