import { css } from 'styled-components';

/* prettier-ignore */
export const reset = css`
 html, body, div, span, object, iframe,
 h1, h2, h3, h4, h5, h6, p, blockquote, pre,
 abbr, address, cite, code,
 del, dfn, em, img, ins, kbd, q, samp,
 small, strong, sub, sup, var,
 b, i,
 dl, dt, dd, ol, ul, li,
 fieldset, form, label, legend,
 table, caption, tbody, tfoot, thead, tr, th, td,
 article, aside, canvas, details, figcaption, figure,
 footer, header, hgroup, menu, nav, section, summary,
 time, mark, audio, video {
   margin: 0;
   padding: 0;
   border: 0;
   outline: 0;
   font-size: 100%;
   vertical-align: baseline;
   background: transparent; }

 body {
   line-height: 1; }

 article, aside, details, figcaption, figure,
 footer, header, hgroup, menu, nav, section {
   display: block; }

 nav ul {
   list-style: none; }

 blockquote, q {
   quotes: none; }

 blockquote:before, blockquote:after,
 q:before, q:after {
   content: '';
   content: none; }

 a {
   margin: 0;
   padding: 0;
   font-size: 100%;
   vertical-align: baseline;
   background: transparent; }

 /* change colours to suit your needs */
 ins {
   background-color: #ff9;
   color: #000;
   text-decoration: none; }

 /* change colours to suit your needs */
 mark {
   background-color: #ff9;
   color: #000;
   font-style: italic;
   font-weight: bold; }

 del {
   text-decoration: line-through; }

 abbr[title], dfn[title] {
   border-bottom: 1px dotted;
   cursor: help; }

 table {
   border-collapse: collapse;
   border-spacing: 0; }

 /* change border colour to suit your needs */
 hr {
   display: block;
   height: 1px;
   border: 0;
   border-top: 1px solid #cccccc;
   margin: 1em 0;
   padding: 0; }

 input, select {
   vertical-align: middle; }

 ol, ul, li {
   list-style: none; }

 *,
 *:before,
 *:after {
   box-sizing: border-box; }
`;

export const vitalTypographyStyle = css`
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1 {
    font-size: 2.027rem;
    font-weight: normal;
    padding-top: 2.027em;
    padding-bottom: 2.027em;
  }

  h2 {
    font-size: 1.802rem;
    font-weight: normal;
    padding-top: 1.802em;
    padding-bottom: 1.802em;
  }

  h3 {
    font-size: 1.602rem;
    font-weight: normal;
    padding-top: 1.602em;
    padding-bottom: 1.602em;
  }

  h4 {
    font-size: 1.424rem;
    font-weight: normal;
    padding-top: 1.424em;
    padding-bottom: 1.424em;
  }

  h5 {
    font-size: 1.266rem;
    font-weight: normal;
    padding-top: 1.266em;
    padding-bottom: 1.266em;
  }

  h6 {
    font-size: 1.125rem;
    font-weight: normal;
    padding-top: 1.125em;
    padding-bottom: 1.125em;
  }

  p {
    line-height: 1.25rem;
  }
`;

export const linkStyle = ({ theme }) => css`
  a {
    color: ${theme.colors.primary || '#0e86fe'};
    text-decoration: none;
  }
  a:hover {
    color: ${theme.colors.primary400 || '#419ffe'};
    text-decoration: underline;
  }
  a:active {
    color: ${theme.colors.primary || '#0e86fe'};
    text-decoration: underline;
  }
`;

export const robotoFontFamily = css`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  font-family: 'Roboto', 'Helvetica', 'PingFang TC', 'Arial',
    'sans-serif', 'Microsoft JhengHei', 'Heiti TC';
`;
