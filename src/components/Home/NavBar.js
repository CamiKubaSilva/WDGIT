import Logo from "../../images/Logo.png";

export function NavBar() {
  return (
    <div className="nav">
      <img className="logo" src={Logo} alt="logo"/>
      <div className="navRigth">
        <div className="navLinks">
          <a href="/WDGIT/#">Services</a>
          <a href="/WDGIT/#">Products</a>
          <a href="/WDGIT/#">AboutUs</a>
          <a href="/WDGIT/#">Contact</a>
        </div>
        <div className="eng">
          <a href="/WDGIT/#">ENG</a>
        </div>
        </div>
    </div>
  );
}
