import styled from "styled-components";
const MDContainer = styled.div`
  .title {
    font-family: "Taviraj";
    font-size: 36px;
    font-weight: 500;
    line-height: 40px;
    margin-bottom: 55px;
    display: block;
    width: 230px;
    ::after {
      content: "";
      margin-top: 8px;
      width: 100px;
      height: 1px;
      background-color: #333333;
      display: block;
      transition: all 0.3s ease-in-out 0s;
    }
    :hover::after {
      width: 230px;
    }
  }
  .content {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 400px;
    .list-item-container {
      justify-content: center;
      display: flex;
      flex-basis: 25%;
      .list-item {
        padding: 0px 20px;
        height: 381px;
        background-color: white;
        font-family: "Taviraj";
        font-style: normal;

        .lbl-item {
          max-width: 200px;
          .link1 {
            font-family: "Taviraj";
            text-decoration: none;
            color: #333333;
            font-weight: 500;
            font-size: 24px;
            line-height: 32px;
          }
          .link2 {
            font-family: "Taviraj";
            text-decoration: none;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #777777;
          }
          .link3 {
            font-family: "Taviraj";
            text-decoration: line-through red;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #777777;
          }
        }
        .image-item {
          height: 221px;
          transform: translateY(0px);
        }
        .block-button {
          transform: translateY(0);
          /* visibility: hidden; */
          opacity: 0;
          height: 39px;
          display: flex;
          justify-content: space-between;
          .button-icon {
            border: 1px #d84727 solid;
            width: 39px;
            align-items: center;
            justify-content: center;
            display: flex;
            cursor: pointer;
          }
          .button-item {
            width: 80%;
            color: white;
            background-color: #d84727;
            align-items: center;
            justify-content: center;
            display: flex;
            border: 1px #d84727 solid;
            align-items: center;
            margin-left: 8px;
            cursor: pointer;
          }
          .button-item:hover {
            background-color: #f7f6f4;
            color: #d84727;
          }
        }
      }
      .list-item:hover {
        box-shadow: 0px 0px 10px 1px black;
        height: 412px;
        transition: all 0.3s ease;
      }
      .list-item:hover .image-item {
        box-shadow: 0px 0px 10px 1px black;
        transform: translateY(-50px);
        transition: all 0.6s ease;
      }
      .list-item:hover .block-button {
        transform: translateY(20px);
        transition: all 0.3s ease;
        /* visibility: visible; */
        opacity: 1;
      }
    }
  }
`;
export { MDContainer };
