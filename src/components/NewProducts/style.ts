import styled from "styled-components";
const RNContainer = styled.div`
  .content {
    justify-content: space-between;
    flex-direction: row;
    display: flex;
    .row {
      flex-basis: 33%;

      .row-title {
        font-family: "Taviraj";
        font-size: 36px;
        font-weight: 400;
        line-height: 40px;
        color: #333333;
        padding-bottom: 8px;
        width: 200px;
        ::after {
          width: 90px;
          height: 2px;
          background-color: #333333;
          display: block;
          transition: all 0.3s ease-in-out 0s;
          margin-top: 8px;
          content: "";
        }
        :hover::after {
          width: 100%;
        }
      }

      .product-items {
        display: flex;
        text-decoration: none;
        font-family: "Taviraj";
        margin-top: 32px;
        transition: 1s;

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
            text-decoration: none;
            font-family: "Taviraj";
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
          .item-button {
            visibility: hidden;
            opacity: 0;
            transition: all 0.3s ease;
            transform: translateY(12px);
            cursor: pointer;
            width: 80px;
            display: flex;
            border: 1px solid white;
            color: white;
            background-color: #d84727;
            justify-content: center;
          }
          .item-button:hover {
            border: 1px solid #d84727;
            color: #d84727;
            background-color: #f7f6f4;
          }
        }
      }
      .product-items:hover {
        box-shadow: 0px 0px 15px 1px #888888;
      }
      .product-items:hover .item-button {
        visibility: visible;
        opacity: 1;
        transform: translateY(0);
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
