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
  HiddenSubContainer
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
    <div style={{display: 'flex', flexDirection: 'column', padding: '0 15px 30px 15px', margin: '30px 0', borderBottom: '0.5px solid rgba(255,255,255,0.3'}}>
    <Container
      heightsContainers={heightsContainers}
      ref={parentContainerRef}
      isExtended={isExtended}
    >
      <div style={{display: 'flex', marginBottom: '30px'}}>
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
        <div style={{display: 'flex', flexDirection: 'column', marginBottom: '30px'}}>
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
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <HiddenHeading>Program</HiddenHeading>
          <HiddenSubContainer>
           <span>{program}</span>
          </HiddenSubContainer>
        </div>
      </HiddenContainer>
    </Container>
    <Button onClick={() => handleOnClick()}>
      {isExtended ? "Less" : "More"}
    </Button>
    </div>
  )
}
