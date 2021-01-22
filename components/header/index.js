/**
 * The header component.
 *
 * @package frontend/components/header
 * @author Ion Podolean <ion.podolean22@gmail.com>
 * */

import React from 'react'
import TopBar from 'components/header/topbar'
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