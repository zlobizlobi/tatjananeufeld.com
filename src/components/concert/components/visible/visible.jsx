import React from "react"

export const Visible = () => (
  <Flex>
    <Poster src={url} alt="Concert poster" />
    <NameDateContainer>
      <Name onClick={() => setIsExtended(!isExtended)}>{name}</Name>
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
        q
      </DateContainer>
      <VenueContainer>
        <VenueItem>{venue},</VenueItem>
        <VenueItem>{hall}</VenueItem>
      </VenueContainer>
    </NameDateContainer>
  </Flex>
)
