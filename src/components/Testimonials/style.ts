import styled from "styled-components";
const TContainer = styled.div`
  .content {
    display: flex;
    margin-top: 150px;
    .image {
      box-shadow: -150px -50px #f1ddc9;
    }
    .button {
      display: flex;
      align-items: center;
      & > div {
        margin-right: 26px;
        & > img {
          transition: 2s;
          :hover {
          }
        }
      }
    }
    .texts {
      margin-left: 104px;
      font-family: "Taviraj";
      .title {
        font-size: 36px;
        font-weight: 400;
        line-height: 40px;
        color: #333333;
        padding-bottom: 8px;
      }
      .text1 {
        font-family: "Nunito";
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        max-width: 511px;
        text-align: justify;
        text-justify: inter-word;
        margin-bottom: 32px;
      }
      .text2 {
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 2px;
      }
      .text3 {
        font-weight: 300;
        font-size: 16px;
        color: #777777;
        line-height: 32px;
      }
      .border {
        border-bottom: 2px #333333 solid;
        width: 128px;
        margin-bottom: 54px;
        font-style: normal;
      }
    }
  }
`;
export { TContainer };
