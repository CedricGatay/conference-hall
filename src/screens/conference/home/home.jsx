import React from 'react'
import { Link } from 'redux-little-router'
import forRoute from 'hoc-little-router'
import tnt19 from 'styles/images/tnt19.svg'

import './home.css'

const Home = () => (
  <div className="home">
    <div className="home-logo">
      <img src={tnt19} alt="TNT 19 Logo" />
      <p>Touraine Tech &apos;19 — Call For Papers</p>
    </div>
    <Link href="/speaker" className="home-link">
      <i className="fa fa-microphone" />
      <span>I&apos;m a speaker</span>
    </Link>
   {/* <Link href="/organizer" className="home-link">
      <i className="fa fa-rocket" />
      <span>I&apos;m an organizer</span>
    </Link> */}
  </div>
)

export default forRoute.absolute('HOME')(Home)
