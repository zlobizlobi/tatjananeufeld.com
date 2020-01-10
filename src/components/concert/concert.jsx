import React, { useState, useRef } from "react"
import {
  Container,
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
  DownloadLink
} from "./styles"
import { FormattedDate, FormattedTime, FormattedMessage } from "react-intl"
import { jsonParse, formatToPureDate } from "../../helpers"
import { useEffect } from "react"
import { FiDownload } from 'react-icons/fi'

export const Concert = ({
  name,
  city,
  venue,
  hall,
  date,
  program,
  vendors,
  poster: { url },
  file: { url: fileUrl }
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
  }, [])

  console.log(fileUrl);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '0 20px 30px 20px', margin: '30px 0', borderBottom: '0.5px solid rgba(255,255,255,0.3' }}>
      <Container
        heightsContainers={heightsContainers}
        ref={parentContainerRef}
        isExtended={isExtended}
      >
        <div style={{ display: 'flex', marginBottom: '30px' }}>
          <Poster src={url} alt='Concert poster' />
          <NameDateContainer>
            <Name onClick={() => setIsExtended(!isExtended)}>{name}</Name>
            <DateContainer>
              <span style={{ marginRight: "10px" }}>
                <FormattedDate
                  value={pureDate}
                  year="numeric"
                  month="long"
                  day="2-digit"
                />
              </span>
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
        </div>
        <HiddenContainer
          height={heightsContainers.hiddenContainer}
          isExtended={isExtended}
          ref={hiddenContainerRef}
        >
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '30px' }}>
            <HiddenHeading>Tickets</HiddenHeading>
            <HiddenSubContainer>
              {parsedVendors.map(({ vendor, ticketUrl }) => (
                <VendorContainer href={ticketUrl} as='a' key={vendor}>
                  <span>{vendor}</span>
                  <GetTicketsButton>Tickets</GetTicketsButton>
                </VendorContainer>
              ))}
            </HiddenSubContainer>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <HiddenHeading>Program</HiddenHeading>
            <HiddenSubContainer>
              <span style={{ whiteSpace: 'pre-wrap' }}>{program}</span>
            </HiddenSubContainer>
            <DownloadLink href={fileUrl} target="_blank" download="program.pdf"><FiDownload /> Download full program</DownloadLink>
          </div>
        </HiddenContainer>
      </Container>
      <Button onClick={() => handleOnClick()}>
        <FormattedMessage id={isExtended ? 'concert_button_less' : 'concert_button_more'} />
      </Button>
    </div >
  )
}
