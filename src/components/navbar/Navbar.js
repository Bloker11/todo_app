import styles from './Navbar.module.css'
import {Link} from 'react-router-dom'
import React from 'react'
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'

export default function Navbar() {

    const { logout } = useLogout();
    const { user } = useAuthContext();
  return (
    <nav className={styles.navbar}>
        <ul>
            <li className={styles.title}>
                simple to-do
            </li>
            {user?
            <>
            <p>hello, {user.displayName}</p>
            <li>
                <button className="btn-disabled" onClick={logout}>logout</button>
            </li>
            </>:
            <>
                <li><Link to="/login">login</Link></li>
                <li><Link to="/signup">signup</Link></li>
            </>
            }
            
            
        </ul>
    </nav>
  )
}
