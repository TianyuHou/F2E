import React from 'react';
import CommentListItem from './CommentListItem';

const CommentList = () => (
  <ul>
    <CommentListItem
      authorName="Mentor"
      postDate="Post: Sep 06,2017 11:16 AM"
      content="That’s actually true. Great work﻿"
    />
    <CommentListItem
      authorName="Allen Yu"
      postDate="Post: Sep 05,2017 8:42 PM"
      content="This girl is truly opening her heart! Truth is worth spreading, thank you"
    />
    <CommentListItem
      authorName="Allen Yu"
      postDate="Post: Sep 05,2017 2:10 PM"
      content="Wow, I can relate to this talk so much!!! The core values and problems seems same everywhere. Anyway, It was wonderful!!! Thank you!!!"
    />
  </ul>
);

export default CommentList;
