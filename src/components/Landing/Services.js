import celular from "../../images/celular.png";
import girl1 from "../../images/girl1.png";
import google from "../../images/google.png";
import pngs from "../../images/pngs.png";

export function Services() {
  return (
    <div className="blockSL">
      <div className="violetDiv">
        <img className="imgGirl" src={girl1} alt="girl"></img>
        <div className="textRigth">
          <div className="pngs-img">
            <img className="imgTransf" src={pngs} alt="tranferir"></img>
            <div className="text-pngs">
              <p>transferir</p>
              <p>pagar</p>
              <p>movimientos</p>
            </div>
          </div>
          <div className="pagos">
            <h1>Realizá pagos</h1>
            <h2>tu día a día más simple</h2>
          </div>
        </div>
      </div>
      <div className="bottomCards">
        <div className="ligthVioletDiv">
          <img className="celImg" src={celular} alt="celular"></img>
        </div>
        <div className="smallVioletDivL">
          <div className="textCardSmall">
            <h1>Todo en un solo lugar</h1>
            <h2>Descargá la app</h2>
            <h2>desde tu telefono, gratis!</h2>
          </div>
          <div className="buttonImg">
            <button>Get Started</button>
            <img className="google" src={google} alt="google" />
          </div>
        </div>
      </div>
      <h2 className="acumula">acumulá monedas y accedé a más beneficios</h2>
      <hr id="rewards"></hr>
    </div>
  );
}
