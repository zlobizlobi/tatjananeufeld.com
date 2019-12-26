import styled from "styled-components"

export const Container = styled.div`
  padding: 25px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  min-height: 240px;
  position: relative;
  margin-bottom: 40px;
  overflow-y: ${({ isExtended }) => (isExtended ? "visible" : "hidden")};
  transition: height 0.3s ease-in-out;
  height: ${({
    isExtended,
    heightsContainers: { hiddenContainer, parentContainer },
  }) =>
    isExtended
      ? `calc(${hiddenContainer}px + ${parentContainer}px)`
      : `${parentContainer}px`};

  &:last-child {
    margin: 0;
  }
`

export const Name = styled.h2`
  font-family: "Montserrat", sans-serif;
  margin-bottom: 16px;
  font-weight: bold;
  letter-spacing: 1.5px;
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

export const Poster = styled.img`
  margin-right: 20px;
  object-fit: contain;
  max-width: 150px;
  height: 120px;
  align-self: flex-start;
`

export const Button = styled.button`
  background-color: transparent;
  height: 30px;
  width: 50px;
  align-self: flex-end;
  border: 1px solid white;
  color: white;
  font-family: "Montserrat", sans-serif;
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: 10px;
  font-weight: 900;
  position: relative;
  z-index: 2;

  :hover {
    color: black;
    background-color: white;
    border: 0.5px solid white;
  }

  :focus{
    outline: none;
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
  top: 180px;
  opacity: ${({ isExtended }) => (isExtended ? "1" : "0")};
  display: flex;
  flex-direction: column;
  z-index: 0;
  transition: opacity 0.3s ease;
  align-self: center;
  width: 100%;
`

export const HiddenHeading = styled.h4`
  color: white;
  font-weight: normal;
  margin: 0 0 20px 0;
  font-family: "Montserrat", sans-serif;
  border-bottom: 1px solid white;
  padding-bottom: 2px;
  align-self: flex-start;

  &:nth-child(2){
    margin-top: 20px;
  }
`

export const VendorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  color: white;
  transition: color 0.3s ease;
  position: relative;
  z-index: 1;
  cursor: pointer;
  :hover {
    color: rgba(255,255,255,0.6);

    > button {
      color: rgba(255,255,255,0.6);
    }
  }

  text-decoration: none;

  &:last-child{
    margin: 0;
  }
`

export const GetTicketsButton = styled.button`
  border-bottom: 0.5px solid rgba(255,255,255,0.6);
  border-top: none;
  border-left: none;
  border-right: none;
  font-family: "Montserrat", sans-serif;
  color: rgba(255,255,255,1);
  transition: color 0.3s ease;
  background-color: transparent;
`
