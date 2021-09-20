import girl from "../../images/girl2.png"

export function Footer() {
  return (
    <div className="footer">
      <img src={girl} alt="footer"/>
      <div className="column">
      <div className="row">
      <div className = "column4">
      <h3>Services</h3>
      <a href="/WDGIT/#">Plans</a>
      <a href="/WDGIT/#">Compare</a>
      <a href="/WDGIT/#">Open</a>
      <a href="/WDGIT/#">Payments</a>
      <a href="/WDGIT/#">Transfers</a>
      <a href="/WDGIT/#">Cashback</a>
      <a href="/WDGIT/#">Withdraw</a>
      <a href="/WDGIT/#">ATM</a>
      </div>
      <div className = "column4">
      <h3>Products</h3>
      <a href="/WDGIT/#">Consulting</a>
      <a href="/WDGIT/#">Prepaid Card</a>
      <a href="/WDGIT/#">Insurance</a>
      <a href="/WDGIT/#">Travel</a>
      </div>
      <div className = "column4">
      <h3>About Us</h3>
      <a href="/WDGIT/#">About us</a>
      <a href="/WDGIT/#">Leadership</a>
      <a href="/WDGIT/#">Diversity and inclusion</a>
      <a href="/WDGIT/#">Careers</a>
      <a href="/WDGIT/#">Blog</a>
      <a href="/WDGIT/#">News</a>
      </div>
      <div className = "column4">
      <h3>Contact</h3>
      <a href="/WDGIT/#">Customer help</a>
      <a href="/WDGIT/#">Community</a>
      <a href="/WDGIT/#">Contact</a>
      <a href="/WDGIT/#">Financial Statements</a>
      </div>
      </div>
      <div className="textBottom">
      <div>
      <h3>Argentina, Buenos Aires</h3>
      <p>Av. del Libertador 602 - 13B, CABA</p>
      </div>
      <div>
      <h3>Estados Unidos, Delaware</h3>
      <p>919 N. Mrket St., Suite 725 Wilmington, New Castle.</p>
      </div>
      </div>
      </div>
      </div>
  );
}
