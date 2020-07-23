import React, { useState, useRef, Fragment } from 'react';
import {
    Program,
    Container,
    ContentContainer,
    Button,
    ContainerDivider,
    GetTicketsButton,
    HiddenContainer,
    HiddenHeading,
    VendorContainer,
    HiddenSubContainer,
    DownloadLink,
    Flex,
} from './styles';
import { FormattedMessage } from 'react-intl';
import { useEffect } from 'react';
import { FiDownload, FiPlus, FiMinus } from 'react-icons/fi';
import thumbnailImage from '../../images/thumbnail.svg';
import { Visible } from './components';
import { jsonParse } from '../../helpers';

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
    const [isExtended, setIsExtended] = useState(false);

    const [heightsContainers, setHeightsContainer] = useState({
        hiddenContainer: 0,
        parentContainer: 0,
    });

    const handleOnClick = () => {
        setIsExtended(!isExtended);
    };

    const parsedVendors = jsonParse(vendors);

    const parentContainerRef = useRef();

    const hiddenContainerRef = useRef();

    useEffect(() => {
        setHeightsContainer({
            hiddenContainer: hiddenContainerRef.current.clientHeight,
            parentContainer: parentContainerRef.current.clientHeight,
        });
    }, [hiddenContainerRef, parentContainerRef]);

    return (
        <Container
            heightsContainers={heightsContainers}
            ref={parentContainerRef}
            isExtended={isExtended}
        >
            <ContentContainer>
                <Visible
                    posterSrc={fluid || thumbnailImage}
                    name={name}
                    onClick={() => setIsExtended(!isExtended)}
                    date={date}
                    city={city}
                    venue={venue}
                    address={address}
                />
                <HiddenContainer
                    height={heightsContainers.hiddenContainer}
                    isExtended={isExtended}
                    ref={hiddenContainerRef}
                >
                    {parsedVendors && (
                        <>
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
                                                    <VendorContainer
                                                        href={ticketUrl}
                                                        as="a"
                                                    >
                                                        <span>{vendor}</span>
                                                        <GetTicketsButton>
                                                            Tickets
                                                    </GetTicketsButton>
                                                    </VendorContainer>
                                                ) : (
                                                        <VendorContainer>
                                                            <span>{vendor}</span>
                                                            <span>
                                                                {telephoneNumber}
                                                            </span>
                                                        </VendorContainer>
                                                    )}
                                            </Fragment>
                                        )
                                )}
                            </HiddenSubContainer>
                        </>
                    )}
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
                <Button onClick={handleOnClick}>
                    <FormattedMessage
                        id={isExtended ? 'button_less' : 'button_more'}
                    />
                    &nbsp;
                    {isExtended ? <FiMinus /> : <FiPlus />}
                </Button>
            </ContentContainer>
            <ContainerDivider />
        </Container>
    );
};
