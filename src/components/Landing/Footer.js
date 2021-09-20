import girl from "../../images/girl2.png"

export function Footer() {
  return (
    <div className="footer">
      <img src={girl} alt="footer"/>
      <div className="column">
      <div className="row">
      <div className = "column4">
      <h3>Services</h3>
      <a href="/WDGIT/landing/#">Plans</a>
      <a href="/WDGIT/landing/#">Compare</a>
      <a href="/WDGIT/landing/#">Open</a>
      <a href="/WDGIT/landing/#">Payments</a>
      <a href="/WDGIT/landing/#">Transfers</a>
      <a href="/WDGIT/landing/#">Cashback</a>
      <a href="/WDGIT/landing/#">Withdraw</a>
      <a href="/WDGIT/landing/#">ATM</a>
      </div>
      <div className = "column4">
      <h3>Products</h3>
      <a href="/landing/#">Consulting</a>
      <a href="/landing/#">Prepaid Card</a>
      <a href="/landing/#">Insurance</a>
      <a href="/landing/#">Travel</a>
      </div>
      <div className = "column4">
      <h3>About Us</h3>
      <a href="/landing/#">About us</a>
      <a href="/landing/#">Leadership</a>
      <a href="/landing/#">Diversity and inclusion</a>
      <a href="/landing/#">Careers</a>
      <a href="/landing/#">Blog</a>
      <a href="/landing/#">News</a>
      </div>
      <div className = "column4">
      <h3>Contact</h3>
      <a href="/landing/#">Customer help</a>
      <a href="/landing/#">Community</a>
      <a href="/landing/#">Contact</a>
      <a href="/landing/#">Financial Statements</a>
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
