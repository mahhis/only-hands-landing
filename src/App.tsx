import { Route, Router } from 'preact-router'

import Delivery from 'pages/Delivery'
import Main from 'pages/Main'
import Pay from 'pages/Pay'
import WeAreClosed from 'pages/WeAreClosed'

export default function () {
  return (
    <Router>
      {/* /only-hands-landing this line is necessary for the correct operation of the project on the github page */}
      <Route path="/" component={Main} />
      <Route path="/:slide" component={Main} />
      <Route path="/address" component={Delivery} />
      <Route path="/pay" component={Pay} />
      <Route path="/close" component={WeAreClosed} />
    </Router>
  )
}
