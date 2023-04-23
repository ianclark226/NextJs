import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
    <h1>Welcome to the Warp zone</h1>
    
    <ul>
      <li><Link href='/'>Home</Link></li>
      <li><Link href='/'>About</Link></li>
      <li><Link href='/'>Contact</Link></li>
    </ul>
    </div>
  )
}

export default HomePage