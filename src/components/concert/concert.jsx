import React, { useState, Fragment } from 'react';
import {
    Program,
    Container,
    GetTicketsButton,
    HiddenContainer,
    HiddenHeading,
    VendorContainer,
    HiddenSubContainer,
    DownloadLink,
    Flex,
} from './styles';
import { FiDownload, FiPlus, FiMinus } from 'react-icons/fi';
import thumbnailImage from '../../images/thumbnail.svg';
import { Visible } from './components';
import { jsonParse } from '../../helpers';
import styled, { css } from 'styled-components';
import { media } from '@styles';

export const Concert = ({
    name,
    city,
    address,
    venue,
    date,
    program,
    vendors,
    poster: {
        localFile: {
            childImageSharp: { fluid },
        },
    },
    file,
}) => {
    const [extended, setExtended] = useState(false);

    const parsedVendors = jsonParse(vendors);

    return (
        <Container>
            <Visible
                posterSrc={fluid || thumbnailImage}
                name={name}
                onClick={() => setExtended(!extended)}
                date={date}
                city={city}
                venue={venue}
                address={address}
            />
            {parsedVendors && extended && (
                <HiddenContainer>
                    <HiddenHeading>Tickets</HiddenHeading>
                    <HiddenSubContainer>
                        {parsedVendors.map(
                            ({
                                vendor,
                                ticketUrl = '',
                                telephoneNumber = '',
                            }) => (
                                <Fragment key={vendor}>
                                    {ticketUrl ? (
                                        <VendorContainer>
                                            <span>{vendor}</span>
                                            <GetTicketsButton href={ticketUrl}>
                                                Tickets
                                            </GetTicketsButton>
                                        </VendorContainer>
                                    ) : (
                                        <VendorContainer>
                                            <span>{vendor}</span>
                                            <span>{telephoneNumber}</span>
                                        </VendorContainer>
                                    )}
                                </Fragment>
                            )
                        )}
                    </HiddenSubContainer>
                    <Flex>
                        <HiddenHeading>Program</HiddenHeading>
                        <HiddenSubContainer>
                            <Program>{program}</Program>
                        </HiddenSubContainer>
                        {file.url && (
                            <DownloadLink
                                href={file.url}
                                target="_blank"
                                download
                                rel="noopener"
                            >
                                <FiDownload /> Download full program
                            </DownloadLink>
                        )}
                    </Flex>
                </HiddenContainer>
            )}
            <MoreButton onClick={() => setExtended(!extended)}>
                {extended ? <Minus /> : <Plus />}
            </MoreButton>
        </Container>
    );
};

const MoreButton = styled.button`
    align-self: flex-end;
    display: inline-flex;
    color: white;
    z-index: 1;
    transition: color 0.3s ease;
    margin-top: 20px;

    :hover {
        color: #808080;
    }
`;

const iconStyles = css`
    width: 20px;
    height: 20px;

    ${media.sm(`
        width: 30px;
        height: 30px;
    `)}
`;

const Minus = styled(FiMinus)`
    ${iconStyles}
`;

const Plus = styled(FiPlus)`
    ${iconStyles}
`;
