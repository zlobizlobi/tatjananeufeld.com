import styled, { css } from 'styled-components';

export const Button = styled.button`
    background-color: ${({ isActive }) => (isActive ? 'white' : 'transparent')};
    margin-right: 5px;
    color: ${({ isActive }) => (isActive ? 'black' : 'white')};
    font-family: 'Montserrat', sans-serif;
    width: 25px;
    height: 22.5px;
    cursor: pointer;
    transition: color 0.2s ease-in-out, background-color 0.4s ease;
    border: none;

    &:last-child {
        margin: 0;
    }

    :hover {
        background-color: white;
        color: black;
    }
`;

export const Container = styled.div`
    display: flex;
    z-index: 3;
`;
