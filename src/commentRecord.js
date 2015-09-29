/* @flow */
import Immutable from 'immutable';

export const CommentRecord = Immutable.Record({
  id: undefined,
  author: undefined,
  text: ''
});

export function toListOfComments (comments: Array<Object>): Immutable.List {
  return Immutable.List(comments.map(c => new CommentRecord(c)));
};
