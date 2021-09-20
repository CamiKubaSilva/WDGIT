import Logo from "../../images/Logo.png";
import { Link } from "react-scroll";
import up from "../../images/up.png"

export function NavBar() {

  return (
    <div className="nav">
      <img className="logo" src={Logo} alt="logo"/>
      <div className="navRigth">
        <div className="navLinks">
          <Link className="link" to="Services" spy={true} smooth={true}>Services</Link>
          <Link className="link" to="Products" spy={true} smooth={true}>Products</Link>
          <Link className="link" to="About" spy={true} smooth={true}>AboutUs</Link>
          <Link className="link" to="Contact" spy={true} smooth={true}>Contact</Link>
          <Link className="linkUp" to="body" spy={true} smooth={true}><img src={up} alt="Back to top"/></Link>
        </div>
        <div className="eng">
          <a href="/WDGIT/#">ENG</a>
        </div>
        </div>
    </div>
  );
}
