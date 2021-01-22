/**
 * The login page file.
 *
 * @package frontend/pages
 * @author Ion Podolean <ion.podolean22@gmail.com>
 * */

import { makeStyles } from '@material-ui/core/styles'
import Header from "../components/header";
import Login from "../components/contents/Login";
import Footer from "../components/footer";
import React from "react";

const useStyles = makeStyles({
    root: {
        maxWidth: '1200px'
    }
})
export default function Home() {
    const classes = useStyles()
    return (
        <div className={`${classes.root} m-auto`}>
            <Header/>
            <Login/>
            <Footer/>
        </div>
    )
}