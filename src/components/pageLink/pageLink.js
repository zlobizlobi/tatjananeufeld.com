import styled from 'styled-components'
import { media } from '@styles'
import { Link } from 'gatsby'

export const PageLink = styled(Link)`
    text-decoration: none;
    margin: 0 0 30px 0;
    letter-spacing: 2.5px;

    ${media.md(`
        margin: 0 15px 0 0;

        &:last-child{
            margin: 0;
        }
  `)}
`


