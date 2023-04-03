import React from 'react';
import { Global, css } from '@emotion/react';
import poppinsRegular from '../assets/fonts/poppins-regular.ttf';
import poppinsMedium from '../assets/fonts/poppins-medium.ttf';
import poppinsBold from '../assets/fonts/poppins-bold.ttf';

const getFont = (font: string, src: string): string => {
    return `
        @font-face {
            font-family: '${font}';
            src: url(${src}) format('ttf');
            font-weight: normal;
            font-style: normal;
        }
    `;
};

export const GlobalWrapper = (): JSX.Element => {
    return (
        <Global
            styles={css`
                *:focus {
                outline: none;
                }
                * {
                    box-sizing: border-box;
                }

                ${getFont('poppins_regular', poppinsRegular)};
                ${getFont('poppins_medium', poppinsMedium)};
                ${getFont('poppins_bold', poppinsBold)};

                body {
                    width: 100%;
                    height: 100%;
                    padding: 0;
                    margin: 0;
                    font-family: 'Poppins', sans-serif;
                }
            `}
        />
    );
};
