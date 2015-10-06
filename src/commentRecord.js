import Immutable from 'immutable';
import Rx from 'rx';
import commentData from './commentData';

const CommentRecord = Immutable.Record({
  id: undefined,
  author: undefined,
  text: ''
});

const commentSubject = new Rx.BehaviorSubject(Immutable.List(commentData.map(c => {
  return new CommentRecord(c);
})));

export const commentListStream = commentSubject.shareReplay(1);

export function makeComment (commentObject) {
  commentObject.id = Date.now();
  const commentList = commentSubject.getValue();
  const newComment = new CommentRecord(commentObject);
  commentSubject.onNext(commentList.push(newComment));
}
