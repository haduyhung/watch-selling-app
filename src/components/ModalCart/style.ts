import styled from "styled-components";
const MoWrapper = styled.div`
  width: 100%;

  .list-product {
    .link-item {
      color: #333333;
      font-family: "Taviraj";
      text-decoration: none;
      .product-item {
        margin-bottom: 40px;
        padding-bottom: 40px;
        border-bottom: #999999 1px solid;
        display: flex;
        .product-img {
          background-color: #f1ddc9;
          width: 164px;
          height: 144px;
          display: flex;
          justify-content: center;
          margin-right: 32px;
          display: flex;
          justify-content: center;
          align-items: center;
          .pr-img {
            max-width: 100px;
            max-height: 100px;
          }
        }
        .product-info {
          width: 100%;
          display: flex;
          justify-content: space-between;
          .info-left {
            .product-name {
              font-weight: 400;
              font-size: 20px;
              line-height: 24px;
              margin-bottom: 2px;
            }
            .product-promotion {
              text-decoration: line-through;
              font-weight: 400;
              font-size: 16px;
              line-height: 24px;
              text-decoration-color: red;
              color: #777777;
            }
            .product-price {
              font-weight: 600;
              font-size: 24px;
              line-height: 32px;
              margin-bottom: 10px;
            }
            .product-series {
            }
          }
          .info-right {
            .tit-select {
              font-weight: 500;
              font-size: 16px;
              line-height: 24px;
              .color-select {
                width: 313px;
                height: 42px;
                cursor: pointer;
                position: relative;
                font-family: "Taviraj";
                background-color: blue;
                .select-item {
                  background-color: green;
                }
              }
            }
            .edit-cart {
              margin-top: 36px;
              color: #333333;
              font-family: "Taviraj";
              font-size: 24px;
              font-weight: 600;
              .edit-button {
                background-color: #d93f3f;
                border: 1px #d93f3f solid;
                cursor: pointer;
                width: 30px;
                height: 30px;
                margin: 0px 18px;
                :hover {
                  background-color: white;
                  transition: 1s;
                }
              }
              .edit-button-trash {
                width: 30px;
                height: 30px;
                border: 1px #d93f3f solid;
                cursor: pointer;
                color: #d93f3f;
                margin: 0px 18px;
                :hover {
                  background-color: #d93f3f;
                  transition: 1s;
                  color: white;
                }
              }
            }
          }
        }
      }
    }
  }
  .checkout-block {
    font-family: "Taviraj";
    font-size: 20px;
    line-height: 24px;
    .checkout-col1 {
      display: flex;
      justify-content: space-between;
      .col1-left {
        display: flex;
        flex-basis: 50%;
        align-items: center;
        .left-input {
          width: 255px;
          height: 42px;
        }
        .left-label {
          margin-right: 32px;
        }
        .left-label2 {
          margin-left: 16px;
          color: green;
        }
      }
      .col1-right {
        display: flex;
        align-items: center;
        .right-label {
          font-weight: 400;
          font-size: 20px;
          line-height: 24px;
          margin-right: 32px;
        }
        .right-block {
          .label-promotion {
            font-size: 16px;
            line-height: 24px;
            display: flex;
            justify-content: end;
            color: "#777777";
            text-decoration: line-through red;
          }
          .label-price {
            font-weight: 600;
            font-size: 24px;
            line-height: 32px;
          }
        }
      }
    }
    .checkout-col2 {
      margin-top: 55px;
      .checkout-button {
        color: white;
        background-color: #d93f3f;
        border: 1px #d93f3f solid;
        width: 100%;
        height: 68px;
        font-weight: 600;
        font-size: 24px;
        line-height: 24px;
        transition: 1s;
        :hover {
          background-color: white;
          border: 2px #d93f3f solid;
          color: #d93f3f;
        }
      }
    }
  }
`;
export { MoWrapper };
