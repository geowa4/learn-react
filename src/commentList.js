/* @flow */
import React from 'react/addons';
import marked from 'marked';

const Comment = React.createClass({
  mixins: [React.addons.PureRenderMixin],
  render: function() {
    const rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});

export default React.createClass({
  mixins: [React.addons.PureRenderMixin],
  render: function() {
    const commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment key={comment.get('id')} author={comment.get('author')}>
          {comment.get('text')}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes.toArray()}
      </div>
    );
  }
});
