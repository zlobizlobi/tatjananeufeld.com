import styled from 'styled-components'
import { Heading as HeadingComponent } from '@components'
import { FiPhoneCall } from 'react-icons/fi'

export const Section = styled.section`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
    color: white;
    min-width: 600px;
    align-self: center;
    margin-bottom: 30px;
`

export const Heading = styled(HeadingComponent)`
    && {
        margin: 0;
    }
`

export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px 0;
`

export const Number = styled.h2`
    font-size: 25px;
    font-weight: normal;
    margin-bottom: 10px;
`

export const Email = styled.h6`
    color: rgba(255, 255, 255, 0.4);
    font-weight: normal;
    font-size: 16px;
`

export const PhoneIcon = styled(FiPhoneCall)`
    color: white;
    width: 30px;
    height: 30px;
`

export const FormHeading = styled.h3`
    font-size: 23px;
    font-weight: normal;
    margin-top: 60px;
    padding-top: 40px;
    box-shadow: 0px -7px 18px -13px rgba(255, 255, 255, 0.75);
    width: 350px;
    text-align: center;
    line-height: 32px;
`
