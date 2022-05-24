import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "./api";
import jwtDecode from "jwt-decode";
import { loginUserInfo, requestUser, user } from "../common/Data";

const initialState: user = {
  token: localStorage.getItem("token")!,
  name: "",
  phone: 0,
  email: "",
  _id: "",
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  userLoader: false,
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (loginUser: loginUserInfo, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${url}/login`, {
        email: loginUser.phone,
        password: loginUser.password,
      });
      localStorage.setItem("token", token.data);
      return token.data;
    } catch (err: any) {
      console.log(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (requestUser: requestUser, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${url}/register`, {
        name: requestUser.name,
        email: requestUser.email,
        phone: requestUser.phone,
        password: requestUser.password,
      });
      localStorage.setItem("token", token.data);
      return token.data;
    } catch (err: any) {
      console.log(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser(state: user) {
      const token = state.token;
      if (token) {
        const decodedUser: user = jwtDecode(token);
        console.log("user", decodedUser);
        return {
          ...state,
          token,
          name: decodedUser.name,
          phone: decodedUser.phone,
          email: decodedUser.email,
          _id: decodedUser._id,
          userLoader: true,
        };
      }
    },
    logoutUser(state: user) {
      localStorage.removeItem("token");

      return {
        ...state,
        token: "",
        name: "",
        phone: 0,
        email: "",
        _id: "",
        registerStatus: "",
        registerError: "",
        loginStatus: "",
        loginError: "",
        userLoader: false,
      };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      return { ...state, registerStatus: "pending" };
    });

    builder.addCase(registerUser.fulfilled, (state, action) => {
      if (action.payload) {
        const decodedUser: user = jwtDecode(action.payload);
        return {
          ...state,
          token: action.payload,
          name: decodedUser.name,
          email: decodedUser.email,
          _id: decodedUser._id,
          registerStatus: "success",
        };
      } else return state;
    });

    builder.addCase(
      registerUser.rejected,
      (state, action: PayloadAction<any>) => {
        console.log(action);
        return {
          ...state,
          registerStatus: "rejected",
          registerError: action.payload,
        };
      }
    );
    builder.addCase(loginUser.pending, (state, action) => {
      return { ...state, registerStatus: "pending" };
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        const decodedUser: user = jwtDecode(action.payload);

        return {
          ...state,
          token: action.payload,
          name: decodedUser.name,
          email: decodedUser.email,
          _id: decodedUser._id,
          loginStatus: "success",
        };
      } else return state;
    });

    builder.addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
      return {
        ...state,
        loginStatus: "rejected",
        loginError: action.payload,
      };
    });
  },
});

export const { loadUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
