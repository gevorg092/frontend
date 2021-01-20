/**
 * Register Component File
 *
 * @package frontend/pages
 * @author Ion Podolean <ion.podolean22@gmail.com>
 * @copyright 2021-01-16
 * */

import { useState } from 'react'

export default function Register() {
    return (
        <div>
            <div>
                <h4> Register </h4>
                <input className={`form-control`} type={'text'} placeholder={'Username'}/>
                <input className={`form-control`} type={'text'} placeholder={'First Name'}/>
                <input className={`form-control`} type={'text'} placeholder={'Last Name'}/>
                <input className={`form-control`} type={'email'} placeholder={'Email Address'}/>
                <input className={`form-control`} type={'password'} placeholder={'Password'}/>
                <input className={`form-control`} type={'password'} placeholder={'Confirm Password'}/>
                <input className={`form-control`} type={'button'} value={'Register'}/>
            </div>
        </div>
    )
}