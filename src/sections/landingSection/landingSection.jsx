import React, { forwardRef } from 'react';
import { useTrail, animated } from 'react-spring';
import { graphql, useStaticQuery } from 'gatsby';
import {
    Image,
    Name,
    SubHeading,
    NameContainer,
    Button,
    Section,
    Gradient,
} from './styles';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { FiCalendar } from 'react-icons/fi';

export const LandingSection = forwardRef((props, ref) => {
    const query = useStaticQuery(graphql`
        query landingPageQuery {
            prismicMainPage {
                data {
                    landing_page_image {
                        localFile {
                            childImageSharp {
                                fluid(quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    button_text
                }
            }
        }
    `);
    const {
        prismicMainPage: {
            data: {
                landing_page_image: {
                    localFile: {
                        childImageSharp: { fluid },
                    },
                },
                button_text,
            },
        },
    } = query;

    const items = [
        <Name>
            <FormattedMessage id="landing_section_heading" />
        </Name>,
        <SubHeading>
            <FormattedMessage id="landing_section_subheading" />
        </SubHeading>,
        <Button
            aria-label="Go to first concert"
            onClick={() =>
                window.scrollTo({
                    left: 0,
                    top: ref.current.offsetTop,
                    behavior: 'smooth',
                })
            }
        >
            <span>{button_text}</span>
            <FiCalendar />
        </Button>,
    ];

    const trail = useTrail(items.length, {
        from: { opacity: 0, transform: 'translate3d(0,90px,0)' },
        opacity: 1,
        transform: 'translate3d(0,0px,0)',
        config: { mass: 1, tension: 200, friction: 30 },
    });

    return (
        <Section id="home">
            <Image fluid={fluid} />
            <Gradient />
            <NameContainer>
                {trail.map((styles, i) => (
                    <animated.div key={i} style={styles}>
                        {items[i]}
                    </animated.div>
                ))}
            </NameContainer>
        </Section>
    );
});
