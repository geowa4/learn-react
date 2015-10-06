import React from 'react';
import RxReact from 'rx-react';
import CommentForm from './commentForm';
import CommentList from './commentList';
import { commentListStream, makeComment } from './commentRecord';

export class CommentComponent extends RxReact.Component {
  getStateStream () {
    return commentListStream.map(list => {
      return { data: list }
    });
  }

  componentWillMount () {
    super.componentWillMount();
    this.makeComment = RxReact.FuncSubject.create();
    this.makeComment
      .forEach(makeComment);
  }

  render () {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.makeComment} />
      </div>
    );
  }
}

