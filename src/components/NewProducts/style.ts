import styled from "styled-components";
const RNContainer = styled.div`
  .content {
    justify-content: space-between;
    flex-direction: row;
    display: flex;
    .row {
      .row-title {
        font-family: "Taviraj";
        font-size: 36px;
        font-weight: 400;
        line-height: 40px;
        color: #333333;
        padding-bottom: 8px;
      }
      .row-border {
        border-bottom: 2px #333333 solid;
        width: 65px;
        margin-bottom: 52px;
      }
      .product-items {
        display: flex;
        text-decoration: none;
        font-family: "Taviraj";
        margin-top: 32px;
        .product-img {
          background-color: #f1ddc9;
          width: 131px;
          height: 131px;
          align-items: center;
          justify-content: center;
          display: flex;
        }
        .product-info {
          margin-left: 24px;
          .product-name {
            color: #333333;
            font-size: 24px;
            max-width: 190px;
            line-height: 32px;
          }
          .product-promotion {
            color: #777777;
            font-size: 16px;
            text-decoration: line-through;
            text-decoration-color: red;
          }
          .product-price {
            color: #222222;
            font-size: 28px;
            line-height: 40px;
            font-weight: "500";
          }
        }
      }
    }
  }
  .button-container {
    padding-top: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .border {
      width: 400px;
      border-bottom: 2px #999999 solid;
    }
    .button {
      padding: 16px 91px 16px 92px;
      border: 1px #d84727 solid;
      text-decoration: none;
      color: #d84727;
      font-family: "Taviraj";
      transition: 1s;
      margin: 0px 28px;
      :hover {
        color: white;
        border: 1px white solid;
        background-color: #d84727;
      }
    }
  }
`;
export { RNContainer };
