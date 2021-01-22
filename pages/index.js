/**
 * The home page file.
 *
 * @package frontend/pages
 * @author Ion Podolean <ion.podolean22@gmail.com>
 * */

import React from 'react'
import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Header from 'components/header'
import Content from 'components/contents'
import Footer from 'components/footer'
import ApiService from 'services/api'

const useStyles = makeStyles({
    root: {
        maxWidth: '1200px'
    }
})

function getLocalStorageValue(key) {
    React.useEffect(() => {
        return window.localStorage.getItem(key)
    })
}

export default function Home() {
    const classes = useStyles()
    const [latestProducts, setLatestProducts] = useState([])
    const [allCountries, setAllCountries] = useState([])
    const [loginState, setLoginState] = useState(false)

    const authCheck = getLocalStorageValue('authState')
    useEffect(() => {
        if (!loginState){
            if (!authCheck)
                ApiService.index(false)
                    .then((res) => {
                        setLatestProducts(res.data.latestProducts)
                })

            setLoginState(true)
        }
    })

    return (
        <div className={`${classes.root} m-auto`}>
            <Header/>
            <Content
                latestProducts = { latestProducts }
            />
            <Footer/>
        </div>
    )
}
