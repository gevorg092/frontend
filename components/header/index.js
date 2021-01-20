/**
 * Header Component File
 *
 * @package frontend/components/header
 * @author Ion Podolean <ion.podolean22@gmail.com>
 * @copyright 2021-01-16
 * */

import React from 'react'
import TopBar from 'components/header/TopBar'
import NavBar from 'components/header/NavBar'
import CategoriesBar from 'components/header/CategoriesBar'

export default function Header() {
    return (
        <div className={`row`}>
            <TopBar/>
            <NavBar/>
            <CategoriesBar/>
        </div>
    )
}