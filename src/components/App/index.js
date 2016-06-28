import React from 'react'
import { Link } from 'react-router'

import styles from './index.css';

export default function App({ children }) {
    return (
        <div>
            <header className={ styles.header }>
                {' '}
                <Link to='/'>
                    <button>Главная</button>
                </Link>
                {' '}
                <Link to='/email'>
                    <button>Отправить письмо</button>
                </Link>
            </header>
        <div style={{ marginTop: '1.5em' }}>{children}</div>
    </div>
  )
}