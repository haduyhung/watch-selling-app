import styled from "styled-components";
const MoWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Taviraj:wght@200&display=swap");
  h2{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .list-product {
    overflow: auto;
    height: 400px;
    padding-right: 32px;
    ::-webkit-scrollbar-track{
    }
    ::-webkit-scrollbar {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      background-color: #F5F5F5;
      width: 3px;
    }
    ::-webkit-scrollbar-thumb{
      border-radius: 10px;
	    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	    background-color: #d93f3f;
    }
    *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Taviraj", serif;
    }
    .button-clear{
      color: red;
      cursor: pointer;
      :hover{
        text-decoration: underline 1px;
      }
}
      .product-item {
        padding: 40px 0px;
        border-bottom: #999999 1px solid;
        display: flex;
        :first-child{
          padding-top: 0px;
        }
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
            align-items: flex-end;
            display: flex;
            flex-direction: column;
            .tit-select {
              font-weight: 500;
              font-size: 16px;
              line-height: 24px;
            }
            .product-select {
              cursor: "pointer";
              position: "relative";
              font-family: "Taviraj";
              width: 313px;
              height: 42px;
              padding: 0px 16px;
              border-radius: 0;
              border: 1px #333333 solid;
              color: #999999;
              outline: none;
              font-size: 20px;
              .select-item {
                width: 313px;
                height: 42px;
                cursor: pointer;
                position: relative;
                font-family: "Taviraj";
                }
            }
            .edit-cart {
              display: flex;
              margin-top: 36px;
              color: #333333;
              font-family: "Taviraj";
              font-size: 24px;
              font-weight: 600;
              justify-content: space-between;
              align-items: center;
              width: 100%;
              .edit-button {
                background-color: #d93f3f;
                border: 1px #d93f3f solid;
                cursor: pointer;
                width: 30px;
                height: 30px;
                :hover {
                  background-color: white;
                  transition: 0.3s all ease;
                }
              }
              .edit-button-trash {
                width: 30px;
                height: 30px;
                border: 1px #d93f3f solid;
                cursor: pointer;
                color: #d93f3f;
                background: none;
                :hover {
                  background-color: #d93f3f;
                  transition: 0.3s all ease;
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
    padding-right: 32px;
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
          outline: none;
          font-size: 20px;
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
        transition: 0.3s all ease;
        :hover {
          background-color: white;
          border: 2px #d93f3f solid;
          color: #d93f3f;
        }
      }
  }
  
`;
export { MoWrapper };
