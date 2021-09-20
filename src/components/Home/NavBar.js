import Logo from "../../images/Logo.png";

export function NavBar() {
  return (
    <div className="nav">
      <img className="logo" src={Logo} alt="logo"/>
      <div className="navRigth">
        <div className="navLinks">
          <a href="/WDGIT/home/#">Services</a>
          <a href="/WDGIT/home/#">Products</a>
          <a href="/WDGIT/home/#">AboutUs</a>
          <a href="/WDGIT/home/#">Contact</a>
        </div>
        <div className="eng">
          <a href="/WDGIT/home/#">ENG</a>
        </div>
        </div>
    </div>
  );
}
