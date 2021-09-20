import girl from "../../images/girl2.png"

export function Footer() {
  return (
    <div className="footer">
      <img src={girl} alt="footer"/>
      <div className="column">
      <div className="row">
      <div className = "column4">
      <h3>Services</h3>
      <a href="/WDGIT/home/#">Plans</a>
      <a href="/WDGIT/home/#">Compare</a>
      <a href="/WDGIT/home/#">Open</a>
      <a href="/WDGIT/home/#">Payments</a>
      <a href="/WDGIT/home/#">Transfers</a>
      <a href="/WDGIT/home/#">Cashback</a>
      <a href="/WDGIT/home/#">Withdraw</a>
      <a href="/WDGIT/home/#">ATM</a>
      </div>
      <div className = "column4">
      <h3>Products</h3>
      <a href="/home/#">Consulting</a>
      <a href="/home/#">Prepaid Card</a>
      <a href="/home/#">Insurance</a>
      <a href="/home/#">Travel</a>
      </div>
      <div className = "column4">
      <h3>About Us</h3>
      <a href="/home/#">About us</a>
      <a href="/home/#">Leadership</a>
      <a href="/home/#">Diversity and inclusion</a>
      <a href="/home/#">Careers</a>
      <a href="/home/#">Blog</a>
      <a href="/home/#">News</a>
      </div>
      <div className = "column4">
      <h3>Contact</h3>
      <a href="/home/#">Customer help</a>
      <a href="/home/#">Community</a>
      <a href="/home/#">Contact</a>
      <a href="/home/#">Financial Statements</a>
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
