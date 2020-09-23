import React, { useState } from 'react';
import styled from 'styled-components';
import { media } from '@styles';
import { FiDownload } from 'react-icons/fi';

export const Programs = ({ programs }) => {
    const sortedYears = programs
        .map(({ primary }) => primary.year)
        .sort((a, b) => Number(a) - Number(b));

    const currentYear = new Date().getFullYear();

    const [activeYear, setActiveYear] = useState(`${currentYear}`);

    const activeProgram = programs.filter(
        ({ primary }) => primary.year === activeYear
    )[0];

    const { primary } = activeProgram;

    return (
        <Container>
            <Years>
                {sortedYears.map(year => (
                    <Year
                        key={year}
                        active={activeYear === year}
                        onClick={() => setActiveYear(year)}
                    >
                        {year}
                    </Year>
                ))}
            </Years>
            <Content>
                {activeProgram.items.map((item, index) => (
                    <ProgramSuggestion key={index}>
                        {item.program}
                    </ProgramSuggestion>
                ))}
            </Content>
            {primary.program_file.url && (
                <DownloadLink
                    href={primary.program_file.url}
                    target="_blank"
                    download
                    rel="noopener"
                >
                    <DownloadIcon /> Download Full Program
                </DownloadLink>
            )}
        </Container>
    );
};

const Container = styled.div`
    margin-top: 10px;

    ${media.md(`
        margin-top: 20px;
    `)}
`;

const Year = styled.button`
    color: ${({ active }) => (!active ? 'rgba(255,255,255,0.7)' : 'white')};
    font-weight: ${({ active }) => (!active ? 'normal' : 'bold')};
    margin-right: 20px;
    font-size: 11px;
    border-radius: 1px;
    line-height: 25px;
    display: inline;
    transition: all 0.3s ease;
    letter-spacing: 1px;
    
    :last-child {
        margin: 0;
    }

    :hover {
        color: white;
    }

    ${media.md(`
        font-size: 14px;
        padding: 1px 0;
    `)}
`;

const Years = styled.div`
    display: inline-block;
    flex-wrap: wrap;
    margin-bottom: 10px;
    line-height: 40px;
    margin-bottom: 30px;

    ${media.md(`
        line-height: unset;
    `)}
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;

    ${media.sm(`
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
    `)}
`;

export const DownloadLink = styled.a`
    display: flex;
    align-items: center;
    font-size: 12px;
    color: white;
    margin-top: 30px;

    ${media.md(`
        font-size: 13px;
    `)}
`;

export const DownloadIcon = styled(FiDownload)`
    margin-right: 10px;
    width: 18px;
    height: 18px;
`;

export const ProgramSuggestion = styled.span`
    color: white;
    line-height: 20px;
    font-size: 14px;
    max-width: 300px;
    white-space: break-spaces;
    color: #b7b7b7;
    margin: 0 0 40px 0;

    ${media.sm(`
        margin: 20px;   
    `)}
`;
