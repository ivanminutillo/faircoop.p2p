import React from 'react'
import Home from './pages/home'
import Organization from './pages/organization'
import Economic from './pages/economic'
import Tools from './pages/tools'
import Library from './pages/library'
import JoinUs from './pages/joinus'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const App = () => (
  <Router>
    <div className='app'>
      <header className='main_header'>
        <div className='header_logo'>
          <span className='logo_earth' />
          <span className='logo_brand' />
        </div>
        <nav className='header_menu'>
          <Link to={'/'}>Home</Link>
          <Link to={'/organization'}>Organization</Link>
          <Link to={'/economic-system'}>economic system</Link>
          <Link to={'/tools'}>tools</Link>
          <Link to={'/library'}>library</Link>
          <Link to={'/join-us'}>join us</Link>
        </nav>
      </header>
      <Route exact path='/' component={Home} />
      {/* <Route path='/organization' component={Organization} />
      <Route path='/economic-system' component={Economic} />
      <Route path='/tools' component={Tools} />
      <Route path='/library' component={Library} />
      <Route path='/join-us' component={JoinUs} /> */}
    </div>
  </Router>
)

export default App
