/**
 * Top Bar Component File for Header
 *
 * @package frontend/components/header
 * @author Luis Andres <ion.podolean22@gmail.com>
 * @copyright 2021-01-16
 * */

import React from 'react'
import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Modal } from '@material-ui/core'
import { LocationOn } from '@material-ui/icons'
import ApiService from 'services/api'

const useStyles = makeStyles({
    root: {
        width: '100%'
    },
    modal: {
        height: '100%',
    },
    nav_item: {
        padding: '0px 10px'
    },
    avatar: {
        height: '22px',
        borderRadius: '50%',
    },
    username: {
        padding: '0 5px',
    }
})
const modalStyles = makeStyles({
    root: {
        height: '100%',
    },
    content: {
        maxWidth: '330px',
        backgroundColor: 'white',
        margin: 'auto',
        padding: '20px',
        marginTop: '10%',
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
    input_content: {
        padding: '5px',
    },
    input: {
        width: '100%',
        padding: '5px',
        height: '40px',
        '&:hover': {
            outline: 'none'
        },
        '&:focus': {
            outline: 'none'
        }
    },
    button: {
        width: '100%',
        border: 'none',
        height: '40px',
        borderRadius: 0,
        backgroundColor: 'black',
        color: 'white',
        cursor: 'pointer',
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




export default function TopBar() {
    const classes = useStyles()
    const modal_classes = modalStyles()
    const [isClientSide, setIsClientSide] = useState(false);

    /**
     * The function for access user data.
     * **/
    const [authUser, setAuthUser] = useState([])

    const [loginOpen, setLoginOpen] = useState(false)

    /**
     * The function for set login email.
     * **/
    const [loginEmail, setLoginEmail] = useState(null)

    /**
     * The function for get email from input tag.
     * **/
    const onChangeLoginEmail = (e) => {
        setLoginEmail(e.target.value)
    }

    /**
     * The function for save the value to local storage.
     * **/
    const setLocalStorageValue = (key, val) =>{
        window.localStorage.setItem(key, JSON.stringify(val))
    }

    /**
     * The function for get the value from local storage.
     * **/
    const getLocalStorageValue = (key) => {
        const val = window.localStorage.getItem(key)
        return JSON.parse(val)
    }

    /**
     * The function for set login password.
     * **/
    const [loginPassword, setLoginPassword] = useState(null)
    // const [loginSuccessState, setLoginSuccessState] = useState(true)
    // const [loginStateMessage, setLoginStateMessage] = useState('')

    /**
     * The function for get password from input tag.
     * **/
    const onChangeLoginPassword = (e) => {
        setLoginPassword(e.target.value)
    }

    /**
     * The function for set login success state.
     * **/
    const [authState, setAuthState] = useState(false)

    /**
     * The function for set login success state.
     * **/
    const [authStateMessage, setAuthStateMessage] = useState(false)

    /**
     * The function for connect to backend.
     * **/
    const login = () => {
        let authData = {
            'email': loginEmail,
            'password': loginPassword,
        }
        ApiService.login(authData).then((res) => {
            if (res.data.code === 200) {
                setLocalStorageValue('authUser', res.data.user)
                setLocalStorageValue('authState', true)
                loginModalClose()
                setAuthState(true)
                setAuthUser(res.data.user)
                setAuthStateMessage(res.data.message)
            }
            else {
                setAuthState(false)
                setAuthStateMessage(res.data.message)
            }
        })
    }

    /**
     * The function for open login modal.
     * **/
    const loginModalOpen = () => {
        setLoginOpen(true)
    }
    /**
     * The function for close login modal.
     * **/
    const loginModalClose = () =>{
        setLoginOpen(false)
    }

    /**
     * The login modal body part
     * **/
    const loginModalBody = (
        <div className={`${modal_classes.content}`}>
            <div className={`${modal_classes.title} text-center`}>
                <h4>Login</h4>
            </div>
            <div className={`${(authState) ? modal_classes.dis_none : modal_classes.dis_flex}`}>
                <span className={`${modal_classes.error_message}`}>{ authStateMessage }</span>
            </div>
            <div className={`${modal_classes.body}`}>
                <div className={`${modal_classes.input_content}`}>
                    <input className={`${modal_classes.input}`} type={'email'} onChange={onChangeLoginEmail} />
                </div>
                <div className={`${modal_classes.input_content}`}>
                    <input className={`${modal_classes.input}`} type={'password'} onChange={onChangeLoginPassword} />
                </div>
                <div className={`${modal_classes.input_content} text-right`}>
                    <a href={ '/forget-password' }>Forgot Password?</a>
                </div>
                <div className={`${modal_classes.input_content}`}>
                    <input className={`${modal_classes.button}`} type={'button'} value={'Login'} onClick={login} />
                </div>
                <div className={`${modal_classes.input_content} text-center`}>
                    <p>Don't have an account? <a href={ '/register' }>Register</a></p>
                </div>
            </div>
        </div>
    )
    const [locationOpen, setLocationOpen] = useState(false)
    const locationModalOpen = () => {
        setLocationOpen(true)
    }
    const locationModalClose = () => {
        setLocationOpen(false)
    }

    useEffect(() => {
        setIsClientSide(true);
    }, [])

    const locationModalBody = (
        <div>

        </div>
    )
    if(isClientSide) {
        return (
            <div className={`dis-flex ${classes.root}`}>
                <div className={`col-md-12`}>
                    <ul className={`ul-no-style float-left`}><a href={ '/contact' }><span className={`f-14`}> Contact </span></a></ul>
                    <ul className={`ul-no-style dis-flex m-l-auto float-right`}>
                        <li className={`${classes.nav_item}`}><a className={`cur-pointer`} onClick={ locationModalOpen }><span className={`f-14`}><LocationOn/> Location </span></a></li>
                        |
                        <li className={`dis-flex ${classes.nav_item} ${(getLocalStorageValue('authState')) ? modal_classes.dis_flex : modal_classes.dis_none}`}>
                            <img className={`${classes.avatar}`} src={ (authUser.avatar) ? authUser.avatar : 'images/user.png' }/>
                            <span className={`m-auto f-14 ${classes.username}`}>{ (getLocalStorageValue('authUser')) ? getLocalStorageValue('authUser').username : '' }</span>
                        </li>
                        <li className={`${classes.nav_item} ${(getLocalStorageValue('authState')) ? modal_classes.dis_none : modal_classes.dis_flex}`}><a className={`cur-pointer`} onClick={ loginModalOpen }><span className={`f-14`}> Login </span></a></li>
                        <span className={`${(getLocalStorageValue('authState')) ? modal_classes.dis_none : modal_classes.dis_flex}`}>/</span>
                        <li className={`${classes.nav_item} ${(getLocalStorageValue('authState')) ? modal_classes.dis_none : modal_classes.dis_flex}`}><a href={ '/register' }><span className={`f-14`}> Register </span></a></li>
                    </ul>
                </div>
                <Modal
                    className={`${classes.modal}`}
                    open={ loginOpen }
                    onClose={ loginModalClose }
                >
                    { loginModalBody }
                </Modal>
                <Modal
                    open={ locationOpen }
                    onClose={ locationModalClose }
                >
                    { locationModalBody }
                </Modal>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}