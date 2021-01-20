import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useState, useEffect } from 'react'

const useStyles = makeStyles({
    root: {

    },
    footer_titles: {
        fontSize: '18px',
        fontWeight: 600,
    },
    payment_image: {
        height: '22px',
    }
})

export default function Footer() {
    const classes = useStyles()
    return (
        <div className={`${classes.root}`}>
            <div className={`col-md-12`}>
                <div className={`row`}>
                    <div className={`col-md-3`}>

                    </div>
                    <div className={`col-md-3`}>
                        <p className={`${classes.footer_titles}`}>Quick Links</p>
                        <ul className={`ul-no-style`}>
                            <li>
                                <a href={'/home'}>Home</a>
                            </li>
                            <li>
                                <a href={'/blog'}>Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div className={`col-md-3`}>
                        <p className={`${classes.footer_titles}`}>Information</p>
                        <ul className={`ul-no-style`}>
                            <li>
                                <a href={'/terms-conditions'}>Terms & Conditions</a>
                            </li>
                        </ul>
                    </div>
                    <div className={`col-md-3`}>
                        <p className={`${classes.footer_titles}`}>Follow Us</p>
                        <ul className={`ul-no-style`}>

                        </ul>
                    </div>
                </div>
            </div>
            <div className={`col-md-12`}>
                <div className={`row`}>
                    <div className={`col-md-3 m-l-auto`}>
                        <p className={`${classes.footer_titles}`}>Newsletter</p>
                    </div>
                </div>
            </div>
            <div className={`col-md-12`}>
                <div className={`row`}>
                    <div>
                        <p>Copyright 2020 Modesy - All Rights Reserved.</p>
                    </div>
                    <div className={`m-l-auto`}>
                        <img className={`${classes.payment_image}`} src={'images/payments/amex.svg'}/>
                        <img className={`${classes.payment_image}`} src={'images/payments/maestro.svg'}/>
                        <img className={`${classes.payment_image}`} src={'images/payments/mastercard.svg'}/>
                        <img className={`${classes.payment_image}`} src={'images/payments/visa.svg'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}