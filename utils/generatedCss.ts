export const clickfunnelsStarter = (
  fonts: any,
  primaryColor: string,
  secondaryColor: string,
  primaryAccentColor: string,
  secondaryAccentColor: string,
  ctaIcon: string
) => {
  return `
    /*
    ____________________________________________________________________________________________________________

        Digital Speak | 2018 / 2024 © Toute reproduction interdite sans l'autorisation de l'auteur. 
        https://digitalspeak.agency/
    ____________________________________________________________________________________________________________
    */

    /* Fonts */
    ${fonts
      .map(
        (font: any) => `
    @font-face {
      font-family: "${font.name}";
      src: url("${font.url}");
      font-weight: normal;
      font-style: normal;
    }
    `
      )
      .join("\n")}

    html,
    html body {
      overflow-x: hidden !important;
    }
    body {
      overflow-y: hidden;
    }

    body img {
      outline: none !important;
    }
    body .DOpacity {
      opacity: 1 !important;
    }

    .fa,
    .far,
    .fas {
      font-family: "Font Awesome 5 Free" !important;
    }
    a:hover,
    a:focus {
      text-decoration: none !important;
    }

    /*VAR*/
    :root {
      ${primaryColor ? `--DS_PR_color_DS: ${primaryColor};` : ""}
      ${secondaryColor ? `--DS_PR2_color_DS: ${secondaryColor};` : ""}
      ${primaryAccentColor ? `--DS_SC_color_DS: ${primaryAccentColor};` : ""}
      ${
        secondaryAccentColor
          ? `--DS_SC2_color_DS: ${secondaryAccentColor};`
          : ""
      }
    }

    @media (max-width: 769px) {
      [data-title^="DS_Sec_"] {
        padding-top: 25px !important;
        padding-bottom: 25px !important;
      }
      [id*="row--"],
      [id*="row-"],
      .row[data-title*="_row"] {
        margin-top: 0px !important;
        padding-top: 15px !important;
        padding-bottom: 15px !important;
      }
    }

    /*************CTA***********/
    ${
      ctaIcon
        ? `
      [data-title="DS_button_CTA_DS"] {
        z-index: 222 !important;
        transition: text-shadow 1s;
      }
      [data-title="DS_button_CTA_DS"]:hover,
      [data-title="DS_button_CTA_DS"]:hover a:before,
      [data-title="DS_button_CTA_DS"]:hover a span {
        transition-delay: 0.3s;
      }
      [data-title="DS_button_CTA_DS"] a {
        width: fit-content;
        padding-left: 70px !important;
        position: relative;
        box-shadow: none !important;
        border: 1px solid var(--DS_PR_color_DS);
        transition: transform 1s, background-color 1s;
      }
      [data-title="DS_button_CTA_DS"] a:before,
      [data-title="DS_button_CTA_DS"] a:after {
        content: "";
        width: 40px;
        height: 40px;
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 15px;
        margin: auto;
        transition: filter 1s, transform 1s, background-color 1s;
      }
      [data-title="DS_button_CTA_DS"] a:before {
        background: url(${ctaIcon}) no-repeat !important;
        background-size: contain !important;
        background-position: center !important;
        filter: grayscale(1) brightness(200) !important;
        z-index: 1;
      }
      [data-title="DS_button_CTA_DS"] a:after {
        background-color: black !important;
        transform: scale(0.8);
        border-radius: 100%;
        z-index: 0;
      }
      [data-title="DS_button_CTA_DS"] a span {
        transition: text-shadow 1s, color 1s;
      }
      .DS_button_CTA_DS_An a,
      .DS_button_CTA_DS_An:hover a,
      [data-title="DS_button_CTA_DS"]:hover a {
        background-color: black !important;
        transform: scale(1.02) !important;
      }
      .DS_button_CTA_DS_An a span,
      .DS_button_CTA_DS_An:hover a span,
      [data-title="DS_button_CTA_DS"]:hover a span {
        color: white !important;
        text-shadow: 0 0 2px black !important;
      }
      .DS_button_CTA_DS_An a:before,
      .DS_button_CTA_DS_An:hover a:before,
      [data-title="DS_button_CTA_DS"]:hover a:before {
        filter: invert(0) !important;
        transform: scale(0.8);
      }
      .DS_button_CTA_DS_An a:after,
      .DS_button_CTA_DS_An:hover a:after,
      [data-title="DS_button_CTA_DS"]:hover a:after {
        background-color: white !important;
        transform: scale(1);
      }
      @media (max-width: 769px) {
        [data-title="DS_button_CTA_DS"] a {
          padding-left: 55px !important;
        }
        [data-title="DS_button_CTA_DS"] a:before,
        [data-title="DS_button_CTA_DS"] a:after {
          left: 8px !important;
        }
      }
    `
        : `
      [data-title="DS_button_CTA_DS"] {
        position: relative;
        z-index: 10 !important;
        transition: all 2s;
        font-weight: 900;
      }
      [data-title="DS_button_CTA_DS"] a {
        position: relative;
        z-index: 1;
      }
      [data-title="DS_button_CTA_DS"] a,
      [data-title="DS_button_CTA_DS"] a span {
        font-weight: 800 !important; 
        transition: all 2s;
      }
      [data-title="DS_button_CTA_DS"]:hover,
      [data-title="DS_button_CTA_DS"]:hover:before,
      [data-title="DS_button_CTA_DS"]:hover a,
      [data-title="DS_button_CTA_DS"]:hover a span {
        transition: all 0.5s !important;
      }
      .DS_Sec_An_DS [data-title="DS_button_CTA_DS"]:before,
      [data-title="DS_button_CTA_DS"]:hover:before {
        opacity: 1 !important;
        transform: translate(60px, -20px) scale(1);
      }
      .DS_Sec_An_DS [data-title="DS_button_CTA_DS"] a,
      [data-title="DS_button_CTA_DS"]:hover a {
        background: var(--DS_SC_color_DS) !important;
      }
      .DS_Sec_An_DS [data-title="DS_button_CTA_DS"] a span,
      [data-title="DS_button_CTA_DS"]:hover a span {
        color: white !important;
      }
      @media (max-width: 769px) {
        [data-title="DS_button_CTA_DS"]:before {
          right: -20px;
        }
        .DS_Sec_An_DS [data-title="DS_button_CTA_DS"]:before {
          transform: rotate(-40deg) translateY(-70px);
        }
      }
    `
    }
    `;
};

export const systemioStarter = (
  colors: string,
  primaryColor: string,
  secondaryColor: string,
  primaryAccentColor: string,
  secondaryAccentColor: string,
  ctaIcon: string
) => {
  let selectors = generateCSSSelectors1(colors);
  let selectorsu = generateCSSSelectors2(colors);
  let selectorsunder = generateCSSSelectors3(colors);
  return `
    /*
    ____________________________________________________________________________________________________________

        Digital Speak | 2018 / 2024 Â© Toute reproduction interdite sans l'autorisation de l'auteur. 
        https://digitalspeak.group/
    ____________________________________________________________________________________________________________
*/

html,
html body {
  overflow-x: hidden !important;
}
body {
  overflow-y: hidden;
}

body img {
  outline: none !important;
}
body .DOpacity {
  opacity: 1 !important;
}

/*div, h4, p, span, a {  font-family: Visby Light !important }
    h1, h2, h3, a span, button, [id^="button-"]{  font-family: Gobold Regular !important;}
    h1 *, h2 *, h3 *, [id^="button-"] div{ font-family: Gobold Regular !important; font-size: inherit !important;}*/
/*    h3, h3 * { text-transform: initial !important   }*/
/*i { font-family: "Font Awesome 5 Free" !important; }*/
.fa,
.far,
.fas {
  font-family: "Font Awesome 5 Pro";
}
body .css-1mjfwc6 .fa,
body .css-1mjfwc6 .far,
body .css-1mjfwc6 .fas {
  font-family: "Font Awesome 5 Pro" !important;
}

[id*="text-"],
[id*="text-"] span {
  font-weight: 500 !important;
}

/***
    
        [id*="text-"] b, [id*="text-"] strong, [style*="font-weight: bold"], [style*="font-weight: bold"] span{
            font-weight: 800 !important;
        }
        [id*="headline-"] span, [id*="headline-"] b, [id*="headline-"] strong{
          font-weight: 800 !important;

        }
        .fa, .fas{
              font-weight: 800 !important;
        }

    ***/

/*********************************/
body .css-1mjfwc6 #section-7283c206 {
  background: var(--DS_PR_color_DS) !important;
  position: relative;
}
body .css-1mjfwc6 #section-7283c206:before {
  content: "Content HTML - Don't touch it";
  position: absolute;
  top: 22px;
  left: 0;
  right: 0;
  width: fit-content;
  margin: auto !important;
  color: white;
}
body[js-loaded="true"] #section-7283c206 {
  display: none !important;
}
/*********************************/

.sc-bdVaJa.WEdIt {
  display: none !important;
}

 /*VAR*/
    :root {
      ${primaryColor ? `--DS_PR_color_DS: ${primaryColor};` : ""}
      ${secondaryColor ? `--DS_PR2_color_DS: ${secondaryColor};` : ""}
      ${primaryAccentColor ? `--DS_SC_color_DS: ${primaryAccentColor};` : ""}
      ${
        secondaryAccentColor
          ? `--DS_SC2_color_DS: ${secondaryAccentColor};`
          : ""
      }
    }

/*****/

h1,
h2,
h3 {
  margin-top: inherit !important;
  margin-bottom: inherit !important;
}

.DS_GF_TT_DS_An #text-headline-724e3430,
.DS_GF_TT_DS_An #text-headline-a6e5b0af,
.DS_GF_TT_DS_An #text-headline-664b53ba,
.DS_GF_TT_DS_An #text-headline-46772ecc {
  background-size: 60% !important;
}


/* POPUP */

[class^="PopupWrapper-"] {
  z-index: 100 !important;
}


/*Headline color*/

/*White Color*/


${
  colors.length > 0
    ? `
  
      
span[style*="rgba(255, 255, 255, 1)"],
span[style*="rgba(255, 255, 255, 1)"] *,
span[style*="rgb(255, 255, 255)"],
span[style*="rgb(255, 255, 255)"] * {
  position: relative;
  background: linear-gradient(to bottom, #ffffff, #ffffff, #aaaaaa);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent !important;
}

span[style*="rgba(255, 255, 255, 1)"] u,
span[style*="rgb(255, 255, 255)"] u,
[style*="rgba(255, 255, 255, 1)"][style*="text-decoration: underline"],
[style*="rgb(255, 255, 255)"][style*="text-decoration: underline"] {
  text-decoration-color: white !important;
}

/*Black Color*/

span[style*="rgba(0, 0, 0, 1)"],
span[style*="rgba(0, 0, 0, 1)"] *,
span[style*="rgb(0, 0, 0)"],
span[style*="rgb(0, 0, 0)"] * {
  position: relative;
  background: linear-gradient(to bottom, black, #464646);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent !important;
}

span[style*="rgba(0, 0, 0, 1)"] u,
span[style*="rgb(0, 0, 0)"] u,
[style*="rgba(0, 0, 0, 1)"][style*="text-decoration: underline"],
[style*="rgb(0, 0, 0)"][style*="text-decoration: underline"] {
  text-decoration-color: black !important;
}

/*Main Color*/


${selectors} {
  position: relative;
  background: linear-gradient(
    to bottom,
    var(--DS_PR_color_DS) 50%,
    var(--DS_SC2_color_DS) 100%
  ) !important;
  background-clip: text !important;
  -webkit-background-clip: text !important;
  color: transparent !important;
}


${selectorsu} {
  text-decoration-color: var(--DS_SC2_color_DS) !important;
}

${selectorsunder} {
  text-decoration-color: var(--DS_SC2_color_DS) !important;
}

/***********/
  
  `
    : ""
}

/****************MOTIF**************/

#row-d51960f4XX {
  position: absolute;
  left: 0;
  width: -webkit-fill-available !important;
}
.Mot_An img {
  transform: rotate(45deg) scale(1.2) translate(5px, 10px) !important;
  opacity: 1 !important;
}

/********************************/

/*************CTA***********/
${
  ctaIcon
    ? `
  
[id^="button-"] {
  z-index: 22 !important;
  transition: text-shadow 1s;
}
[id^="button-"]:hover,
[id^="button-"]:hover:before,
[id^="button-"]:hover span {
  transition-delay: 0.3s;
}
[id^="button-"] {
  width: fit-content;
  padding-left: 55px !important;
  position: relative;
  background: linear-gradient(
    to bottom,
    var(--DS_SC2_color_DS),
    var(--DS_PR_color_DS)
  );
  transition: transform 1s, color 1s, text-shadow 1s;
}
[id^="button-"]:before,
[id^="button-"]:after {
  content: "";
  width: 30px;
  height: 30px;
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 15px;
  margin: auto;
  transition: transform 1s, background-color 1s;
}

[id^="button-"]:before {
  background: url(${ctaIcon})
    no-repeat !important;
  background-size: contain !important;
  background-position: center !important;
  transform: scale(0.7);
  z-index: 1;
}
[id^="button-"]:after {
  background-color: black !important;
  transform: scale(1);
  border-radius: 100%;
  z-index: 0;
}
[id^="button-"] span {
  transition: text-shadow 1s, color 1s;
}

.DS_AnimeBTN_DS[id^="button-"],
.DS_AnimeBTN_DS:hover,
[id^="button-"]:hover {
  transform: scale(1.02) !important;
}

.DS_AnimeBTN_DS[id^="button-"] span,
.DS_AnimeBTN_DS:hover span,
[id^="button-"]:hover span {
  text-shadow: 0 0 1px black !important;
}
.DS_AnimeBTN_DS[id^="button-"]:before,
.DS_AnimeBTN_DS:hover:before,
[id^="button-"]:hover:before {
  filter: grayscale(1) brightness(0);
  transform: scale(0.7) translateX(5px);
}

.DS_AnimeBTN_DS[id^="button-"]:after,
.DS_AnimeBTN_DS[id^="button-"]:hover:after,
[id^="button-"]:hover:after {
  background-color: white !important;
  transform: scale(1) translateX(-5px);
}

@media (max-width: 769px) {
  [id^="button-"] {
    font-size: 14px !important;
  }
}
  `
    : `
  
  
  `
}

/********************************/

    
    `;
};

function generateCSSSelectors1(colors: string) {
  let selectors: string[] = [];
  colors.split("-").forEach((color) => {
    selectors.push(`span[style*="${color}"]`);
  });

  // Join selectors with commas
  let cssSelectors = selectors.join(",\n");

  return cssSelectors;
}
function generateCSSSelectors2(colors: string) {
  let selectors: string[] = [];
  colors.split("-").forEach((color) => {
    selectors.push(`span[style*="${color}"] u`);
  });

  // Join selectors with commas
  let cssSelectors = selectors.join(",\n");

  return cssSelectors;
}
function generateCSSSelectors3(colors: string) {
  let selectors: string[] = [];
  colors.split("-").forEach((color) => {
    selectors.push(
      `span[style*="${color}"] [style*="text-decoration: underline"]`
    );
  });

  // Join selectors with commas
  let cssSelectors = selectors.join(",\n");

  return cssSelectors;
}
