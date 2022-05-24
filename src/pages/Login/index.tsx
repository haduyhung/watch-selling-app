import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUserInfo } from "../../common/Data";
import { loginUser } from "../../features/authSlice";
import { AppDispatch } from "../../features/store";
import { LoginContainer } from "./style";

type Props = {};

const Login = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const [filledUser, setFilledUser] = useState<loginUserInfo>({
    phone: 0,
    password: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(loginUser(filledUser));
  };

  return (
    <LoginContainer onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Phone Number"
        onChange={(e) =>
          setFilledUser({ ...filledUser, phone: Number(e.target.value) })
        }
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setFilledUser({ ...filledUser, password: e.target.value })
        }
      />
      <button>Login</button>
      <Link to="/register">Đăng ký / Chưa có tài khoản?</Link>
    </LoginContainer>
  );
};

export default Login;
