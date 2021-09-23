import girl from "../../images/girl2.png"

export function Footer() {
  return (
    <div className="footerL">
      <img src={girl} alt="footer"/>
      <div className="column">
      <div className="row">
      <div className = "column4">
      <h3>Tarjetas</h3>
      <a href="/tarjetas/#">Plans</a>
      <a href="/tarjetas/#">Compare</a>
      <a href="/tarjetas/#">Open</a>
      <a href="/tarjetas/#">Payments</a>
      <a href="/tarjetas/#">Transfers</a>
      <a href="/tarjetas/#">Cashback</a>
      <a href="/tarjetas/#">Withdraw</a>
      <a href="/tarjetas/#">ATM</a>
      </div>
      <div className = "column4">
      <h3>Rewards</h3>
      <a href="/tarjetas/#">Benefits - Entry level</a>
      <a href="/tarjetas/#">Benefits - Std level</a>
      <a href="/tarjetas/#">Benefits - Premium level</a>
      <a href="/tarjetas/#">Benefits - Metal level</a>
      <h3>Give it back</h3>
      <a href="/tarjetas/#">Contribuye junto a nosotros</a>
      <a href="/tarjetas/#">Tu proyecto social</a>
      <a href="/tarjetas/#">Hace crecer tu ayuda</a>
      </div>
      <div className = "column4">
      <h3>Compañia</h3>
      <a href="/tarjetas/#">About us</a>
      <a href="/tarjetas/#">Leadership</a>
      <a href="/tarjetas/#">Diversity and inclusion</a>
      <a href="/tarjetas/#">Careers</a>
      <a href="/tarjetas/#">Blog</a>
      <a href="/tarjetas/#">News</a>
      </div>
      <div className = "column4">
      <h3>Preguntas</h3>
      <a href="/tarjetas/#">Customer help</a>
      <a href="/tarjetas/#">Community</a>
      <a href="/tarjetas/#">Contact</a>
      <a href="/tarjetas/#">Financial Statements</a>
      </div>
      </div>
      </div>
      </div>
  );
}
