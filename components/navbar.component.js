import React from 'react'
import { connect } from "react-redux"
import styles from "./navbar.module.css"
import Link from "next/link"
import { selectCurrentUser } from '../redux/user/user.selector'

const Navbar = ({ user }) => {
  return (
    
      
        <div className={styles.header}>
          <div>
              
              {user && user.data && user.data.user.username && <span className={styles.username}>({user.data.user.username})
              </span>}
        {user && user.data && user.data.email && <span className={styles.username}>({user.data.email})
              </span>}
        <span className={styles.username} >
          <Link className={styles.l} href='/'>Home</Link>
        </span>

        <span className={styles.username} >
          <Link className={styles.l} href='/login'>Sign-up/Login</Link>
              </span>
        
          </div>

      </div>
  )
}

const mapStateToProps = (state) => ({
    user: selectCurrentUser(state)
})

export default connect(mapStateToProps)(Navbar)