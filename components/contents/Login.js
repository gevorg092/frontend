/**
 * Login Component File
 *
 * @package frontend/pages
 * @author Ion Podolean <ion.podolean22@gmail.com>
 * */

import { useState, useContext } from 'react'
import Router from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import ApiService from 'services/api'
import globalContext from 'context'

const useStyles = makeStyles({
    root: {
        height: '100%',
    },
    content: {
        maxWidth: '330px',
        backgroundColor: 'white',
        margin: '10% auto',
        padding: '20px',
        border: 'solid 1px black',
        '&:hover': {
            outline:'none',
        },
        '&:focus': {
            outline:'none',
        },
    },
    title: {
        padding: '10px 0'
    },
    body: {

    },
    dis_none: {
        display: 'none',
    },
    dis_flex: {
        display: 'flex',
    },
    error_message: {
        color: 'red'
    }
})

export default function Login() {
    const classes = useStyles()

    const {
        setLocalStorageValue,
    } = useContext(globalContext)

    /**
     * The function for set login email.
     * */
    const [loginEmail, setLoginEmail] = useState(null)

    /**
     * The function for get email from input tag.
     * */
    const onChangeLoginEmail = (e) => {
        setLoginEmail(e.target.value)
    }

    /**
     * The function for set login password.
     * */
    const [loginPassword, setLoginPassword] = useState(null)

    /**
     * The function for get password from input tag.
     * */
    const onChangeLoginPassword = (e) => {
        setLoginPassword(e.target.value)
    }

    /**
     * The function for set error message.
     * */
    const [ message, setMessage ] = useState('')

    /**
     * The function for login.
     * */
    const login = () => {
        let authData = {
            'email': loginEmail,
            'password': loginPassword,
        }
        ApiService.login(authData).then((res) => {
            setMessage(res.data.message)
            if (res.data.code === 200) {
                setLocalStorageValue('authUser', res.data.user)
                setLocalStorageValue('authState', true)
                Router.push('/')
            }
            else {
                setLocalStorageValue('authState', false)
            }
        })
    }
    return (
        <div className={`${classes.content}`}>
            <div className={`${classes.title} text-center`}>
                <h4> Login </h4>
            </div>
            <div className={`${(message === '') ? 'dis-none' : 'dis-flex'}`}>
                <span className={`${classes.error_message}`}>{ message }</span>
            </div>
            <div className={`${classes.body}`}>
                <div className={`pad-5`}>
                    <input className={`input`} type={'email'} onChange={ onChangeLoginEmail } />
                </div>
                <div className={`pad-5`}>
                    <input className={`input`} type={'password'} onChange={ onChangeLoginPassword } />
                </div>
                <div className={`pad-5 text-right`}>
                    <a href={ '/forget-password' }>Forgot Password?</a>
                </div>
                <div className={`pad-5`}>
                    <input className={`button`} type={'button'} value={'Login'} onClick={ login } />
                </div>
                <div className={`pad-5 text-center`}>
                    <p>Don't have an account? <a href={ '/register' }>Register</a></p>
                </div>
            </div>
        </div>
    )
}