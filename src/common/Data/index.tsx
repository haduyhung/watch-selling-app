export type dataSaleProducts = {
  id: number;
  name: string;
  discount: number;
  price: number;
  promotion: number;
  series: string;
  img: string;
};

export type dataProducts = {
  id: number;
  name: string;
  discount: number;
  price: number;
  promotion: number;
  series: string;
  img: string;
  color: string[];
};

export type productsCart = {
  id: number;
  name: string;
  discount: number;
  price: number;
  promotion: number;
  series: string;
  img: string;
  color: string[];
  cartQuantity: number;
};

export type dataBanners = {
  id: number;
  img: string;
};

export type user = {
  name: string;
  phone: number;
  email: string;
  token: string;
  _id: string;
  loginError: string;
  loginStatus: string;
  registerError: string;
  registerStatus: string;
  userLoader: boolean;
};

export type requestUser = {
  name: string;
  phone: number;
  email: string;
  password: string;
};

export type loginUserInfo = {
  phone: number;
  password: string;
};
