import styled from "styled-components";

const WatchesContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Taviraj:wght@200&display=swap");
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Taviraj", serif;
  }
  padding: 0rem 4rem;
  display: flex;
  justify-content: center;
  .products-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .product {
      width: 250px;
      max-width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem 0;
      .product-img {
        margin-bottom: 10px;
      }
      .product-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 125px;
      }
      .product h3 {
        color: #333333;
      }
      .product-info a {
        text-decoration: none;
        color: #333333;
      }
      .product-series {
        font-size: 16px;
        margin: 10px 0px;
        color: #555555;
      }
      .product-promotion {
        color: red;
        text-decoration: line-through red;
      }
      .product-promotion {
      }
      .product-button {
        cursor: pointer;
        background-color: #d84727;
        padding: 0px 10px;
        border-radius: 5px;
        color: white;
        visibility: hidden;
        opacity: 0;
        transition: all 0.3s ease;
        transform: translateY(12px);
      }
    }
    .product:hover {
      box-shadow: 0px 0px 15px 1px #888888;
    }
    .product:hover .product-button {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
export { WatchesContainer };
