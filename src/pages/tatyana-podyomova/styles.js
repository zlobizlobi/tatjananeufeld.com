import styled from 'styled-components'
import { media } from '@styles'

export const PageContainer = styled.section`
    padding: 0 30px;

    ${media.md(`
        padding: 100px;
    `)}
`