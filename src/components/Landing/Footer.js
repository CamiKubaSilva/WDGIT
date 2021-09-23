import girl from "../../images/girl2.png"

export function Footer() {
  return (
    <div className="footerL">
      <img src={girl} alt="footer"/>
      <div className="column">
      <div className="row">
      <div className = "column4">
      <h3>Tarjetas</h3>
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
      <h3>Rewards</h3>
      <a href="/#">Benefits - Entry level</a>
      <a href="/#">Benefits - Std level</a>
      <a href="/#">Benefits - Premium level</a>
      <a href="/#">Benefits - Metal level</a>
      <h3>Give it back</h3>
      <a href="/#">Contribuye junto a nosotros</a>
      <a href="/#">Tu proyecto social</a>
      <a href="/#">Hace crecer tu ayuda</a>
      </div>
      <div className = "column4">
      <h3>Compañia</h3>
      <a href="/#">About us</a>
      <a href="/#">Leadership</a>
      <a href="/#">Diversity and inclusion</a>
      <a href="/#">Careers</a>
      <a href="/#">Blog</a>
      <a href="/#">News</a>
      </div>
      <div className = "column4">
      <h3>Preguntas</h3>
      <a href="/#">Customer help</a>
      <a href="/#">Community</a>
      <a href="/#">Contact</a>
      <a href="/#">Financial Statements</a>
      </div>
      </div>
      </div>
      </div>
  );
}
