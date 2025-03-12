import { Route, Router } from 'wouter-preact'
import { Suspense } from 'preact/compat'
import Delivery from 'pages/Delivery'
import Main from 'pages/Main'
import Pay from 'pages/Pay'
import WeAreClosed from 'pages/WeAreClosed'

export default function () {
  return (
    <div className="container mx-auto">
      <Suspense fallback={<p>Loading...</p>}>
        <Router base="/only-hands-landing">
          <Route path="/" component={Main} />
          <Route path="/address" component={Delivery} />
          <Route path="/pay" component={Pay} />
          <Route path="/close" component={WeAreClosed} />
        </Router>
      </Suspense>
    </div>
  )
}
