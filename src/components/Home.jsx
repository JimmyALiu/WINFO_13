import React from 'react'
import Activities from './homeComponents/Activities'
import Header from './homeComponents/Header'
import Courses from './homeComponents/Courses'

export default function Home() {
  return (
    <div>
        <Header title='Study App' />
        <Courses />
        <Activities />
    </div>
  )
}
