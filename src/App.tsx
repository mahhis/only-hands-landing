import Delivery from 'pages/Delivery'
import Main from 'pages/Main'
import Pay from 'pages/Pay'
import Router from 'preact-router'

export default function () {
  return (
    <Router>
      <Main     path="/" />
      <Main     path="/:slide" />
      <Delivery path="/address" />
      <Pay      path="/pay" />
    </Router>
  )
}
