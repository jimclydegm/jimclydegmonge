import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';

const Footer = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        {/* <Styled.Link href="/" rel="noreferrer noopener" target="_blank"> */}
        <Styled.Link href="https://github.com/jimclydegm"
          rel="noreferrer noopener"
          target="_blank">
          GitHub
        </Styled.Link>
        <Styled.Link href="https://github.com/jimclydegm"
          rel="noreferrer noopener"
          target="_blank">
          GitHub
        </Styled.Link>
        <Styled.Link
          href="https://github.com/SaimirKapaj/gatsby-markdown-personal-website"
          rel="noreferrer noopener"
          target="_blank">
          Twitter
        </Styled.Link>
        {/* <Styled.Link href="/" rel="noreferrer noopener" target="_blank">
          Behance
        </Styled.Link> */}
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
