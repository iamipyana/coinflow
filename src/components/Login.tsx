import { Fragment } from "react";

function Login() {
  return (
    <Fragment>
      <div className="card col-md-4">
        <div className="card-header text-center">
          <h4>CashFlow | Login</h4>
        </div>
        <div className="card-body">
          <form className="form">
            <div className="form-group">
              <label>Username</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="text" className="form-control" />
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-2"
              value="Login"
            >
              Login
            </button>
            Have no account?<a href="#">Register Here</a>
          </form>
        </div>
        <div className="card-footer text-muted text-center">@2023</div>
      </div>
    </Fragment>
  );
}

export default Login;
