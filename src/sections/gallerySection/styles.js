import styled from 'styled-components'
import { media } from '../../styles'

export const Section = styled.section`
    padding: 0px;
    display: flex;
    justify-content: center;
    padding: 40px 20px 0 20px;

    ${media.md(`
        padding: 100px;
    `)}
`