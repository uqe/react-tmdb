import React, { Component } from 'react';
import { StyledAppBar, StyledSearchBar, AppName, StyledCircularProgress } from '../ui/AppBar';
import { Link, Redirect } from 'react-router-dom';
import Toolbar from 'material-ui/Toolbar';

class AppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      searchSubmitted: false
    };

    // this.submitForm = this.submitForm.bind(this);
    this.goSearch = this.goSearch.bind(this);
  }

  // goSearch = value => {
  //   <Redirect to={{ pathname: '/search', state: { results: value } }} />;
  // };

  goSearch = () => {
    <Redirect to={{ pathname: '/search', state: { results: 'kek' } }} />;
  };

  // submitForm = () => {
  //   this.setState({ submit: true });
  // };

  render() {
    const { isFetched, isFetchedGenres } = this.props;
    const { searchValue, searchSubmitted } = this.state;

    return (
      <div>
        <StyledAppBar position="static">
          <Toolbar>
            <AppName variant="title" component={({ ...props }) => <Link to="/" {...props} />}>
              TMDb
            </AppName>
            <StyledSearchBar
              onChange={value => this.setState({ searchValue: value })}
              value={searchValue}
              onRequestSearch={() => this.setState({ searchSubmitted: true })}
            />
            {searchSubmitted && searchValue.length >= 1 && <Redirect to={{ pathname: '/search', search: `movie=${searchValue}` }} />}
            {searchSubmitted && searchValue.length >= 1 && this.setState({ searchValue: '', searchSubmitted: false })}
          </Toolbar>
        </StyledAppBar>
        {isFetched && <StyledCircularProgress size={100} />}
      </div>
    );
  }
}

export default AppBar;
