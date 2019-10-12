import { css } from 'styled-components'

interface BreakPoints {
    sm: number;
    md: number;
    lg: number;
    xl: number;
}

export const breakpoints: BreakPoints = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
};

type BreakpointKeys = keyof BreakPoints;
type Media = { [key in BreakpointKeys]: (css: string) => string };

interface IThemeProps {
    theme: {
        containerWidth: number;
    };
}

export const media = Object.entries(breakpoints).reduce(
    (acc, [label, size]: [string, number]) => {

        return {
            ...acc,
            [label]: (breakpointCss: string) => css`
            @media (min-width: ${size}px) {
                ${breakpointCss}
            }
            `
        }
    },
    {}
) as Media;

