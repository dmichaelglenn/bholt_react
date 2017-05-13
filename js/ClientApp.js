import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var div = React.DOM.div
var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
            div(null,
            MyTitleFactory({title: 'props are the best', color: 'red'}),
            MyTitleFactory({title: 'hey guy', color: 'mediumaquamarine'}),
            MyTitleFactory({title: 'suh dudes', color: 'rebeccapurple'}),
            MyTitleFactory({title: 'rendering is a thing', color: 'blanchedalmond'})
            )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
