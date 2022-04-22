import styled from "styled-components";
const HeaderWrapper = styled.div`
  justify-content: space-between;

  & > .appBar {
    background-color: #f7f6f4;
    margin-bottom: 80px;
    .toolbar {
      .listMenu1 {
        display: flex;
        .linkText {
          color: black;
        }
      }
      .listMenu {
        display: flex;
      }
    }
  }
`;
export { HeaderWrapper };
