import React from "react";

import { Button, Checkbox, Form, Input, message } from "antd";

import { MailOutlined, LockOutlined } from "@ant-design/icons";

import { userLogin } from "../../service/auth/authService";

import bg from "../../asset/images/bg-blue.jpg";
import logo from "../../asset/images/logo.png";
import useAppLoading from "../../hook/useAppLoading";

import "../../styles/index.scss";

const Login = () => {
  var CryptoJS = require("crypto-js");
  const [, setAppLoading] = useAppLoading();
  const onFinish = (values: any) => {
    const SALT =
      "n3beYvkHzZimLUrMDWRWMXFknFulI6AKZ1qunqiIznjT5JjsJ80VbPbUOaJMWiJBmx9HzylJRvURI7AVHoGENEu9v6lT7F5fRWtc";

    const parsedSalt = CryptoJS.enc.Base64.parse(SALT);
    const resultPassword = CryptoJS.PBKDF2(values.password, parsedSalt, {
      keySize: 64 / 4,
      iterations: 1000,
      hasher: CryptoJS.algo.SHA512,
    });
    const realPass = CryptoJS.enc.Base64.stringify(resultPassword);
    // return CryptoJS.enc.Base64.stringify(result);
    const params = {
      userName: values.userName,
      password: realPass,
    };
    console.log(params);
    userLogin(params)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="section flex items-center justify-center"
    >
      <div className="w-[75%] h-[500px] ] ">
        <Form
          name="basic"
          // labelCol={{ span: 8 }}
          wrapperCol={{ span: 32 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="p-5 bg-white">
            <div className="flex items-center my-[4rem]">
              <div className="w-1/2">
                <img className="w-[40%] mx-auto " src={logo} alt="" />
                <p className="mt-[2rem] text-center w-[50%] mx-auto text-[#138989] font-bold">
                  NỀN TẢNG BẢO HÀNH BẢO TRÌ MÁY MÓC THIẾT BỊ
                </p>
              </div>
              <div className="w-1/2">
                <div className="">
                  <h1 className="text-center font-bold mb-[2rem]">ĐĂNG NHẬP</h1>
                  <div className="w-full  mb-[2rem]">
                    <div className="w-full ml-[40px]">
                      <Form.Item
                        name="username"
                        className="mb-[2rem] w-[80%] "
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng đăng nhập tài khoản!",
                          },
                        ]}
                      >
                        <Input
                          prefix={
                            <MailOutlined style={{ marginRight: "2rem" }} />
                          }
                          placeholder="Email /Tên tài khoản(*)"
                        />
                      </Form.Item>
                    </div>
                    <div className="w-full ml-[40px]">
                      <Form.Item
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng đăng nhập mật khẩu!",
                          },
                        ]}
                        className="mb-[2rem] w-[80%]"
                      >
                        <Input.Password
                          prefix={
                            <LockOutlined style={{ marginRight: "2rem" }} />
                          }
                          placeholder="Mật khẩu (*)"
                        />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="w-full ml-[40px]">
                    <button
                      // onClick={() => navigate("/main")}
                      className="w-[80%] h-[36px] bg-[#138989] text-white text-[16px] font-semibold rounded-md"
                    >
                      Đăng Nhập
                    </button>
                  </div>
                  <div className="w-full flex"></div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
