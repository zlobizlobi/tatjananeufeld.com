import styled from "styled-components"
import { media } from "../../styles"

export const Heading = styled.h1`
  color: white;
  font-family: "Montserrat", serif;
  margin-bottom: 100px;
  font-size: 32px;
  text-transform: uppercase;
  font-weight: normal;

  ${media.md(`
        font-size: 55px;
    `)}
`
