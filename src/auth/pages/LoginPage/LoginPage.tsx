import './LoginPage.scss';

export const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="row">
        <div className="login-form-1">
          <h3>Login</h3>

          <p>
            Welcome to the private area. Please, provide login
            credentials to proceed and have access to all our services
          </p>

          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Usuario o Correo"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>

            <a href="#" className="forgot">
              <span className="little-title">Forgot Password?</span>
            </a>

            <div className="form-control">
              <input
                type="submit"
                className="btnSubmit"
                value="Login"
              />
            </div>

            <span className="little-title">
              Don't have account yet?
            </span>
          </form>
        </div>

        {/* <div className="login-form-2">
          <h3>Registro</h3>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
              />
            </div>

            <div className="form-group">
              <input
                type="submit"
                className="btnSubmit"
                value="Crear cuenta"
              />
            </div>
          </form>
        </div> */}
      </div>
    </div>
  );
};
