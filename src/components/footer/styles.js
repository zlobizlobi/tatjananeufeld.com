import styled from 'styled-components'
import { media } from '../../styles'
import { NavLink as NavLinkComponent } from '../navLink'
import { TiSocialFacebook, TiSocialYoutube } from 'react-icons/ti'

export const FooterComponent = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    background-color: rgba(0,0,0,0.5);
    box-shadow: -2px -7px 18px -13px rgba(255,255,255,0.75);
    width: 100%;
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  
  > a {
    text-decoration: none;
    color: white;
  }
`

export const Facebook = styled(TiSocialFacebook)`
  color: white;
  font-size: 25px;
  margin-top: 29px;
`

export const Youtube = styled(TiSocialYoutube)`
  color: white;
  font-size: 25px;
  margin-top: 30px;
  margin-right: 10px;
`

export const Name = styled.h1`
    color: white;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-family: "Montserrat", sans-serif;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: normal;
    margin-bottom: 30px;
    font-weight: normal;

  
`

export const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  align-items: center;
  flex-direction: column;

  ${media.md(`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    line-height: 22px;
  `)}
`
export const NavLink = styled(NavLinkComponent)`
  margin: 0 0 30px 0;
  text-transform: uppercase;
  color: white;
  > a {
    font-size: 12px;
  }

  &:last-child{
    margin: 0;
  }

  ${media.md(`
    margin: 0 10px;
    flex-direction: row;

    &:last-child{
      margin: 0;
    }
  `)}
`

export const CopyRighText = styled.h6`
    font-size: 10px;
    color: white;
    font-family: "Montserrat", sans-serif;
    font-weight: normal;
    margin-top: 30px;
    line-height: 20px;
    text-align: center;
`

export const Container = styled.div`
    position: relative;
`