import React from 'react';
import { Helmet } from 'react-helmet';
import ImagePalette from 'react-image-palette';
import { rgbToRgba } from '../helpers';

const BackgroundFetcher = ({ image }) => (
  <ImagePalette crossOrigin image={`https://image.tmdb.org/t/p/w300${image}`}>
    {({ backgroundColor, color, alternativeColor }) => (
      <Helmet>
        <style type="text/css">
          {`
          @media screen and (max-width: 600px) {
            body {
              background-image: linear-gradient(to bottom, ${rgbToRgba(
                backgroundColor
              )} 0%, rgb(0, 0, 0) 100%),url(https://image.tmdb.org/t/p/w300${image});}
            }

         @media screen and (min-width: 601px) {
          body {
            background-image: linear-gradient(to bottom, ${rgbToRgba(
              backgroundColor
            )} 0%, rgb(0, 0, 0) 100%),url(https://image.tmdb.org/t/p/original${image});}
            }
          `}
        </style>
      </Helmet>
    )}
  </ImagePalette>
);

export default BackgroundFetcher;
