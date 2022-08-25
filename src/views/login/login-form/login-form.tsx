import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import "./login-form.css";

function Login() {
  const FormItem = Form.Item;

  // 表单提交函数
  const handleSubmit = (v: any) => {
    if (v.username === "admin" && v.password === "123456") {
      console.log("Received values of form: ", v);
    } else {
      console.log("用户名或密码错误!");
    }
  };

  return (
    <div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={handleSubmit}
      >
        <FormItem
          name="username"
          rules={[
            {
              required: true,
              message: "请输入您的用户名!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="请输入用户名"
          />
        </FormItem>
        <FormItem
          name="password"
          rules={[
            {
              required: true,
              message: "请输入您的密码!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="请输入密码"
          />
        </FormItem>
        <FormItem>
          <FormItem name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住我</Checkbox>
          </FormItem>

          <a className="login-form-forgot" href="!#">
            忘记密码
          </a>
        </FormItem>

        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            登录
          </Button>
          &nbsp; 和 <a href="!#">点击注册</a>
        </FormItem>
      </Form>
    </div>
  );
}

export default Login;
