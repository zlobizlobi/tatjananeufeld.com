import styled from 'styled-components'

import { media } from '../../styles/media'

export const Hamburger = styled.button`
    display: flex;
    flex-direction: column;
    border: none;
    margin-left: 25px;
    background-color: transparent;

    ${media.md(`
        display: none;
    `)}
`

export const Bars = styled.span`
    width: 30px;
    height: 2px;
    border-top: 2px solid rgba(255,255,255,0.8);
    margin: 4px 0;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1), opacity 0.2s ease;
    position: relative;
    z-index: 4;

    &:first-child {
        transform-origin: 0% 0%;
    }

    &:nth-last-child(2) {
        transform-origin: 0% 100%;
    }
`

export const HamburgerInput = styled.input.attrs({ type: 'checkbox' })`
      appearance: none;
      width: 28px;
      height: 28px;
      position: absolute;
      z-index: 4;

      &:checked ~ span {
        opacity: 1;
        transform: rotate(45deg) translate(5px, -2px);
      }

      &:checked ~ span:nth-last-child(3) {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
      }

      :checked ~ span:nth-last-child(2){
        transform: rotate(-45deg) translate(4px,5px);
        }

    &:checked ~ ul {
        transform: none;
    }
`

interface IProps {
    isOpen: boolean;
}

export const SlideMenu = styled.ul`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        left: 0;
        top: 0px;
        width: 100vw;
        height: 100vh;
        padding: 100px 0;
        background: black;
        list-style-type: none;
        opacity: ${({ isOpen }: IProps) => isOpen ? '1' : '0'};
        font-smoothing: antialiased;
        transform-origin: 0% 0%;
        transition: opacity 0.4s;
`




