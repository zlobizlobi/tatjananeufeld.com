import styled from 'styled-components'

export const Container = styled.div`
    padding: 40px 25px;
    border-bottom: 1px solid rgba(255,255,255,0.5);
    display: flex;
    color: white;
    min-width: 700px;
    align-items: flex-start;
    justify-content: space-between;
    min-height: 230px;

    &:last-child{
        margin: 0;
    }
`

export const Name = styled.h2`
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 16px;
    font-weight: bold;
`

export const DateContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-family: 'Montserrat', sans-serif;
    font-weight: lighter;
    align-items: center;
    margin-bottom: 10px;
    font-size: 14px;
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
    font-family: 'Montserrat', sans-serif;
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
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    padding: 5px 10px;
    background-color: transparent;
    border: 1px solid white;
    align-self: flex-end;
    color: white;
    font-family: 'Montserrat', sans-serif;
    transition: all 0.3s ease;
    cursor: pointer;
    font-size: 10px;
    
    :hover {
        background-color: white;
        color: black;
    }

    > svg {
        margin: 2px 0 0 5px;
    }
`