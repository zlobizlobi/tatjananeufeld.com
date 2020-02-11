import styled, { css } from "styled-components"

export const Button = styled.button`
  background-color: ${({ isActive }) => (isActive ? "white" : "rgba(0,0,0,0.2)")};
  padding: 0;
  margin-right: 5px;
  color: ${({ isActive }) => (isActive ? "black" : "white")};
  font-family: "Montserrat", sans-serif;
  display: inline;
  width: 25px;
  height: 22.5px;
  cursor: pointer;
  transition: color 0.2s ease-in-out, background-color 0.4s ease;
  border: 1px solid black;

  &:last-child {
    margin: 0;
  }

  ${({ isActive }) =>
    !isActive &&
    css`
      :hover {
        background-color: white;
        color: black;
      }
    `}
`
export const Container = styled.div`
  display: flex;
  z-index: 3;
`
