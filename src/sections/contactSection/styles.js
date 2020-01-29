import styled from "styled-components"
import { media } from "../../styles"
import { Heading as HeadingComponent } from '@components' 

export const Section = styled.section`
  z-index: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;

  ${media.sm(`
        justify-content: center;
    `)}
`

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Heading = styled(HeadingComponent)`
  color: white;
  font-weight: normal;
  letter-spacing: 5px;
  max-width: 700px;
  margin-bottom: 15px;
  && {
    font-size: 64px;
  }
`

export const SubHeading = styled.h2`
  font-size: 20px;
  color: rgba(255,255,255,0.7);
  font-weight: normal;
  letter-spacing: 2px;
`