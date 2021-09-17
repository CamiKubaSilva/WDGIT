import { NavBar } from "./components/NavBar"
import { Summary } from "./components/Summary"
import { Services } from "./components/Services"
import { Products } from "./components/Products"
import { AboutUs } from "./components/AboutUs"
import { ContactUs } from "./components/ContactUs"
import { Footer } from "./components/Footer"

import './App.scss';

function App() {
  return (
    <div className = "body">
      <NavBar></NavBar>
      <Summary></Summary>
      <Services></Services>
      <Products></Products>
      <AboutUs></AboutUs>
      <ContactUs></ContactUs>
      <Footer></Footer>
      </div>
  );
}

export default App;
