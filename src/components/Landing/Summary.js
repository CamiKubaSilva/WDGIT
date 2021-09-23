import violetCards from "../../images/violetCards.png";
import violetForms from "../../images/violetForms.png";

export function Summary() {
  return (
    <div className="blockL">
      <div className="summaryL">
        <div className="violetCards">
          <img src={violetCards} alt="violetCards" />
        </div>
        <div className="centerText">
          <div className="topTitles">
            <div className="rowTitle">
              <h1 className="sign">+</h1>
              <h1 className="unaTarjeta">Una tarjeta</h1>
            </div>
            <h1 className="multiples">múltiples soluciones</h1>
          </div>
          <div className="blackText">
            <h1>
              Abri una cuenta <span>gratis</span> y accedé a todo lo que vos
              necesitas
            </h1>
          </div>
          <button>Get started</button>
        </div>
        <div className="violetForms">
          <img src={violetForms} alt="violetForms" />
        </div>
      </div>
      <div className="summaryBotL">
        <h2>Consultá tus gastos, hacé pagos y realizá transferencias</h2>
        <h1 id="tarjetas" className="violetText">+100% digital</h1>
        <h3>sin papeles, simple</h3>
      </div>
    </div>
  );
}
