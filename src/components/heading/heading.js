import styled from "styled-components"
import { media } from "../../styles"

export const Heading = styled.h1`
  color: white;
  font-family: "Montserrat", serif;
  margin-bottom: 100px;
  font-size: 32px;
  text-transform: uppercase;
  padding-bottom: 5px;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.4);

  ${media.md(`
        font-size: 55px;
    `)}
`
