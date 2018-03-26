import React from 'react';

const AddComment = () => (
  <div className="addcomment">
    <textarea className="reply" type="text" placeholder="Add Comment..." />
    <div className="addcomment-profile">
      <button className="add-comment-btn">Send</button>
      <button type="reset" className="add-comment-btn">
        Reset
      </button>
    </div>
  </div>
);

export default AddComment;
