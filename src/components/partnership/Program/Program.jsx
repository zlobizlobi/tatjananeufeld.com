import React, { useState } from 'react';
import styled from 'styled-components';
import { media } from '@styles';

export const Program = ({ content }) => {

    const years = content.map(({ primary }) => primary.year).sort((a, b) => Number(a) - Number(b));

    const currentYear = new Date().getFullYear();

    const [activeYear, setActiveYear] = useState(`${currentYear}`);

    const activeProgram = content.filter(({ primary }) => primary.year === activeYear);

    return (
        <Container>
            <Years>
                {years.map(year => <Year active={activeYear === year} onClick={() => setActiveYear(year)}>{year}</Year>)}
            </Years>
            <Content>
                {activeProgram[0].primary.program}
            </Content>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 10px;

    ${media.md(`
        margin-top: 20px;
    `)}
`

const Year = styled.button`
    background-color: ${({ active }) => active ? 'white' : 'rgba(255,255,255, 0.7)'};
    margin-right: 10px;
    font-size: 11px;
    border-radius: 1px;
    color: black;
    width: 40px;
    line-height: 25px;
    display: inline;
    transition: background-color 0.3s ease;

    :last-child {
        margin: 0;
    }

    :hover {
        background-color: white;
    }

    ${media.md(`
        font-size: 14px;
        width: 60px;
        padding: 1px 0;
    `)}
`

const Years = styled.div`
    display: inline-block;
    flex-wrap: wrap;
    margin-bottom: 5px;
    line-height: 40px;

    ${media.md(`
        line-height: unset;
        margin-bottom: 10px;
    `)}
`

const Content = styled.p`
    font-size: 14px;
    line-height: 20px;
    white-space: pre-wrap;

    ${media.md(`
        font-size: 16px;
        line-height: 23px;
    `)}
`
