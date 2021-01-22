/**
 * The component for top bar.
 *
 * @package components/header/topbar
 * @author Ion Podolean <ion.podolean22@gmail.com>
 * */

import { useState, useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { LocationOn } from '@material-ui/icons'
import Router from 'next/router'
import globalContext from 'context'
import { Modal } from '@material-ui/core'

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
    },

})

const modalStyles = makeStyles({
    root: {
        width: '350px',
        backgroundColor: 'white',
        margin: 'auto',
        marginTop: '20%',
        '&:hover': {
            outline:'none',
        },
        '&:focus': {
            outline:'none',
        },
    },
    modal: {
        padding: '30px',
    },
    select: {
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
})

export default function TopBar() {
    const classes = useStyles()
    const modal_classes = modalStyles()

    /**
     * The context functions.
     * */
    const {
        setLocalStorageValue,
        getLocalStorageValue,
    } = useContext(globalContext)

    const [ locationModalStatus, setLocationModalStatus ] = useState(false)

    const openLocationModal = () => {
        setLocationModalStatus(true)
    }

    const closeLocationModal = () => {
        setLocationModalStatus(false)
    }

    /**
     * The location modal body.
     * */
    const locationModalBody = (
        <div className={`${modal_classes.root}`}>
            <div className={`${modal_classes.modal}`}>
                <div className={`form-group text-center`}>
                    <h4> Select Location </h4>
                </div>
                <div className={`form-group text-center`}>
                    <p> Modesy allows you to shop from anywhere in the world. </p>
                </div>
                <div className={`form-group text-center`}>
                    <select className={`form-control input`}>
                        <option>All</option>
                        {/*{*/}
                        {/*props.allCountries.map((country, index) => (*/}
                        {/*<option key={`${index}`}>{ country.name }</option>*/}
                        {/*))*/}
                        {/*}*/}
                    </select>
                </div>
                <div className={`form-group text-center`}>
                    <input type={'button'} className={`button`} value={'Update Location'} />
                </div>
            </div>
        </div>
    )


    /**
     * The value for get status of client side status.
     * */
    const [isClientSide, setIsClientSide] = useState(false)

    /**
     * The function for logout.
     * */
    const logout = () => {
        window.localStorage.clear()
        Router.push('/')
    }

    /**
     * The function for close location modal.
     * */
    useEffect(() => {
        setIsClientSide(true)
    }, [])

    return (
        <div className={`${classes.root}`}>
            <ul className={`ul-no-style float-left`}><a href={ '/contact' }><span className={`f-14`}> Contact </span></a></ul>
            <ul className={`ul-no-style float-right dis-flex`}>
                {
                    isClientSide ?
                        <>
                            <li className={`${classes.nav_item}`}><a className={`cur-pointer`} onClick={ openLocationModal }><span className={`f-14`}><LocationOn/> Location </span></a></li>
                            |
                            {/*<li className={`${classes.nav_item} ${(getLocalStorageValue('authState')) ? 'dis-flex' : 'dis-none'}`}>*/}
                                {/*<a className={`dropdown-toggle`} data-toggle='dropdown' aria-expanded='false'>*/}
                                    {/*<img className={`${classes.avatar}`} src={ (authUser.avatar) ? authUser.avatar : 'images/user.png' }/>*/}
                                    {/*<span className={`m-auto f-14 ${classes.username}`}>{ (getLocalStorageValue('authUser')) ? getLocalStorageValue('authUser').username : '' }</span>*/}
                                {/*</a>*/}
                            {/*</li>*/}
                            <li className={`${classes.nav_item} ${(getLocalStorageValue('authState')) ? 'dis-flex' : 'dis-none'}`}>
                                <a onClick={ logout }><span className={`f-14`}> logout </span></a>
                            </li>
                            <li className={`${classes.nav_item} ${(getLocalStorageValue('authState')) ? 'dis-none' : 'dis-flex'}`}>
                                <a href={'/login'}><span className={`f-14`}> Login </span></a>
                            </li>
                            <li className={`${classes.nav_item} ${(getLocalStorageValue('authState')) ? 'dis-none' : 'dis-flex'} pad-0`}>
                                <span>/</span>
                            </li>
                            <li className={`${classes.nav_item} ${(getLocalStorageValue('authState')) ? 'dis-none' : 'dis-flex'}`}>
                                <a href={`/register`}><span className={`f-14`}> Register </span></a>
                            </li>
                        </>
                    : ''
                }
            </ul>
            <Modal
                open={ locationModalStatus }
                onClose={ closeLocationModal }
            >
                { locationModalBody }
            </Modal>
        </div>
    )
}