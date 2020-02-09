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
} from './styles';
import { Partner } from './partner';

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
                {isOpen ? (
                    <ArrowUp onClick={() => setIsOpen(!isOpen)} />
                ) : (
                    <ArrowDown onClick={() => setIsOpen(!isOpen)} />
                )}
            </ColumnContainer>
            <PartnerContainer isShown={isOpen}>
                {partners.map(p => (
                    <Partner {...p} />
                ))}
            </PartnerContainer>
        </Container>
    );
};