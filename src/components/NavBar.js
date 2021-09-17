import Logo from "../images/Logo.png";

export function NavBar() {
  return (
    <div className="nav">
      <img src={Logo} alt="logo"/>
      <div className="navRigth">
        <div className="navLinks">
          <a href="/#">Services</a>
          <a href="/#">Products</a>
          <a href="/#">AboutUs</a>
          <a href="/#">Contact</a>
        </div>
        <div className="eng">
          <a href="/#">ENG</a>
        </div>
      </div>
    </div>
  );
}
