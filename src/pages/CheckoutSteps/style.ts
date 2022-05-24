import styled from "styled-components";
const CSContainer = styled.div`
  .text {
    font-family: "Taviraj";
    font-style: normal;
    text-decoration: none;
  }
  .menu {
    display: flex;
    justify-content: center;
    .menu-item {
      justify-items: center;
      & > div {
        justify-content: center;
        display: flex;
        & > .item-link {
          color: #d84727;
          font-weight: 600;
          font-size: 20px;
          line-height: 24px;
        }
        & > .item-link-non-action {
          color: #999999;
        }
      }
    }
    .line {
      width: 114px;
      border-bottom: 2px #333333 solid;
      margin: 0px 20px;
    }
  }
`;
export { CSContainer };
