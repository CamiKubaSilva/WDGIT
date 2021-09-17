export function ContactUs() {
  return (
    <div className="block">
      <h1 className="grey">Contact <span className="pink">Us</span></h1>
      <form className="form">
        <div>
        <label>name</label>
        <input />
        <label>email</label>
        <input />
        <label>message</label>
        <input />
        </div>
        <div>
        <label>country</label>
        <input />
        <label>tel.</label>
        <input />
        <button>send</button>
        </div>
      </form>
    </div>
  );
}
