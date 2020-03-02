import React, { useState } from 'react';
import {
    Container,
    Image,
    Text,
    PartnershipName,
    ColumnContainer,
    FlexContainer,
    ArrowDown,
    ArrowUp,
    PartnerContainer,
    SeeMoreButton,
} from './styles';

import { Partner } from './partner';
import { FormattedMessage } from 'gatsby-plugin-intl';

export const Partnership = ({ primary: partnerShip, items: partners }) => {
    const [isOpen, setIsOpen] = useState(false);

    const {
        localFile: {
            childImageSharp: { fluid },
        },
    } = partnerShip.partnership_image;

    return (
        <Container>
            <ColumnContainer>
                <FlexContainer>
                    <Image fluid={fluid} />
                    <ColumnContainer>
                        <PartnershipName>
                            {partnerShip.partnership_name}
                        </PartnershipName>
                        <Text>{partnerShip.partnership_story}</Text>
                    </ColumnContainer>
                </FlexContainer>
                <SeeMoreButton
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ marginTop: '50px' }}
                >
                    {isOpen ? <ArrowUp /> : <ArrowDown />}
                    <span>
                        <FormattedMessage
                            id={isOpen ? 'button_less' : 'button_more'}
                        />
                    </span>
                </SeeMoreButton>
            </ColumnContainer>
            <PartnerContainer isShown={isOpen}>
                {partners.map(p => (
                    <Partner {...p} />
                ))}
            </PartnerContainer>
        </Container>
    );
};
