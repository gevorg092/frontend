/**
 * Register Component File
 *
 * @package frontend/pages
 * @author Ion Podolean <ion.podolean22@gmail.com>
 * */

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        marginTop: '30px',
        border: '1px solid #e6e6e6',
        padding: '30px',
    },
    input_content: {
        padding: '10px 0',
    },
    input: {
        '&:focus': {
            borderColor: '#222',
            boxShadow: 'none',
            borderRadius: '3px',
        }
    },
    checkbox: {
        height: '24px',
    },
    p: {
        padding: '0 5px',
    },
    a: {
        textDecoration: 'underline',
        '&:hover': {
            textDecoration: 'underline !important',
        }
    }
})

export default function Register() {
    const classes = useStyles()
    return (
        <div className={ `col-md-5 m-auto` }>
            <div className={`${classes.root}`}>
                <div className={`form-group`}>
                    <h4 className={`text-center`}> Register </h4>
                </div>
                <div className={`form-group`}>
                    <input className={`form-control ${classes.input}`} type={'text'} placeholder={'Username'}/>
                </div>
                <div className={`form-group`}>
                    <input className={`form-control ${classes.input}`} type={'text'} placeholder={'First Name'}/>
                </div>
                <div className={`form-group`}>
                    <input className={`form-control ${classes.input}`} type={'text'} placeholder={'Last Name'}/>
                </div>
                <div className={`form-group`}>
                    <input className={`form-control ${classes.input}`} type={'email'} placeholder={'Email Address'}/>
                </div>
                <div className={`form-group`}>
                    <input className={`form-control ${classes.input}`} type={'password'} placeholder={'Password'}/>
                </div>
                <div className={`form-group`}>
                    <input className={`form-control ${classes.input}`} type={'password'} placeholder={'Confirm Password'}/>
                </div>
                <div className={`form-group dis-flex`}>
                    <input className={`${classes.checkbox}`} type={'checkbox'} name={'terms'} id={'checkbox-terms'} required />
                    <p className={`${classes.p}`}> I have read and agree to the <a className={`${classes.a}`} href={'/terms-conditions'}> Terms & Conditions </a></p>
                </div>
                <div className={`form-group`}>
                    <input className={`form-control button`} type={'button'} value={'Register'}/>
                </div>
                <div className={`form-group`}>
                    <p className={`text-center`}> Have an account? <a href={'/login'}> Login </a> </p>
                </div>
            </div>
        </div>
    )
}