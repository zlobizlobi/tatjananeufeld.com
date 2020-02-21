import React, { useState, useRef } from 'react';
import {
    Program,
    Container,
    ContentContainer,
    Name,
    NameDateContainer,
    DateContainer,
    Divider,
    VenueContainer,
    VenueItem,
    Poster,
    Button,
    ContainerDivider,
    GetTicketsButton,
    TimeContainer,
    HiddenContainer,
    HiddenHeading,
    VendorContainer,
    HiddenSubContainer,
    DownloadLink,
    Flex,
} from './styles';
import { FormattedTime, FormattedMessage } from 'react-intl';
import { jsonParse } from '../../helpers';
import { useEffect } from 'react';
import { FiDownload } from 'react-icons/fi';
import thumbnailImage from '../../images/thumbnail.svg';

export const Concert = ({
    name,
    city,
    venue,
    hall = '',
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

    const dateParsedFirst = new Date(date);

    const dateParsedSecond = dateParsedFirst.toString().split(' ');

    const dateDay = dateParsedSecond[2];

    const dateMonth = dateParsedSecond[1];

    return (
        <Container
            heightsContainers={heightsContainers}
            ref={parentContainerRef}
            isExtended={isExtended}
        >
            <ContentContainer>
                <Flex>
                    <Poster
                        loading="lazy"
                        fluid={fluid ? fluid : thumbnailImage}
                        alt="Concert poster"
                    />
                    <NameDateContainer>
                        <Name onClick={() => setIsExtended(!isExtended)}>
                            {name}
                        </Name>
                        <DateContainer>
                            <div style={{ marginRight: '5px' }}>
                                <span style={{ marginRight: '5px' }}>
                                    {dateDay}
                                </span>
                                <span>{dateMonth}</span>
                            </div>
                            <TimeContainer>
                                <FormattedTime value={date} />
                                <Divider />
                                {city}
                            </TimeContainer>
                        </DateContainer>
                        <VenueContainer>
                            <VenueItem>{venue},</VenueItem>
                            <VenueItem>{hall}</VenueItem>
                        </VenueContainer>
                    </NameDateContainer>
                </Flex>
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
                                        <>
                                            {ticketUrl ? (
                                                <VendorContainer
                                                    href={ticketUrl}
                                                    as="a"
                                                    key={vendor}
                                                >
                                                    <span>{vendor}</span>
                                                    <GetTicketsButton>
                                                        Tickets
                                                    </GetTicketsButton>
                                                </VendorContainer>
                                            ) : (
                                                <VendorContainer key={vendor}>
                                                    <span>{vendor}</span>
                                                    <span>
                                                        {telephoneNumber}
                                                    </span>
                                                </VendorContainer>
                                            )}
                                        </>
                                    )
                                )}
                            </HiddenSubContainer>
                        </>
                    )}
                    <Flex flexDirection="column">
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
            </ContentContainer>
            <Button onClick={() => handleOnClick()}>
                <FormattedMessage
                    id={isExtended ? 'button_less' : 'button_more'}
                />
            </Button>
            <ContainerDivider />
        </Container>
    );
};
