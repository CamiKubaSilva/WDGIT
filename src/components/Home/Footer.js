import girl from "../../images/girl2.png"

export function Footer() {
  return (
    <div className="footer">
      <img src={girl} alt="footer"/>
      <div className="column">
      <div className="row">
      <div className = "column4">
      <h3>Services</h3>
      <a href="/#">Plans</a>
      <a href="/#">Compare</a>
      <a href="/#">Open</a>
      <a href="/#">Payments</a>
      <a href="/#">Transfers</a>
      <a href="/#">Cashback</a>
      <a href="/#">Withdraw</a>
      <a href="/#">ATM</a>
      </div>
      <div className = "column4">
      <h3>Products</h3>
      <a href="/#">Consulting</a>
      <a href="/#">Prepaid Card</a>
      <a href="/#">Insurance</a>
      <a href="/#">Travel</a>
      </div>
      <div className = "column4">
      <h3>About Us</h3>
      <a href="/#">About us</a>
      <a href="/#">Leadership</a>
      <a href="/#">Diversity and inclusion</a>
      <a href="/#">Careers</a>
      <a href="/#">Blog</a>
      <a href="/#">News</a>
      </div>
      <div className = "column4">
      <h3>Contact</h3>
      <a href="/#">Customer help</a>
      <a href="/#">Community</a>
      <a href="/#">Contact</a>
      <a href="/#">Financial Statements</a>
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
