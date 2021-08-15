import React, { Profiler } from 'react';
import { hydrate, render } from 'react-dom';
import { injectGlobal } from 'styled-components';
import { createBrowserHistory } from 'history';
import Root from './Root';
import { store } from './helpers';

const history = createBrowserHistory();

const rootElement = document.getElementById('app');

if (rootElement.hasChildNodes()) {
  hydrate(<Root history={history} store={store} />, rootElement);
} else {
  render(
    // <Profiler id="k" onRender={a => console.log(a)}>
    <Root history={history} store={store} />,
    // </Profiler>,
    rootElement
  );
}

// render(<Root history={history} store={store} />, document.getElementById('app'));

injectGlobal`
#app {
  max-width: 940px;
  margin: auto;
  /* display: grid;
  gap: 20px 20px;
  height: 100%;
  width: 940px;
  margin: auto;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto; */
}

/* cyrillic */
@font-face {
  font-family: 'Product Sans';
  font-style: italic;
  font-weight: 100;
  src: local('Product Sans Thin Italic'), local('ProductSans-ThinItalic'), url(https://fonts.gstatic.com/s/productsans/v9/pxifypQkot1TnFhsFMOfGShVEu_vWEpkr0SqrvJ3iA.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek */
@font-face {
  font-family: 'Product Sans';
  font-style: italic;
  font-weight: 100;
  src: local('Product Sans Thin Italic'), local('ProductSans-ThinItalic'), url(https://fonts.gstatic.com/s/productsans/v9/pxifypQkot1TnFhsFMOfGShVEu_vWE1kr0SqrvJ3iA.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* latin-ext */
@font-face {
  font-family: 'Product Sans';
  font-style: italic;
  font-weight: 100;
  src: local('Product Sans Thin Italic'), local('ProductSans-ThinItalic'), url(https://fonts.gstatic.com/s/productsans/v9/pxifypQkot1TnFhsFMOfGShVEu_vWEBkr0SqrvJ3iA.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Product Sans';
  font-style: italic;
  font-weight: 100;
  src: local('Product Sans Thin Italic'), local('ProductSans-ThinItalic'), url(https://fonts.gstatic.com/s/productsans/v9/pxifypQkot1TnFhsFMOfGShVEu_vWE5kr0SqrvI.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic */
@font-face {
  font-family: 'Product Sans';
  font-style: italic;
  font-weight: 300;
  src: local('Product Sans Light Italic'), local('ProductSans-LightItalic'), url(https://fonts.gstatic.com/s/productsans/v9/pxieypQkot1TnFhsFMOfGShVEu8nSllHimuCpPpPsXA.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek */
@font-face {
  font-family: 'Product Sans';
  font-style: italic;
  font-weight: 300;
  src: local('Product Sans Light Italic'), local('ProductSans-LightItalic'), url(https://fonts.gstatic.com/s/productsans/v9/pxieypQkot1TnFhsFMOfGShVEu8nSllAimuCpPpPsXA.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* latin-ext */
@font-face {
  font-family: 'Product Sans';
  font-style: italic;
  font-weight: 300;
  src: local('Product Sans Light Italic'), local('ProductSans-LightItalic'), url(https://fonts.gstatic.com/s/productsans/v9/pxieypQkot1TnFhsFMOfGShVEu8nSllNimuCpPpPsXA.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Product Sans';
  font-style: italic;
  font-weight: 300;
  src: local('Product Sans Light Italic'), local('ProductSans-LightItalic'), url(https://fonts.gstatic.com/s/productsans/v9/pxieypQkot1TnFhsFMOfGShVEu8nSllDimuCpPpP.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic */
@font-face {
  font-family: 'Product Sans';
  font-style: italic;
  font-weight: 400;
  src: local('Product Sans Italic'), local('ProductSans-Italic'), url(https://fonts.gstatic.com/s/productsans/v9/pxidypQkot1TnFhsFMOfGShVEueIaExuqGaonvM.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek */
@font-face {
  font-family: 'Product Sans';
  font-style: italic;
  font-weight: 400;
  src: local('Product Sans Italic'), local('ProductSans-Italic'), url(https://fonts.gstatic.com/s/productsans/v9/pxidypQkot1TnFhsFMOfGShVEuePaExuqGaonvM.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* latin-ext */
@font-face {
  font-family: 'Product Sans';
  font-style: italic;
  font-weight: 400;
  src: local('Product Sans Italic'), local('ProductSans-Italic'), url(https://fonts.gstatic.com/s/productsans/v9/pxidypQkot1TnFhsFMOfGShVEueCaExuqGaonvM.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Product Sans';
  font-style: italic;
  font-weight: 400;
  src: local('Product Sans Italic'), local('ProductSans-Italic'), url(https://fonts.gstatic.com/s/productsans/v9/pxidypQkot1TnFhsFMOfGShVEueMaExuqGao.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic */
@font-face {
  font-family: 'Product Sans';
  font-style: italic;
  font-weight: 500;
  src: local('Product Sans Medium Italic'), local('ProductSans-MediumItalic'), url(https://fonts.gstatic.com/s/productsans/v9/pxieypQkot1TnFhsFMOfGShVEu9_S1lHimuCpPpPsXA.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek */
@font-face {
  font-family: 'Product Sans';
  font-style: italic;
  font-weight: 500;
  src: local('Product Sans Medium Italic'), local('ProductSans-MediumItalic'), url(https://fonts.gstatic.com/s/productsans/v9/pxieypQkot1TnFhsFMOfGShVEu9_S1lAimuCpPpPsXA.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* latin-ext */
@font-face {
  font-family: 'Product Sans';
  font-style: italic;
  font-weight: 500;
  src: local('Product Sans Medium Italic'), local('ProductSans-MediumItalic'), url(https://fonts.gstatic.com/s/productsans/v9/pxieypQkot1TnFhsFMOfGShVEu9_S1lNimuCpPpPsXA.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Product Sans';
  font-style: italic;
  font-weight: 500;
  src: local('Product Sans Medium Italic'), local('ProductSans-MediumItalic'), url(https://fonts.gstatic.com/s/productsans/v9/pxieypQkot1TnFhsFMOfGShVEu9_S1lDimuCpPpP.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic */
@font-face {
  font-family: 'Product Sans';
  font-style: italic;
  font-weight: 700;
  src: local('Product Sans Bold Italic'), local('ProductSans-BoldItalic'), url(https://fonts.gstatic.com/s/productsans/v9/pxieypQkot1TnFhsFMOfGShVEu83TVlHimuCpPpPsXA.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek */
@font-face {
  font-family: 'Product Sans';
  font-style: italic;
  font-weight: 700;
  src: local('Product Sans Bold Italic'), local('ProductSans-BoldItalic'), url(https://fonts.gstatic.com/s/productsans/v9/pxieypQkot1TnFhsFMOfGShVEu83TVlAimuCpPpPsXA.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* latin-ext */
@font-face {
  font-family: 'Product Sans';
  font-style: italic;
  font-weight: 700;
  src: local('Product Sans Bold Italic'), local('ProductSans-BoldItalic'), url(https://fonts.gstatic.com/s/productsans/v9/pxieypQkot1TnFhsFMOfGShVEu83TVlNimuCpPpPsXA.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Product Sans';
  font-style: italic;
  font-weight: 700;
  src: local('Product Sans Bold Italic'), local('ProductSans-BoldItalic'), url(https://fonts.gstatic.com/s/productsans/v9/pxieypQkot1TnFhsFMOfGShVEu83TVlDimuCpPpP.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic */
@font-face {
  font-family: 'Product Sans';
  font-style: italic;
  font-weight: 900;
  src: local('Product Sans Black Italic'), local('ProductSans-BlackItalic'), url(https://fonts.gstatic.com/s/productsans/v9/pxieypQkot1TnFhsFMOfGShVEu8PT1lHimuCpPpPsXA.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek */
@font-face {
  font-family: 'Product Sans';
  font-style: italic;
  font-weight: 900;
  src: local('Product Sans Black Italic'), local('ProductSans-BlackItalic'), url(https://fonts.gstatic.com/s/productsans/v9/pxieypQkot1TnFhsFMOfGShVEu8PT1lAimuCpPpPsXA.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* latin-ext */
@font-face {
  font-family: 'Product Sans';
  font-style: italic;
  font-weight: 900;
  src: local('Product Sans Black Italic'), local('ProductSans-BlackItalic'), url(https://fonts.gstatic.com/s/productsans/v9/pxieypQkot1TnFhsFMOfGShVEu8PT1lNimuCpPpPsXA.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Product Sans';
  font-style: italic;
  font-weight: 900;
  src: local('Product Sans Black Italic'), local('ProductSans-BlackItalic'), url(https://fonts.gstatic.com/s/productsans/v9/pxieypQkot1TnFhsFMOfGShVEu8PT1lDimuCpPpP.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic */
@font-face {
  font-family: 'Product Sans';
  font-style: normal;
  font-weight: 100;
  src: local('Product Sans Thin'), local('ProductSans-Thin'), url(https://fonts.gstatic.com/s/productsans/v9/pxidypQkot1TnFhsFMOfGShddOeIaExuqGaonvM.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek */
@font-face {
  font-family: 'Product Sans';
  font-style: normal;
  font-weight: 100;
  src: local('Product Sans Thin'), local('ProductSans-Thin'), url(https://fonts.gstatic.com/s/productsans/v9/pxidypQkot1TnFhsFMOfGShddOePaExuqGaonvM.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* latin-ext */
@font-face {
  font-family: 'Product Sans';
  font-style: normal;
  font-weight: 100;
  src: local('Product Sans Thin'), local('ProductSans-Thin'), url(https://fonts.gstatic.com/s/productsans/v9/pxidypQkot1TnFhsFMOfGShddOeCaExuqGaonvM.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Product Sans';
  font-style: normal;
  font-weight: 100;
  src: local('Product Sans Thin'), local('ProductSans-Thin'), url(https://fonts.gstatic.com/s/productsans/v9/pxidypQkot1TnFhsFMOfGShddOeMaExuqGao.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic */
@font-face {
  font-family: 'Product Sans';
  font-style: normal;
  font-weight: 300;
  src: local('Product Sans Light'), local('ProductSans-Light'), url(https://fonts.gstatic.com/s/productsans/v9/pxicypQkot1TnFhsFMOfGShdvPWbS2lBgGygpspO.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek */
@font-face {
  font-family: 'Product Sans';
  font-style: normal;
  font-weight: 300;
  src: local('Product Sans Light'), local('ProductSans-Light'), url(https://fonts.gstatic.com/s/productsans/v9/pxicypQkot1TnFhsFMOfGShdvPWbTGlBgGygpspO.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* latin-ext */
@font-face {
  font-family: 'Product Sans';
  font-style: normal;
  font-weight: 300;
  src: local('Product Sans Light'), local('ProductSans-Light'), url(https://fonts.gstatic.com/s/productsans/v9/pxicypQkot1TnFhsFMOfGShdvPWbQWlBgGygpspO.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Product Sans';
  font-style: normal;
  font-weight: 300;
  src: local('Product Sans Light'), local('ProductSans-Light'), url(https://fonts.gstatic.com/s/productsans/v9/pxicypQkot1TnFhsFMOfGShdvPWbT2lBgGygpg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic */
@font-face {
  font-family: 'Product Sans';
  font-style: normal;
  font-weight: 400;
  src: local('Product Sans'), local('ProductSans-Regular'), url(https://fonts.gstatic.com/s/productsans/v9/pxiDypQkot1TnFhsFMOfGShVE9eOYktMqlap.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek */
@font-face {
  font-family: 'Product Sans';
  font-style: normal;
  font-weight: 400;
  src: local('Product Sans'), local('ProductSans-Regular'), url(https://fonts.gstatic.com/s/productsans/v9/pxiDypQkot1TnFhsFMOfGShVFNeOYktMqlap.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* latin-ext */
@font-face {
  font-family: 'Product Sans';
  font-style: normal;
  font-weight: 400;
  src: local('Product Sans'), local('ProductSans-Regular'), url(https://fonts.gstatic.com/s/productsans/v9/pxiDypQkot1TnFhsFMOfGShVGdeOYktMqlap.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Product Sans';
  font-style: normal;
  font-weight: 400;
  src: local('Product Sans'), local('ProductSans-Regular'), url(https://fonts.gstatic.com/s/productsans/v9/pxiDypQkot1TnFhsFMOfGShVF9eOYktMqg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic */
@font-face {
  font-family: 'Product Sans';
  font-style: normal;
  font-weight: 500;
  src: local('Product Sans Medium'), local('ProductSans-Medium'), url(https://fonts.gstatic.com/s/productsans/v9/pxicypQkot1TnFhsFMOfGShd5PSbS2lBgGygpspO.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek */
@font-face {
  font-family: 'Product Sans';
  font-style: normal;
  font-weight: 500;
  src: local('Product Sans Medium'), local('ProductSans-Medium'), url(https://fonts.gstatic.com/s/productsans/v9/pxicypQkot1TnFhsFMOfGShd5PSbTGlBgGygpspO.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* latin-ext */
@font-face {
  font-family: 'Product Sans';
  font-style: normal;
  font-weight: 500;
  src: local('Product Sans Medium'), local('ProductSans-Medium'), url(https://fonts.gstatic.com/s/productsans/v9/pxicypQkot1TnFhsFMOfGShd5PSbQWlBgGygpspO.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Product Sans';
  font-style: normal;
  font-weight: 500;
  src: local('Product Sans Medium'), local('ProductSans-Medium'), url(https://fonts.gstatic.com/s/productsans/v9/pxicypQkot1TnFhsFMOfGShd5PSbT2lBgGygpg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic */
@font-face {
  font-family: 'Product Sans';
  font-style: normal;
  font-weight: 700;
  src: local('Product Sans Bold'), local('ProductSans-Bold'), url(https://fonts.gstatic.com/s/productsans/v9/pxicypQkot1TnFhsFMOfGShdrPKbS2lBgGygpspO.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek */
@font-face {
  font-family: 'Product Sans';
  font-style: normal;
  font-weight: 700;
  src: local('Product Sans Bold'), local('ProductSans-Bold'), url(https://fonts.gstatic.com/s/productsans/v9/pxicypQkot1TnFhsFMOfGShdrPKbTGlBgGygpspO.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* latin-ext */
@font-face {
  font-family: 'Product Sans';
  font-style: normal;
  font-weight: 700;
  src: local('Product Sans Bold'), local('ProductSans-Bold'), url(https://fonts.gstatic.com/s/productsans/v9/pxicypQkot1TnFhsFMOfGShdrPKbQWlBgGygpspO.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Product Sans';
  font-style: normal;
  font-weight: 700;
  src: local('Product Sans Bold'), local('ProductSans-Bold'), url(https://fonts.gstatic.com/s/productsans/v9/pxicypQkot1TnFhsFMOfGShdrPKbT2lBgGygpg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic */
@font-face {
  font-family: 'Product Sans';
  font-style: normal;
  font-weight: 900;
  src: local('Product Sans Black'), local('ProductSans-Black'), url(https://fonts.gstatic.com/s/productsans/v9/pxicypQkot1TnFhsFMOfGShdlPCbS2lBgGygpspO.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek */
@font-face {
  font-family: 'Product Sans';
  font-style: normal;
  font-weight: 900;
  src: local('Product Sans Black'), local('ProductSans-Black'), url(https://fonts.gstatic.com/s/productsans/v9/pxicypQkot1TnFhsFMOfGShdlPCbTGlBgGygpspO.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* latin-ext */
@font-face {
  font-family: 'Product Sans';
  font-style: normal;
  font-weight: 900;
  src: local('Product Sans Black'), local('ProductSans-Black'), url(https://fonts.gstatic.com/s/productsans/v9/pxicypQkot1TnFhsFMOfGShdlPCbQWlBgGygpspO.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Product Sans';
  font-style: normal;
  font-weight: 900;
  src: local('Product Sans Black'), local('ProductSans-Black'), url(https://fonts.gstatic.com/s/productsans/v9/pxicypQkot1TnFhsFMOfGShdlPCbT2lBgGygpg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

  body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif;
  }

  *,
  *::before,
  *::after {
  box-sizing: border-box;
  }

body,
h1,
h2,
h3,
h4,
p {
  margin: 0;
}`;
