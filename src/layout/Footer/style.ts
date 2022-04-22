import styled from "styled-components";
const FooterWrapper = styled.div`
  .list-bank {
    padding: 40px 0px 23px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .item-bank {
      flex-basis: 20%;
      .link-item {
        display: flex;
        justify-content: center;
      }
    }
  }
  .info {
    padding: 40px 0px 75px;
    color: white;
    display: flex;
    font-family: "Taviraj";
    font-weight: 400;
    line-height: 27px;
    font-size: 16px;
    .row-info {
      flex-basis: 25%;
      .logo-images {
        padding: 5px 0px 20px;
        width: 300px;
      }
      .title {
        font-weight: 600;
        line-height: 41px;
        font-size: 24px;
      }
      .flexText {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 60px;
      }
      .border {
        border-bottom: 1px solid white;
        width: 60px;
        margin-bottom: 15px;
      }
      .info-bold {
        font-weight: 500;
        line-height: 35px;
        font-size: 20px;
      }
    }
  }
`;
export { FooterWrapper };
