import { Route, Switch } from 'wouter-preact'
import { Suspense } from 'preact/compat'
import Delivery from 'pages/Delivery'
import Main from 'pages/Main'
import Pay from 'pages/Pay'
import WeAreClosed from 'pages/WeAreClosed'

export default function () {
  return (
    <div className="container mx-auto">
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          {/* /only-hands-landing/ this line is necessary for the correct operation of the project on the github page */}
          <Route path="/only-hands-landing/" component={Main} />
          <Route path="/only-hands-landing/address" component={Delivery} />
          <Route path="/only-hands-landing/pay" component={Pay} />
          <Route path="/only-hands-landing/close" component={WeAreClosed} />
        </Switch>
      </Suspense>
    </div>
  )
}
