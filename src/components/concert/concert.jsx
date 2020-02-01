import React, { useState, useRef } from 'react'
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
    GetTicketsButton,
    TimeContainer,
    HiddenContainer,
    HiddenHeading,
    VendorContainer,
    HiddenSubContainer,
    DownloadLink,
    Flex,
} from './styles'
import { FormattedDate, FormattedTime, FormattedMessage } from 'react-intl'
import { jsonParse, formatToPureDate } from '../../helpers'
import { useEffect } from 'react'
import { FiDownload } from 'react-icons/fi'
import thumbnailImage from '../../images/thumbnail.svg'
export const Concert = ({
    name,
    city,
    venue,
    hall = '',
    date,
    program,
    vendors,
    poster: { url },
    file,
}) => {
    const pureDate = formatToPureDate(date)

    const [isExtended, setIsExtended] = useState(false)

    const [heightsContainers, setHeightsContainer] = useState({
        hiddenContainer: 0,
        parentContainer: 0,
    })

    const handleOnClick = () => {
        setIsExtended(!isExtended)
    }

    const parsedVendors = jsonParse(vendors)

    const parentContainerRef = useRef()

    const hiddenContainerRef = useRef()

    useEffect(() => {
        setHeightsContainer({
            hiddenContainer: hiddenContainerRef.current.clientHeight,
            parentContainer: parentContainerRef.current.clientHeight,
        })
    }, [hiddenContainerRef, parentContainerRef])

    return (
        <Container
            heightsContainers={heightsContainers}
            ref={parentContainerRef}
            isExtended={isExtended}
        >
            <ContentContainer>
                <Flex>
                    <Poster
                        src={url ? url : thumbnailImage}
                        alt="Concert poster"
                    />
                    <NameDateContainer>
                        <Name onClick={() => setIsExtended(!isExtended)}>
                            {name}
                        </Name>
                        <DateContainer>
                            <FormattedDate
                                value={pureDate}
                                year="numeric"
                                month="long"
                                day="2-digit"
                            />
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
                        {file && (
                            <DownloadLink
                                href={file.url}
                                target="_blank"
                                download
                            >
                                <FiDownload /> Download full program
                            </DownloadLink>
                        )}
                    </Flex>
                </HiddenContainer>
            </ContentContainer>
            <Button onClick={() => handleOnClick()}>
                <FormattedMessage
                    id={
                        isExtended
                            ? 'concert_button_less'
                            : 'concert_button_more'
                    }
                />
            </Button>
        </Container>
    )
}
