import styled from "styled-components"
import { media } from "../../styles"

export const Heading = styled.h1`
  font-family: "Montserrat", serif;
  margin-bottom: 100px;
  font-size: 26px;
  text-transform: uppercase;
  font-weight: normal;

  ${media.md(`
        font-size: 55px;
        margin-right: 385px;
    `)}
`
