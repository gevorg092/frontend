/**
 * Content Component File for Home Page
 *
 * @package frontend/components/header
 * @author Ion Podolean <ion.podolean22@gmail.com>
 * */

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        padding: '0px 10px'
    },
    product_image: {
        width: '100%',
    },
    product_title: {
        textOverflow: 'ellipsis',
        whiteSpace: 'pre',
        overflow: 'hidden',
        fontSize: '.875rem'
    },
    product_price: {
        fontSize: '.875rem'
    }
})
export default function Content(props) {
    const classes = useStyles()
    return (
        <div className={`row`}>
            {props.latestProducts.map((latestProduct, index) => (
                <div className={`col-md-3`} key={`${index}`}>
                    <div className={classes.root}>
                        <img
                            src={ latestProduct.image_default }
                            className={ classes.product_image }
                        />
                        <p className={classes.product_title}>{ latestProduct.title }</p>
                        <p className={ classes.product_price }>{ latestProduct.price } { latestProduct.currency }</p>
                    </div>
                </div>
            ))}
        </div>
    )
}