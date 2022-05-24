import styled from "styled-components";
const DPContainer = styled.div`
  color: black;
  justify-content: center;
  .routerText {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    margin-bottom: 50px;
    .routerTextWrapper {
      display: flex;
      width: 1100px;
      .routerText-red {
        color: red;
      }
    }
  }
  .content {
    display: flex;
    justify-content: center;
    .background-content {
      background-color: #f1ddc9;
    }
    .content-img {
      display: flex;
      align-items: center;
      width: 100%;
      .img-col1 {
        justify-content: center;
        flex: 0 0 40%;
        padding: 12px 0 31px;
        background-color: #f1ddc9;
        .img-detail {
          display: flex;
          justify-content: center;
          margin: 12px 0;
        }
        .img-main {
          position: absolute;
          justify-content: center;
          left: 400px;
        }
      }
      .img-col2 {
        flex: 0 0 60%;
        padding-left: 200px;
        font-family: "Taviraj";
        font-style: normal;
        .nameProduct {
          font-weight: 400;
          color: #333333;
          font-size: 60px;
          max-width: 413px;
        }
        .priceProduct {
          font-weight: 400;
          font-size: 20px;
          line-height: 28px;
          text-decoration: line-through;
          text-decoration-color: red;
        }
        .lastPrice {
          font-weight: 500;
          font-size: 24px;
          line-height: 41px;
        }
        .chooseModel {
          font-weight: 600;
          font-size: 16px;
          line-height: 27px;
        }
        .modals-img {
        }
        .cartButtons {
          display: flex;
          align-items: center;
          .minus {
            border: 1px #d84727 solid;
            text-transform: none;
            font-family: "Taviraj";
            width: 30px;
            height: 30px;
            display: flex;
            font-size: 20px;
            justify-content: center;
            align-items: center;
            color: black;
            cursor: pointer;
            margin-right: 10px;
            :hover {
              background-color: #d84727;
              color: white;
              border: 1px white solid;
              transition: 0.5s;
            }
          }
          .plus {
            border: 1px #d84727 solid;
            background-color: #d84727;
            text-transform: none;
            font-family: "Taviraj";
            color: white;
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            margin-right: 32px;
            margin-left: 10px;
            cursor: pointer;
            align-items: center;
            :hover {
              background-color: white;
              color: black;
              border: 1px #d84727 solid;
              transition: 0.5s;
            }
          }
          .addCart {
            background-color: #d84727;
            border-radius: 0px;
            text-transform: none;
            font-family: "Taviraj";
            color: white;
            font-size: 20px;
            line-height: 34px;
            width: 208px;
            height: 62px;
            justify-content: space-between;
            padding: 14px 29px 14px 35px;
          }
          .cicil {
            margin-left: 16;
            border: 1px solid #d84727;
            width: 140px;
            height: 62px;
            border-radius: 0px;
            margin-left: 16px;
          }
        }
      }
    }
  }
  .info {
    .navbar {
      display: flex;
      justify-content: center;
      font-family: "Taviraj";
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      .list-menu {
        width: 1200px;
        display: flex;
        line-height: 32px;
        border-bottom: 2px solid #999999;
        padding-bottom: 12px;
        justify-content: space-around;
      }
    }
  }
  .info-container {
    display: flex;
    justify-content: center;
    .DContainer {
      width: 1050px;
      font-style: normal;
      font-weight: 400;
      .detail-title {
        font-family: "Taviraj";
        color: #333333;
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 8px;
      }
      .detail-content {
        font-family: "Nunito";
        color: #555555;
        font-size: 16px;
        line-height: 28px;
        padding-bottom: 24px;
      }
      .parameter-product {
        display: flex;
        justify-content: center;
      }
    }
  }
  /* HIDE RADIO */
  [type="radio"] {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* IMAGE STYLES */
  [type="radio"] + img {
    cursor: pointer;
    border-radius: 50px;
    border: 1px solid #f7f6f4;
    :hover {
      border: 1px solid red;
    }
  }

  /* CHECKED STYLES */
  [type="radio"]:checked + img {
    outline: 2px solid #f00;
    border-radius: 50px;
  }
  /* HIDE RADIO */
  [type="radio"] {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* IMAGE STYLES */
  [type="radio"] + img {
    cursor: pointer;
    border-radius: 50px;
    border: 1px solid #f7f6f4;
    :hover {
      border: 1px solid red;
    }
  }

  /* CHECKED STYLES */
  [type="radio"]:checked + img {
    outline: 2px solid #f00;
    border-radius: 50px;
  }
  [type="radio"]:hover + img {
    transition: 2s;
    transform: rotateZ(-180deg) rotateX(10deg);
  }
`;
export { DPContainer };
