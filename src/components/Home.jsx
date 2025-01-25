import React from 'react'
import Activities from './homeComponents/Activities'
import Header from './homeComponents/Header'
import Navigation from './homeComponents/Navigation'
import Courses from './homeComponents/Courses'

export default function Home() {
  return (
    <div>
        <Header />
        <Courses />
        <Navigation />
        <Activities />
    </div>
  )
}
