import styled from 'styled-components'
import { media } from '../../styles'

export const Section = styled.section`
    padding: 0px;
    display: flex;
    justify-content: center;

    ${media.md(`
        padding: 100px;
    `)}
`