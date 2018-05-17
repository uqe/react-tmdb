import React, { Component, Fragment } from 'react';
import { StyledToolbar as Toolbar, StyledAppBar as Header, StyledButton as Button, StyledCircularProgress } from '../ui/AppBar';
import SearchBar from 'material-ui-search-bar';
import { Link, Redirect } from 'react-router-dom';
import List from '@material-ui/icons/List';
import { Loader } from './Loader';
import loadable from '@7rulnik/react-loadable';
import Logo from './Logo';

const FavoritesMoviesPage = loadable({
  loader: () => import('../pages/FavoritesMoviesPage'),
  loading: Loader
});

class AppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      searchSubmitted: false
    };
  }

  componentWillReceiveProps = () => this.setState({ searchValue: '', searchSubmitted: false });

  onMouseOver = () => {
    FavoritesMoviesPage.preload();
  };

  render() {
    const { isFetched, isFetchedGenres } = this.props;
    const { searchValue, searchSubmitted } = this.state;

    return (
      <Fragment>
        <Header position="static">
          <Toolbar>
            <Link to="/" style={{ marginRight: '10px', marginTop: '4px' }}>
              <Logo />
              {/* <img
                alt="Logo"
                height="45"
                src="https://www.themoviedb.org/static_cache/v4/logos/stacked-green-cae7a95e2590dbdde28284ac26245cb2792788838f5c498b892e8d01c183e6f3.svg"
              /> */}
            </Link>
            <Button size="small" onMouseOver={this.onMouseOver} component={({ ...props }) => <Link to="/favorites/page/1" {...props} />}>
              <List />
            </Button>
            <SearchBar
              placeholder="Search movie"
              style={{ flex: 8 }}
              onChange={value => this.setState({ searchValue: value })}
              value={searchValue}
              onRequestSearch={() => this.setState({ searchSubmitted: true })}
            />
            {searchSubmitted && searchValue.length >= 1 && <Redirect to={{ pathname: '/search', search: `movie=${searchValue}` }} />}
          </Toolbar>
        </Header>
        {isFetched && <StyledCircularProgress size={100} />}
      </Fragment>
    );
  }
}

export default AppBar;
