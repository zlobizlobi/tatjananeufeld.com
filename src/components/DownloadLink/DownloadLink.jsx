import React from 'react';
import styled from 'styled-components';
import { FiDownload } from 'react-icons/fi';
import { media } from '@styles';

export const DownloadLink = ({ children, ...props }) =>
    <Link {...props}>
        <Icon />
        {children}
    </Link>

const Icon = styled(FiDownload)`
    color: white;
    width: 20px;
    height: 20px;
    margin-right: 10px;
`

const Link = styled.a`
    display: flex;
    align-items: center;
    font-size: 12px;
    color: white;

    ${media.md(`
        font-size: 13px;
    `)}
`;
