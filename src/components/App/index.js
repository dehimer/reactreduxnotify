import React from 'react'
import { Link } from 'react-router'

export default function App({ children }) {
    return (
        <div>
            <header>
                {' '}
                <Link to='/'>Home</Link>
                {' '}
                <Link to='/email'>Send an Email</Link>
            </header>
        <div style={{ marginTop: '1.5em' }}>{children}</div>
    </div>
  )
}