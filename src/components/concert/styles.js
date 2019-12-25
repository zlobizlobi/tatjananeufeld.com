import styled from "styled-components"

export const Container = styled.div`
  padding: 40px 25px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  display: flex;
  color: white;
  min-height: 230px;
  position: absolute;
  overflow-y: ${({isExtended}) => isExtended ? 'visible': 'hidden'};
  transition: height 0.3s ease-in-out;
  height: ${({ isExtended, heightsContainers: {
    hiddenContainer, 
    parentContainer
  } }) => isExtended ? `calc(${hiddenContainer}px + ${parentContainer}px)` : `${parentContainer}px`};

  &:last-child {
    margin: 0;
  }

`

export const Name = styled.h2`
  font-family: "Montserrat", sans-serif;
  margin-bottom: 16px;
  font-weight: bold;
`

export const DateContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-family: "Montserrat", sans-serif;
  font-weight: lighter;
  align-items: center;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 25px;
`

export const NameDateContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Divider = styled.span`
  transform: rotate(90deg);
  height: 1px;
  border-top: 1px solid white;
  width: 15px;
  margin: 0 4px;
`

export const VenueContainer = styled.div`
  display: flex;
`
export const VenueItem = styled.span`
  margin-right: 5px;
  font-weight: lighter;
  font-style: italic;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  opacity: 0.7;
  &:last-child {
    margin: 0;
  }
`

export const Poster = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${({ posterUrl }) => posterUrl});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-right: 25px;
  filter: grayscale(100%);
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 7.5px;
  min-width: 75px;
  background-color: transparent;
  border: 1px solid white;
  align-self: flex-end;
  color: white;
  box-shadow: 0  17px 10px -10px rgba(255, 255, 255, 0.4);
  font-family: "Montserrat", sans-serif;
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: 10px;
  font-weight: 900;
  :hover {
    background-color: white;
    color: black;
  }

  > svg {
    margin: 2px 0 0 5px;
  }
`

export const TimeContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  align-items: center;
  line-height: 25px;
`

export const HiddenContainer = styled.div`
  position: absolute;
  opacity: ${({isExtended}) => isExtended ? '1' : '0'};
  display: flex;
  flex-direction: column;
  z-index: 1;
  transition: opacity 0.5s ease;
  align-self: flex-end;
`

export const HiddenHeading = styled.h4`
  color: white;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  margin: 0 0 10px 0;
  padding-bottom: 5px;
  border-bottom: 1px solid white;
  align-self: flex-start;
`

export const VendorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`