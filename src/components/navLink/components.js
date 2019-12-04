import styled from 'styled-components'
import * as Scroll from 'react-scroll'

export const LinkComponent = styled(Scroll.Link)`
    color: white;
    font-size: 16px;
    text-decoration: none;
    transition: color 0.4s ease;
    letter-spacing: 2.5px;
    cursor: pointer;


    &:hover {
        color: rgba(255,255,255,0.8);
    }
`