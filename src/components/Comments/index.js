import React from 'react';

import * as Styled from './styles';

import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

const Comments = ({ data }) => {

  let disqusConfig = {
    // url: `${config.siteUrl+location.pathname}`,
    // identifier: post.id,
    // title: post.title,
  }
  
  return (
    <Styled.Comments>
        <CommentCount config={disqusConfig} placeholder={'...'} />
        <Disqus config={disqusConfig} />
    </Styled.Comments>
  );
}

export default Comments;
