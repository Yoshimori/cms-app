import { css } from "@emotion/react";

export const emotionReset = css`
    :root {
        --bgColor: #F5F6F8;
        --txtColor: #0F3F62;
        --scrollbarColor: rgba(255, 255, 255, .2);
        --fontSize: 10px;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        border: 0;
        font: inherit;
        margin: 0;
        padding: 0;
        vertical-align: baseline;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;

        /* scrollbar-width: thin;
        scrollbar-color: rgba(15, 63, 98, 0.48); */
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }

    ol, ul {
        list-style: none;
    }

    /* Render the 'main' element consistently in IE. */
    main {
        display: block;
    }

    /* Remove the gray background color from active links in IE 10. */
    a {
        text-decoration: none;
    }

    /* Correct overflow not hidden in IE 9/10/11. */
    svg {
        overflow: hidden;
    }

    b,
    strong {
        font-weight: bold;
    }

    /**
        * Remove the inheritance of text transform in Edge, Firefox, and IE.
        * 1. Remove the inheritance of text transform in Firefox.
    */
    button,
    select { /* 1 */
        text-transform: none;
    }

    /* Correct the inability to style clickable types in iOS and Safari. */
    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
        -webkit-appearance: button;
    }

    /* Remove the inner border and padding in Firefox. */
    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
        &::-moz-focus-inner {
            border: 0;
            padding: 0;
        }
    }

    /* 1. Correct the odd appearance in Chrome and Safari.
        * 2. Correct the outline style in Safari.
    */
    [type="search"] {
        -webkit-appearance: textfield; /* 1 */
        outline-offset: -2px; /* 2 */
    }

    /* Remove the inner padding in Chrome and Safari on macOS. */
    [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
    }

    /* 1. Change the font styles in all browsers.
        * 2. Remove the margin in Firefox and Safari.
    */
    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit; /* 1 */
        font-size: 100%; /* 1 */
        line-height: 1.15; /* 1 */
        margin: 0; /* 2 */
        border: none;
    }

    html {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        -webkit-tap-highlight-color: rgba(0,0,0,.05);
        -webkit-text-size-adjust: 100%;
        font-size: var(--fontSize);
        /* scrollbar-color: var(--scrollbarColor) var(--bgColor); */
        scrollbar-width: thin;
        text-rendering: optimizeLegibility;
        &::-webkit-scrollbar {
            width: 10px;
        }
        &::-webkit-scrollbar {
            /* background-color: var(--bgColor); */
        }
        &::-webkit-scrollbar-thumb {
            /* background-color: var(--scrollbarColor); */
            border-radius: 10px;
        }
    }

    /* CONFIG FOR LIFESPAN BACKOFFICE  */

    body {
        color: var(--txtColor);
        font-family: 'Mulish', sans-serif;
        font-size: 14px;
        /* line-height: 1.285; ??? */
        background-color: #F5F6F8;
    }

        input[type="search"]::-webkit-search-decoration,
        input[type="search"]::-webkit-search-cancel-button,
        input[type="search"]::-webkit-search-results-button,
        input[type="search"]::-webkit-search-results-decoration {
            -webkit-appearance:none;
        }

    html,
    body,
    #root {
        height: 100%;
    }

    // SCROLL STYLE
    *::-webkit-scrollbar {
        width: 4px;
        height: 4px;
    }

    *::-webkit-scrollbar-track {
        border-radius: 100px;
        background-color: transparent;
    }

    *::-webkit-scrollbar-thumb {
        background: rgba(15, 63, 98, 0.48);
        border-radius: 100px;
    }
`;
