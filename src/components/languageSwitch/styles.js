import styled from 'styled-components';

export const Button = styled.button`
    background-color: ${({ isActive }) => (isActive ? 'white' : 'transparent')};
    margin-right: 5px;
    color: ${({ isActive }) => (isActive ? 'black' : 'white')};
    font-family: 'Montserrat', sans-serif;
    width: 25px;
    height: 22.5px;
    transition: color 0.2s ease-in-out, background-color 0.4s ease;

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
