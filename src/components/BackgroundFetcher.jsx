import React from 'react';
import { Helmet } from 'react-helmet';
import ImagePalette from 'react-image-palette';
import { rgbToRgba } from '../helpers';

const BackgroundFetcher = ({ image }) => (
  <ImagePalette crossOrigin image={`https://image.tmdb.org/t/p/w500${image}`}>
    {({ backgroundColor, color, alternativeColor }) => (
      <Helmet>
        <style type="text/css">
          {`body {background-image: linear-gradient(to bottom, ${rgbToRgba(
            backgroundColor
          )} 0%, rgb(0, 0, 0) 100%),url(https://image.tmdb.org/t/p/original${image});}`}
        </style>
      </Helmet>
    )}
  </ImagePalette>
);

export default BackgroundFetcher;
