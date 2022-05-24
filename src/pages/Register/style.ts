import styled from "styled-components";

const RegisterForm = styled.form`
  max-width: 550px;
  width: 100%;
  margin: 2rem auto 4rem;
  background-color: white;
  padding: 20px 100px;
  margin-top: -30px;
  border-radius: 10px;
  h1 {
    color: orangered;
    display: flex;
    justify-content: center;
  }
  a {
    font-size: 13px;
    margin: none;
    padding: none;
    color: #d84727;
    display: flex;
    justify-content: flex-end;
  }
  input {
    height: 35px;
    width: 100%;
    padding: 7px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(220, 220, 220);
    margin-bottom: 1rem;
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    &:focus {
      border: 1px solid rgb(0, 208, 255);
    }
  }
  button {
    background-color: #d84727;
    color: white;
    border: 1px white solid;
    outline: none;
    border-radius: 5px;
    padding: 10px 10px;
    cursor: pointer;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 3px;
  }
`;
export { RegisterForm };
