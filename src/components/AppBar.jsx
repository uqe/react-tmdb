import React, { Component, Fragment } from 'react';
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
  }

  componentWillReceiveProps = () => this.setState({ searchValue: '', searchSubmitted: false });

  render() {
    const { isFetched, isFetchedGenres } = this.props;
    const { searchValue, searchSubmitted } = this.state;

    return (
      <Fragment>
        <StyledAppBar position="static">
          <Toolbar>
            <AppName variant="title" component={({ ...props }) => <Link to="/" {...props} />}>
              TMDb
            </AppName>
            <AppName variant="title" component={({ ...props }) => <Link to="/favorites/page/1" {...props} />}>
              Fav
            </AppName>
            <StyledSearchBar
              onChange={value => this.setState({ searchValue: value })}
              value={searchValue}
              onRequestSearch={() => this.setState({ searchSubmitted: true })}
            />
            {searchSubmitted && searchValue.length >= 1 && <Redirect to={{ pathname: '/search', search: `movie=${searchValue}` }} />}
          </Toolbar>
        </StyledAppBar>
        {isFetched && <StyledCircularProgress size={100} />}
      </Fragment>
    );
  }
}

export default AppBar;
