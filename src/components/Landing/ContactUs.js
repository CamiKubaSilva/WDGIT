import equalCard from "../../images/equalCard.png"
import violetForms2 from "../../images/violetForms2.png"

export function ContactUs() {
  return (
    <div className="blockCL">
      <div className="titlesContact">
        <h2>Ayudanos a ayudar Juntos contribuimos!</h2>
        <h1>+ Giveback</h1>
        <h3>Transformamos una parte de las monedas en una causa social y vos podes ser parte!</h3>
      </div>
      <div className="equalCard">
      <img src={equalCard} alt="equalCard"></img>
      <div>
        <h1>Tu ayuda. Nuestro compromiso!</h1>
        <h2>Mientras acumulás monedas, contribuís a una causa social!</h2>
        <div className="href">
        <a href="/tarjetas/#">conocé más</a>
        </div>
      </div>
      </div>
      <button id="footer">Get started</button>
    </div>
  );
}
