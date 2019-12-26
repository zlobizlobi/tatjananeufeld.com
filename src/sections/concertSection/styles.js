import styled from "styled-components"
import { media } from "../../styles"

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin-top: 200px;
`

export const Heading = styled.h1`
  color: white;
  font-family: "Cormorant Garamond", serif;
  margin-bottom: 100px;
  font-size: 32px;
  text-transform: uppercase;
  padding-bottom: 5px;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.4);

  ${media.md(`
        font-size: 55px;
        display: inline-flex;
    `)}
`

export const TableContainer = styled.div`
  margin: 0 15px;
  text-align: center;

  ${media.md(`
      margin: 0;
  `)}
`
