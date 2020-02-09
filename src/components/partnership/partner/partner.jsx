import React from 'react';
import { Container, Text, Image, Name } from './styles';

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
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                }}
            >
                <Image fluid={fluid} />
                <Name>{name}</Name>
            </div>
        </Container>
    );
};