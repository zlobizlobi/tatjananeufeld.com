import React from "react"

import {
  Section,
  Heading,
  SubHeading,
  ColumnContainer
} from "./styles"


export const ContactSection = () => {
  return (
    <Section name="contacts">
      <ColumnContainer>
        <Heading>Let's talk about music!</Heading>
        <SubHeading>Don't like forms? Send me an e-mail at <a style={{textDecoration: 'none', fontWeight: 600}}>info@tatjananeufeld.com</a></SubHeading>
     </ColumnContainer>
    </Section>
  )
}
