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
} from "./styles"
import { FormattedDate, FormattedTime } from "react-intl"
import { jsonParse, formatToPureDate } from "../../helpers"
import { useEffect } from "react"

export const Concert = ({
  name,
  city,
  venue,
  hall,
  date,
  program,
  vendors,
  poster: { url },
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

  return (
    <Container
      heightsContainers={heightsContainers}
      ref={parentContainerRef}
      isExtended={isExtended}
    >
      <div style={{display: 'flex'}}>
      <Poster src={url} alt='Concert poster' />
      <NameDateContainer>
        <Name>{name}</Name>
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
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <HiddenHeading>Tickets</HiddenHeading>
          {parsedVendors.map(({ vendor, ticketUrl }) => (
            <VendorContainer href={ticketUrl} as='a' key={vendor}>
              <span style={{fontWeight: 'bold'}}>{vendor}</span>
              <GetTicketsButton>Tickets</GetTicketsButton>
            </VendorContainer>
          ))}
        </div>
        <div style={{display: 'flex', flexDirection: 'column', marginTop: '30px'}}>
          <HiddenHeading>Program</HiddenHeading>
          <span style={{fontWeight: 'normal', fontFamily: 'Montserrat'}}>{program}</span>
        </div>
      </HiddenContainer>
      <Button onClick={() => handleOnClick()}>
        {isExtended ? "Less" : "More"}
      </Button>
    </Container>
  )
}
