import styled from "styled-components";
const RNContainer = styled.div`
  .title {
    color: #333333;
    font-family: "Taviraj";
    font-size: 36px;
    line-height: 40px;
    font-style: normal;
    margin-bottom: 180px;
    width: 200px;
    ::after {
      width: 50px;
      height: 2px;
      background-color: #333333;
      display: block;
      transition: all 0.3s ease-in-out 0s;
      margin-top: 8px;
      content: "";
    }
    :hover::after {
      width: 210px;
    }
  }
  .content {
    display: flex;
    font-family: "Taviraj";
    font-weight: 400;
    .question {
      margin-right: 60px;
      .question-top {
        font-size: 20px;
        line-height: 40px;
        color: #777777;
      }
      .question-bottom {
        font-size: 36px;
        line-height: 48px;
        color: #333333;
        margin-bottom: 60px;
      }
      .button {
        border: 2px solid #d84727;
        color: #d84727;
        text-decoration: none;
        padding: 15px 47px 16px;
        transition: 1s;

        :hover {
          color: white;
          background-color: #d84727;
          border: 2px solid white;
        }
      }
    }
    .image {
      margin-top: -150px;
      box-shadow: 350px -50px #f1ddc9;
    }
  }
`;
export { RNContainer };
