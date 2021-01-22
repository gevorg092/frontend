/**
 * The location modal component for set location.
 *
 * @package components/header/topbar
 * @author Ion Podolean <ion.podolean22@gmail.com>
 * */

import { useState, useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Modal } from '@material-ui/core'
import globalContext from 'context'

const useStyles = makeStyles({
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

export default function LocationModal() {
    const classes = useStyles()

    /**
     * The context function for close location modal.
     * */
    const { locationModalStatus, closeLocationModal } = useContext(globalContext)

    /**
     * The function for save the value to local storage.
     * */
    const setLocalStorageValue = (key, val) =>{
        window.localStorage.setItem(key, JSON.stringify(val))
    }

    /**
     * The function for get the value from local storage.
     * */
    const getLocalStorageValue = (key) => {
        const val = window.localStorage.getItem(key)
        return JSON.parse(val)
    }

    return (
        <div className={`row`}>
            <Modal
                open={ locationModalStatus }
                onClose={ closeLocationModal }
            >
                { locationModalBody }
            </Modal>
        </div>
    )
}