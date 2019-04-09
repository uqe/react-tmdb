import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar';
import { Link, Redirect } from 'react-router-dom';
import List from '@material-ui/icons/List';
import loadable from '@7rulnik/react-loadable';
import styled from 'styled-components';
import { Loader } from './Loader';
import { StyledAppBar as Wrapper, StyledButton as Button } from '../ui/AppBar';
import Logo from './Logo';

const Search = styled(SearchBar)`
  &&& {
    :hover {
      border-color: pink;
    }
  }
`;

const Favorites = loadable({
  loader: () => import('../pages/Favorites'),
  loading: Loader
});

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      searchSubmitted: false
    };
  }

  componentWillReceiveProps = () => this.setState({ searchValue: '', searchSubmitted: false });

  onMouseOver = () => {
    Favorites.preload();
  };

  render() {
    const { isFetched, isFetchedGenres } = this.props;
    const { searchValue, searchSubmitted } = this.state;

    return (
      <Wrapper position="static">
        <Link to="/" style={{ marginTop: '5px' }}>
          <Logo />
        </Link>
        <Button
          style={{ minWidth: '42px', margin: '4px' }}
          size="small"
          onMouseOver={this.onMouseOver}
          component={({ ...props }) => <Link to="/favorites/" {...props} />}
        >
          <List />
        </Button>
        <Search
          searchIcon={<br />}
          placeholder="Search movie"
          style={{ flex: 8, boxShadow: 'unset', border: '1px solid rgb(218,220,224)', borderRadius: '8px' }}
          onChange={value => this.setState({ searchValue: value })}
          value={searchValue}
          onRequestSearch={() => this.setState({ searchSubmitted: true })}
        />
        {searchSubmitted && searchValue.length >= 1 && <Redirect to={{ pathname: '/search', search: `movie=${searchValue}` }} />}
      </Wrapper>
    );
  }
}

export default Header;
