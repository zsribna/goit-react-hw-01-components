import styled from "styled-components"

export const Li = styled.li`
  position: relative;
  border: 1px rgb(209, 209, 209) solid;
  display: flex;
  height: 70px;
  align-items: center;
  box-shadow: 3px 3px 7px -2px rgba(0,0,0,0.45);
`;

export const Status = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 0 10px 0 10px;
  background-color: ${({ status }) => {
    if (status === true) {
      return "#56f000"
    } else if (status === false) {
      return "#ff3838"
    }
  }};
`;

export const Image = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 10px;
`;

export const Name = styled.p`
  font-size: 20px;
`;