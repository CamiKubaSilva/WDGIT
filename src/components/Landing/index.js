import React from "react";
import { NavBar } from "./NavBar"
import { Summary } from "./Summary"
import { Services } from "./Services"
import { Products } from "./Products"
import { ContactUs } from "./ContactUs"
import { Footer } from "./Footer"

export function Landing() {
    return (
      <div className = "body">
        <NavBar></NavBar>
        <Summary></Summary>
        <Services></Services>
        <Products></Products>
        <ContactUs></ContactUs>
        <Footer></Footer>
        </div>
    );
  }