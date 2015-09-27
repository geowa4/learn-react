/* @flow */
import React from 'react/addons';
import commentData from './commentData';
import CommentForm from './commentForm';
import CommentList from './commentList';
import { CommentRecord, toListOfComments } from './commentRecord';

export default React.createClass({
  mixins: [React.addons.PureRenderMixin],
  getInitialState: function() {
    return { data: toListOfComments([]) }
  },
  handleCommentSubmit: function(comment) {
    const comments = this.state.data;
    const newComment = new CommentRecord(comment);
    this.replaceState({
      data: comments.concat([ newComment.set('id', `local_${Date.now()}`) ])
    });
  },
  loadComments: function() {
    this.replaceState({
      data: toListOfComments(commentData)
    });
  },
  componentDidMount: function () {
    this.loadComments();
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data}/>
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});
