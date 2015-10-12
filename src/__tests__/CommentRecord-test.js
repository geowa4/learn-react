jest.dontMock('../CommentRecord.js')
describe('CommentRecord', () => {
  it('appends new comment to end of list in stream', () => {
    const commentListStream = require('../CommentRecord').commentListStream
    const makeComment = require('../CommentRecord').makeComment
    makeComment({
      author: 'me',
      text: 'this is a test of the emergency broadcast system.'
    })
    commentListStream.forEach(list => {
      const last = list.last()
      expect(last.get('author')).toBe('me')
      expect(last.get('text').length).toBe(49)
    })
  })
})
