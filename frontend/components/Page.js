import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './Header';
import Meta from './Meta';
import { StyledPage, Inner } from './styles/PageStyles';
import { theme, GlobalStyles } from './styles/GlobalStyles';

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
