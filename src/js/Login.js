import React, { useState } from "react";
import { renderInputErrors, getInputClassName } from "./helpers/AppHelper";

export default Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
  }

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="card shadow-lg login-form">
        <div className="card-body p-4">
          <h1 className="h3 mb-3 text-center mt-2">
            Sign In
          </h1>
          <hr/>
          <div className="form-group p-2">
            <label>
              Username:
            </label>
            <input
              value={username}
              disabled={isLoading}
              className={getInputClassName(errors, 'username')}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            {renderInputErrors(errors, 'username')}
          </div>
          <div className="form-group p-2">
            <label>
              Password:
            </label>
            <input
              value={password}
              disabled={isLoading}
              className={getInputClassName(errors, 'password')}
              type="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <div className="mt-2"/>
          <div className="form-group p-2">
            <button
              className="btn btn-primary w-100"
              disabled={isLoading}
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
          <hr/>
        </div>
      </div>
    </div>
  );
}
