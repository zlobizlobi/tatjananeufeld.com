import React from 'react';
import { Container, Image } from './styles';

export const Partnership = ({ primary: partnerShip, items: partners }) => {
    console.log(partnerShip);
    console.log(partnerShip.partnership_name);
    console.log(partnerShip.partnership_image);
    console.log(partnerShip.partnership_story);
    const {
        localFile: {
            childImageSharp: { fluid },
        },
    } = partnerShip.partnership_image;

    console.log(fluid);
    return (
        <Container>
            <Image fluid={fluid} />
        </Container>
    );
};
