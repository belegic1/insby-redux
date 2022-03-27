import React from 'react'
import { connect } from "react-redux"
import { setCurrentUser } from "../redux/user/user.actions"
import { useRouter } from "next/router"
import { useState } from 'react'
import styles from '../styles/Login.module.css'
import { selectCurrentUser } from '../redux/user/user.selector'

const Login = ({ token,user,setCurrentUser }) => {
    const router = useRouter()

    const [errorMsg, setErrorMsg] = useState(null)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [rememberme, setRememberme] = useState(false)
    const [confirmPasswordInput, setConfirmPassswordInput] = useState(false)

    async function register() {
        if (token) {
            const raw = {
                "login":username,
                "password": password,
                "rememberMe": true,
                "autoRegister": true,
                "admin": false
            }

            if (confirmPassword) {
                raw.confirmPassword = confirmPassword
            }

            const requestOptions = {
                method: 'POST',

                body: JSON.stringify(raw),
                redirect: 'follow',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            };

            try {
                const response = await fetch("https://dev-mrp.insby.tech/api/session/sign-in", requestOptions);
                const result_1 = await response.json();
                return result_1;
            } catch (error) {
                return console.log('error', error);
            }
        }
    }




  


    const handleSubmit = async e => {
        e.preventDefault()
        setCurrentUser(await register())

        setTimeout(() => {
            if (user && user.data && user.data.token) {
                router.push('/')
            }
            else if (user && user.errors) {
                setErrorMsg(user.errors.sessions[0].split(".")[2], () => {
                    if (errorMsg === "PasswordsNoMatch") {
                        setConfirmPassswordInput(true)
                    }
                })
            }
        }, 500)
             
    }

  return (
      <div>
        
          <div className={styles.login}>

              <div>
              </div>
              <form onSubmit={handleSubmit}>
                  <div className={styles.form}>
                      <input value={username} onChange={e => setUsername(e.target.value)} className={styles.input} type="text" placeholder='Username' />
                     
                      <input value={password} onChange={e => setPassword(e.target.value)} className={styles.input} type="password" placeholder="Password" />
                      {confirmPasswordInput && <>
                          <p>Please confirm your password:</p>
                          <input value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className={styles.input} type="password" placeholder="Confirm password" /></>}
                      <div>
                          <input className={styles.input} type="checkbox" name="Remember me" id="rememberme" />
                          <label value={rememberme} onChange={e => setRememberme(e.target.checked)} className={styles.label} htmlFor="rememberme">Remember me</label>
                      </div>

                      <button className={styles.input}>{errorMsg ? errorMsg : 'SignUp/Login'}</button>

                  </div>
              </form>
          </div>
      </div>
      
      
  )
}


const mapStateToProps = state => ({
    token: state.token.token,
    user: selectCurrentUser(state)
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(Login)