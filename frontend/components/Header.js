import Nav from './Nav';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';

import { StyledHeader, Logo } from './styles/HeaderStyles';

Router.onRouteChangeStart = () => {
  NProgress.start();
}
Router.onRouteChangeComplete = () => {
  NProgress.done();
}
Router.onRouteChangeError = () => {
  NProgress.done();
}

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a>sick fit</a>
        </Link>
      </Logo>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>cart</div>
  </StyledHeader>
);

export default Header;
