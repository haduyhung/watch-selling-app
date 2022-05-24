import styled from "styled-components";
const PMContainer = styled.div`
  display: flex;
  justify-content: center;
  .container {
    margin-top: 40px;
    .label {
      font-family: "Taviraj";
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 60px;
      min-width: 230px;
      color: #333333;
    }
    .label-credit {
      font-family: "Taviraj";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 32px;
    }
    .input-credit {
      size: 30px;
    }
    .label--small {
      line-height: 32px;
    }
    .text {
      font-family: "Taviraj";
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 60px;
    }
    .text-Nunito {
      color: #777777;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }
    .text1 {
      font-family: "Taviraj";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 32px;
    }
    .col-credit {
      display: flex;
      justify-content: space-between;
      .col-items {
        display: flex;
      }
    }
    .radio-credit {
      width: 24px;
      height: 24px;
    }
    .block {
      width: 1110px;
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
      .block-non-flex {
      }
      .block-child {
        display: flex;
        margin-left: 30px;
      }
      .content-payment {
        margin-top: 30px;
      }
      .content {
        background-color: white;
        width: 476px;
        padding: 24px 32px;
        .title {
          font-family: "Taviraj";
          font-style: normal;
          font-weight: 600;
          font-size: 36px;
          line-height: 48px;
        }
        .col {
          display: flex;
        }
        .col-title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .text--red {
          color: red;
          font-weight: 600;
          font-size: 24px;
          line-height: 48px;
        }
        .text-payment-detail {
          font-family: "Nunito";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 32px;
        }
        .box {
          padding-top: 40px;
          .col {
            display: flex;
            .text-big {
              font-size: 36px;
            }
          }
          .col-flex-start {
            display: flex;
            align-items: flex-start;
            margin-bottom: 24px;
          }
          .border {
            border-bottom: #333333 1px solid;
            width: 100%;
            margin: 48px 0px 24px;
          }
        }
      }
      .content__big {
        width: 1046px;
      }
    }
    .box-button {
      display: flex;
      justify-content: space-between;
      margin-bottom: 84px;
    }
    .button {
      width: 250px;
      height: 61px;
      color: white;
      background-color: #d84727;
      font-family: "Taviraj";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border: #d84727 1px solid;
      transition: 0.3s ease all;
      :hover {
        color: #d84727;
        background-color: #f7f6f4;
      }
    }
  }
`;
export { PMContainer };
