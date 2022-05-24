import styled from "styled-components";
const CFContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  .text {
    font-family: "Taviraj";
    font-style: normal;
  }
  .container {
    width: 1110px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 86px;
    .col {
      align-items: center;
      display: flex;
    }
    .block {
      padding: 32px;
      width: 476px;
      background-color: white;
      .col-top {
        margin-bottom: 32px;
        align-items: center;
        display: flex;
        & > div {
          margin-left: 10px;
          margin-right: 40px;
        }
      }
      .box {
        margin-bottom: 24px;
        .text--small {
          font-weight: 500;
          font-size: 24px;
          line-height: 48px;
        }
        .text--gray {
          font-weight: 500;
          font-size: 20px;
          line-height: 24px;
          color: #999999;
        }
        .text-left {
          font-weight: 500;
          font-size: 24px;
          line-height: 48px;
          min-width: 230px;
        }
        .text-left--small {
          font-weight: 400;
          font-size: 20px;
          line-height: 32px;
          min-width: 199px;
        }
        .text-right {
          font-weight: 500;
          font-size: 24px;
          line-height: 48px;
        }
        .text-right--big {
          font-weight: 500;
          font-size: 36px;
          line-height: 60px;
        }
        .text-right--small {
          font-weight: 400;
          font-size: 20px;
          line-height: 32px;
        }
        .border {
          border-bottom: 1px #333333 solid;
          width: 100%;
          margin: 16px 0px;
        }
      }
    }
    .block-justify-center {
      & > .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        & > div {
          margin: auto;
        }
        .title {
          font-family: "Taviraj";
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 32px;
          color: #333333;
          margin-top: 40px;
        }
        .text-Nunito {
          font-family: "Nunito";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #333333;
          margin-top: 16px;
        }
        .button {
          width: 367px;
          height: 68px;
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
          margin-top: 60px;
          :hover {
            color: #d84727;
            background-color: #f7f6f4;
          }
        }
      }
    }
  }
`;
export { CFContainer };
