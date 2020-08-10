import React, { useState } from 'react';
import { GrDown, GrUp } from 'react-icons/gr';
import styled, { css } from 'styled-components';
import { media } from '@styles';
import { FormattedMessage } from 'gatsby-plugin-intl';

export const InformationRow = ({ title, children, className }) => {
    const [open, setOpen] = useState(false);

    return (
        <Column>
            <Row onClick={() => setOpen(!open)} >
                <Heading>
                    <FormattedMessage id={title} />
                </Heading>
            </Row>
            {open && children}
        </Column>
    );
};

export const Row = styled.div`
    padding: 25px;
    cursor: pointer;
    border-bottom: 1px solid #b7b7b7;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
`;

export const Heading = styled.h4`
    color: white;
    font-weight: normal;
    font-size: 14px;
    letter-spacing: 1px;

    ${media.sm(`
        font-size: 16px;
    `)}
`;

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
`;

export const ExpandIcon = styled(GrDown)`
    ${iconStyle}
`;

export const CollapseIcon = styled(GrUp)`
    ${iconStyle}
`;
