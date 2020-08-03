import React, { useState } from 'react';
import { GrDown, GrUp } from 'react-icons/gr';
import styled, { css } from 'styled-components'
import { media } from '@styles';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { Program } from '../Program';

export const InformationRow = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Column>
            <Row>
                <Heading><FormattedMessage id={title} /></Heading>
                <Button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <CollapseIcon /> : <ExpandIcon />}</Button>
            </Row>
            {
                isOpen && (
                    <Program content={content} />
                )
            }
        </Column >
    )
}

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    border-bottom: 0.5px solid rgba(255,255,255,0.3);
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    color: white;

`

export const Heading = styled.h4`
    color: white;
    font-weight: normal;
    font-size: 16px;

    ${media.sm(`
        font-size: 18px;
    `)}
`

const Button = styled.button`
    display: inline-flex;
`

const iconStyle = css`
    width: 20px;
    height: 20px;

    ${media.sm(`
        width: 30px;
        height: 30px;
    `)}

    > polyline {
        stroke: white;
    }
`

export const ExpandIcon = styled(GrDown)`
   ${iconStyle}
`

export const CollapseIcon = styled(GrUp)`
   ${iconStyle}
`

