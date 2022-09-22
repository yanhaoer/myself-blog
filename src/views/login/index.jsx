import React from "react";
import { Card } from "antd";
import LoginForm from "./login-form/login-form";
import "./index.less";

function Login() {
  return (
    <div className="LoginContainer">
      <div className="LoginContent">
        <Card title="Login" className="card-center">
          <LoginForm />
        </Card>
      </div>
    </div>
  );
}
export default Login;
