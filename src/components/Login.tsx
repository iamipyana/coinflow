import { Fragment } from "react";

function Login() {
  return (
    <Fragment>
      <h4>CashFlow | Login</h4>
      <form className="form">
        <input type="text" className="form-control" />
        <input type="text" className="form-control" />
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
    </Fragment>
  );
}

export default Login;
