import { Routes, Route } from "react-router-dom";
import Nav from "./components/Navbot";
import Footer from "./components/Footer";

import Home from "./view/Home";
import Kelas from "./view/Kelas";


import Faq from "./components/Faq";
import Keten from "./view/Keten";


function App() {
  return (
  <div>
     <Nav />

    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/Kelas" Component={Kelas} />
      <Route path="/Faq" Component={Faq} />
      <Route path="/Keten" Component={Keten} />

    </Routes>
<Footer />
  </div>

  );
}

export default App
