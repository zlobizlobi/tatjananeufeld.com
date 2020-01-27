import styled from 'styled-components'
import {Section as SectionComponent} from '@components'
import {media} from '../../styles'
import Image from 'gatsby-image'

export const Section = styled(SectionComponent)`
    background-color: white;
    color: black;
`
export const Text = styled.p`
    font-size: 14px;
    line-height: 24.5px;
    padding: 0 30px;
    max-width: 800px;
`

export const FirstImage = styled(Image)`
    width: 200px;
    height: 200px;

    object-fit: cover;
    margin: 40px 0;
    box-sizing: content-box;

    ${media.sm(`
        border-radius: 0%;
        box-sizing: border-box;
        margin: 0 20px 20px 30px;
        width: 350px;   
        height: 240px;
        object-fit: cover;
        float: left;
    `)}
`

export const SecondImage = styled(FirstImage)`
    display: inline;
    margin: 0;
    
    &:last-child {
        margin: 40px 0 0 0;
    }

    ${media.sm(`
       display: none;
    `)}
`
export const NameHighlight = styled.span`
    font-weight: bold;
`
export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    ${media.sm(`
        display: inline-block;
    `)}
`