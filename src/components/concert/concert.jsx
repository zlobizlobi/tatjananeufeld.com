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
  TimeContainer,
  HiddenContainer,
  HiddenHeading,
  VendorContainer
} from "./styles"
import { FormattedDate, FormattedTime } from "react-intl"
import { jsonParse } from '../../helpers'
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
  const pureDate = date.substring(0, date.indexOf("T"))

  const [isExtended, setIsExtended] = useState(false);

  const [heightsContainers, setHeightsContainer] = useState({
    hiddenContainer: 0,
    parentContainer: 0
  });

  const handleOnClick = () => {
    setIsExtended(!isExtended)
  }
  
  const parsedVendors = jsonParse(vendors);

  const parentContainerRef = useRef()

  const hiddenContainerRef = useRef()

  useEffect(() => {
    setHeightsContainer({hiddenContainer: hiddenContainerRef.current.clientHeight, parentContainer: parentContainerRef.current.clientHeight})
  }, [])

  return (
    <Container heightsContainers={heightsContainers} ref={parentContainerRef} isExtended={isExtended}>
        <Poster posterUrl={url} />
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
      <Button onClick={handleOnClick}>{isExtended ? 'Collapse' : 'Read more'}</Button>
      <HiddenContainer height={heightsContainers.hiddenContainer} isExtended={isExtended} ref={hiddenContainerRef}>
        <HiddenHeading>Tickets</HiddenHeading>
        {parsedVendors.map(({vendor, ticketUrl}) => <VendorContainer>{vendor}{ticketUrl}</VendorContainer>)}
        {/* {program} */}
      </HiddenContainer>
    </Container>
  )
}
