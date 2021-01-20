/**
 * Register Page File
 *
 * @package frontend/pages
 * @author Ion Podolean <ion.podolean22@gmail.com>
 * @copyright 2021-01-16
 * */

import { makeStyles } from '@material-ui/core/styles'
import Header from "../components/header";
import Register from "../components/contents/register";
import Footer from "../components/footer";
import React from "react";

const useStyles = makeStyles({

})
export default function Register() {
    const classes = useStyles()
    return (
        <div className={`${classes.root} m-auto`}>
            <Header/>
            <Register
                latest_products = { latestProducts }
            />
            <Footer/>
        </div>
    )
}