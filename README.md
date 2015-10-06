Learn React
===========

Experimentations with React, RxJS, Babel, and Webpack.

Usage
-----

First, get everything installed.

```
$ npm i -g gulp http-server
$ npm i
```

Now, run each of the following commands in its own window.

```
$ gulp dev
```

```
$ hs
```

Explanation
-----------

Code flow starts with main.js, which renders the `CommentComponent` into a specific element already in the DOM.
This `CommentComponent` extends `RxReact.Component`, giving it the ability to automatically set its state based on the most recent event from a stream (e.g. `Rx.Observable`).
In comments.js, the `CommentComponent` declares this "state stream" to be `commentListStream` defined in commentRecord.js.
Each event in the stream is an `Immutable.List`.
`CommentComponent` creates an instance of `RxReact.FuncSubject` to be used as the event handler when a new comment is submitted.
A `Subject` is both an `Observer` and an `Observable`, meaning it can listen to and generate events.
A `FuncSubject` is essentially just a function that makes generating events easier.
Subscribed to this `FuncSubject` is the `makeComment` function defined in commentRecord.js.
This function sets the value of the `commentSubject` to be a `Immutable.List` with a new comment appended to the end.
Since `commentListStream` is built from this `Rx.BehaviorSubject`, whenever `commentSubject` is updated, a new event propagates to `commentListStream`, which updates `CommentComponent` and causes a render.

A simplified sequence of events
-------------------------------

```
initial comment data ->
comment subject, v1 ->
comment list stream, event 1 ->
render 1 ->
new comment ->
comment subject, v2 ->
comment list stream, event 2 ->
render 2
```

