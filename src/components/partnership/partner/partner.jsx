import React from 'react';
import { Container, Text, Image, Name, FlexContainer } from './styles';

export const Partner = ({
    partner_image: image,
    partner_biography: biography,
    partner_name: name,
}) => {
    const {
        localFile: {
            childImageSharp: { fluid },
        },
    } = image;

    return (
        <Container>
            <Text>{biography}</Text>
            <FlexContainer>
                <Image fluid={fluid} />
                <Name>{name}</Name>
            </FlexContainer>
        </Container>
    );
};
