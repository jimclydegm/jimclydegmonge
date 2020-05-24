import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';

import { DiscussionEmbed } from "disqus-react";
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

let disqusConfig = {
  //url: `${config.siteUrl+location.pathname}`,
  //  identifier: 123123,
  //  title: "asdasd",
}

const Comments = () => (
  <Styled.Comments>
    {/* <CommentContainer> */}
      {/* <CommentCount config={disqusConfig} placeholder={'...'} /> */}
      <Disqus config={disqusConfig} />
    {/* </CommentContainer> */}
  </Styled.Comments>
);

export default Comments;
