import styled from "styled-components";
const CKContainer = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 40px;
  .col {
    display: flex;
    color: #333333;
    align-items: center;
    justify-content: space-between;
  }
  .label {
    font-family: "Taviraj";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    letter-spacing: 0.03em;
    line-height: 60px;
  }
  .text {
    font-family: "Taviraj";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
  }
  .line {
    border-bottom: #333333 1px solid;
    margin: 24px 0px;
  }
  .select {
    width: 100%;
    outline: none;
    border: none;
    border-bottom: #333333 1px solid;
    font-family: "Taviraj";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    padding-bottom: 8px;
  }
  .container {
    width: 1110px;
    justify-content: space-between;
    flex-direction: row;
    display: flex;
    .block {
      .block-content {
        background-color: white;
        padding: 32px 32px 51px;
        width: 476px;
      }
      & > .text-title {
        font-weight: 600;
        font-size: 36px;
        line-height: 48px;
      }
      .text__bigger {
        font-size: 36px;
      }
      .label__smaller {
        font-weight: 400;
        font-size: 16px;
        line-height: 32px;
      }
      .text-input {
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        border: none;
        border-bottom: 1px solid black;
        width: 100%;
        padding: 0px;
        margin: 0px;
        padding-bottom: 8px;
        :focus-visible {
          border: none;
          outline: none;
          border-bottom: 1px solid black;
        }
        ::placeholder {
          color: #999999;
          font-family: "Taviraj";
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 24px;
        }
      }
      .col-non-space-between {
        display: flex;
        align-items: center;
        justify-content: space-between;
        & > .row {
          flex-basis: 50%;
        }
        .row-margin-left {
          margin-left: 24px;
        }
      }
    }
    .text-title {
      margin-bottom: 40px;
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 48px;
    }
    .buttons-container {
      display: flex;
      justify-content: space-between;
      padding: 50px 0px;
    }
    .button {
      padding: 15px 0px;
      cursor: pointer;
      color: white;
      font-family: "Taviraj";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 32px;
      border: #d84727 1px solid;
      width: 250px;
      justify-content: center;
      display: flex;
      background-color: #d84727;
      transition: 0.3s all ease;
      :hover {
        color: #d84727;
        border: #d84727 1px solid;
        background-color: #f7f6f4;
      }
    }
    .button-outline {
      color: #d84727;
      border: #d84727 1px solid;
      background-color: #f7f6f4;
      :hover {
        color: white;
        border: #d84727 1px solid;
        background-color: #d84727;
      }
    }
  }
`;
export { CKContainer };
