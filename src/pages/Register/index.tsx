import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { requestUser } from "../../common/Data";
import { registerUser } from "../../features/authSlice";
import { AppDispatch } from "../../features/store";
import { RegisterForm } from "./style";

type Props = {};

const Register = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const [filledUser, setFilledUser] = useState<requestUser>({
    name: "",
    phone: 0,
    email: "",
    password: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(registerUser(filledUser));
  };
  return (
    <RegisterForm onSubmit={handleSubmit}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setFilledUser({ ...filledUser, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Phone Number"
        onChange={(e) =>
          setFilledUser({ ...filledUser, phone: Number(e.target.value) })
        }
      />
      <input
        type="text"
        placeholder="Email"
        onChange={(e) =>
          setFilledUser({ ...filledUser, email: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setFilledUser({ ...filledUser, password: e.target.value })
        }
      />
      <button>Register</button>
      <Link to="/login">Đăng nhập / Đã có tài khoản</Link>
    </RegisterForm>
  );
};

export default Register;
