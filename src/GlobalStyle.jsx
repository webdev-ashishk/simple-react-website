/* GlobalStyle.jsx is same as index.css ?
Why we should use GlobalStyle.jsx over index.css ? in reactjs 

main resone is we can't add javascript file in index.css
we can access theme data .  */

import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*{
 margin: 0;
 padding: 0;
box-sizing: border-box;
font-family: 'Roboto Mono', monospace;
}

html{
 font-size: 62.3%;
 overflow-x: hidden;
}
h1{
 color:${({ theme }) => theme.colors.heading}
 font-size: 6rem;
 font-weight: 900;
}

h2{
 color:${({ theme }) => theme.colors.heading}
 font-size: 4.4rem;
 font-weight: 300;
 white-space:normal;
 text-align: center;
}
h3{
 font-size: 1.8rem;
 font-weight: 400;
}
p{
 color:${({ theme }) => theme.colors.heading}
 opacity: .7;
 font-size: 1.65rem;
 line-height: 1.5;
 margin-top: 1rem;
 font-weight: 400;
}
a{
 text-decoration: none;
}
li{
 list-style:none;
}


`;
