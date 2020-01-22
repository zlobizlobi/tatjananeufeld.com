import styled from 'styled-components'
import {Section as SectionComponent} from '@components'
import {media} from '../../styles'

export const Section = styled(SectionComponent)`
    background-color: white;
    color: black;
`
export const Text = styled.p`
    font-size: 14px;
    line-height: 24.5px;
    padding: 0 30px;
    max-width: 800px;
    margin-bottom: 40px;
    &:last-child{
        margin: 0;
    }
`

export const FirstImage = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    float: left;
    filter: grayscale(85%);
    object-fit: cover;
    padding: 40px 0;
    box-sizing: content-box;

    ${media.sm(`
        border-radius: 0%;
        box-sizing: border-box;
        padding: 0 20px 20px 30px;
        width: 350px;   
        height: 240px;
        object-fit: cover;
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