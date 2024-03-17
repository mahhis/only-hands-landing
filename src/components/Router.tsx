import { Router } from 'preact-router'
import Address from 'pages/Delivery'
import Main from 'pages/Main'

const AppRouter = () => (
  <Router>
    <Main />
    <Main path="/:slide" />
    <Address path="/addres" />
  </Router>
)

export default AppRouter
