import React from "react";
import { NavBar } from "./NavBar"
import { Summary } from "./Summary"
import { Services } from "./Services"
import { Products } from "./Products"
import { AboutUs } from "./AboutUs"
import { ContactUs } from "./ContactUs"
import { Footer } from "./Footer"

export function Home() {
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