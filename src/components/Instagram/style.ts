import styled from "styled-components";
const IGContainer = styled.div`
  margin-top: 70px;
  margin-bottom: 75px;
  .title {
    color: #333333;
    font-family: "Taviraj";
    font-size: 36px;
    line-height: 40px;
    font-style: normal;
    width: 160px;
    margin-bottom: 40px;
    ::after {
      width: 80px;
      height: 2px;
      background-color: #333333;
      display: block;
      transition: all 0.3s ease-in-out 0s;
      margin-top: 8px;
      content: "";
    }
    :hover::after {
      width: 100%;
    }
  }
  .list-banner {
    display: flex;
  }
`;
export { IGContainer };
