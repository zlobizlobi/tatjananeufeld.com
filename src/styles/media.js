import { css } from 'styled-components';

export const breakpoints = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1400,
};

export const media = Object.entries(breakpoints).reduce(
    (acc, [label, size]) => {
        return {
            ...acc,
            [label]: breakpointCss => css`
                @media (min-width: ${size}px) {
                    ${breakpointCss}
                }
            `,
        };
    },
    {}
);
