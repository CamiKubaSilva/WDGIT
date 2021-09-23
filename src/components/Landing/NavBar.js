import { Link } from "react-scroll";
import up from "../../images/up.png"
import Logo from "../../images/Logo.png";

export function NavBar() {
  return (
    <div className="navBarL">
      <div className="nav">
        <img className="logo" src={Logo} alt="logo"/>
        <div className="navLinks">
          <Link to="tarjetas" spy={true} smooth={true} className="link">Tarjetas</Link>
          <Link to="rewards" spy={true} smooth={true} className="link">Rewards</Link>
          <Link to="unite" spy={true} smooth={true} className="link">Compañia</Link>
          <Link to="giveback" spy={true} smooth={true} className="link">Giveback</Link>
          <Link to="footer" spy={true} smooth={true} className="link">Preguntas</Link>
          <Link className="linkUp" to="body" spy={true} smooth={true}><img src={up} alt="Back to top"/></Link>
        </div>
        <div className="navRigthL">
          <a href="/tarjetas/#">Mi cuenta</a>
          <div className="eng">
            <a href="/tarjetas/#">ENG</a>
          </div>
          <button><a className="buttonLet" href="/">Get Started</a></button>
        </div>
      </div>
    </div>
  );
}
