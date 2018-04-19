# TMDb API w/ React

### Live demo

https://tmdb.netlify.com/

### Tools used

* webpack 4.6.0
* react 16.2.0
* redux, redux-thunk
* material-ui, styled-components, grid-styled

### Development

Start: `yarn dev` (default port: 3000)

Start and open bundle analyzer: `yarn dev-bundle-analyzer` (default port: 8888)

### Production

Build: `yarn build`

Build and open bundle analyzer: `yarn build-bundle-analyzer`

### .env file example

```
THEMOVIEDB_API_KEY=8SUisSHs7sSIsioSPsms
THEMOVIEDB_API_LANGUAGE=en-EN
THEMOVIEDB_API_ADULT=false
```

[Language variables](https://developers.themoviedb.org/3/getting-started/languages)

### Netlify build environment

Build command: `yarn build-netlify` (to create .env file)

Publish directory: `dist`

![Netlify settings](https://i.imgur.com/4YwWV1u.png)

### TODO

* [x] remove redux-logger from production build
* [x] remove style-loader
* [x] change favicon
* [x] axios instead of fetch
* [x] search input
* [x] fav/unfav movies
* [x] react-helmet titles
* [x] favorite movies page
* [x] react-router-redux
* [x] responsive
* [x] better appbar
* [x] better colors for randomgradients
* [x] better pagination buttons
* [x] fix fav from movie details page
* [x] recommendations cards
* [x] async/await instead of promises
* [x] genres => ls
* [x] similar movies instead of recommended
* [x] netlify deploy config
* [ ] details page
* [ ] react-loadable
* [ ] mute adult movies
* [ ] short genres (recommended cards)
* [ ] show "no results"
