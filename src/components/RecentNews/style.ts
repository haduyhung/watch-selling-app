import styled from "styled-components";
const RNContainer = styled.div`
  .title {
    color: #333333;
    font-family: "Taviraj";
    font-size: 36px;
    line-height: 40px;
    font-style: normal;
  }
  .border {
    border-bottom: 2px #333333 solid;
    width: 65px;
    margin-bottom: 180px;
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
