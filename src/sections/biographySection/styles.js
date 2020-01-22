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
    margin-bottom: 20px;
    max-width: 800px;
    flex-wrap: wrap;

    &:last-child{
        margin: none;
    }
`

export const FirstImage = styled.img`
    width: 350px;
    height: 239px;
    float: left;
    filter: grayscale(85%);
    padding: 0 20px 20px 30px;

    ${media.sm(`
    padding: 0 20px 20px 30px;
    `)}
`