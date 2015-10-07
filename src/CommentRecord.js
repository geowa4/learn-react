import Immutable from 'immutable'
import Rx from 'rx'

const CommentRecord = Immutable.Record({
  id: undefined,
  author: undefined,
  text: ''
})

const commentData = [
  {"id": 1, "author": "Pete Hunt", "text": "This is one comment"},
  {"id": 2, "author": "Jordan Walke", "text": "This is *another* comment"}
]

const commentSubject = new Rx.BehaviorSubject(Immutable.List(commentData.map(c => {
  return new CommentRecord(c)
})))

export const commentListStream = commentSubject.shareReplay(1)

export function makeComment (commentObject) {
  commentObject.id = Date.now()
  const commentList = commentSubject.getValue()
  const newComment = new CommentRecord(commentObject)
  commentSubject.onNext(commentList.push(newComment))
}
