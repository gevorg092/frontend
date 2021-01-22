import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import App from 'next/app'
import GlobalContext from 'context'

export default class MyApp extends App {
    state = {
        locationModalStatus: false,
    }

    setLocalStorageValue = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value))
    }

    getLocalStorageValue = (key) => {
        let value = localStorage.getItem(key)
        return JSON.parse(value)
    }

    componentDidMount = () => {
        /**
         * Location modal status.
         * */
        let locationModalStatus = localStorage.getItem('locationModalStatus');
        if (locationModalStatus === 'false' || !locationModalStatus)
            locationModalStatus = false
        if (locationModalStatus === 'true')
            locationModalStatus = true
        this.setState({
            locationModalStatus: locationModalStatus
        });

        /**
         * Login modal status.
         * */
        let loginModalStatus = localStorage.getItem('loginModalStatus');
        if (loginModalStatus === 'false' || !loginModalStatus)
            loginModalStatus = false
        if (loginModalStatus === 'true')
            loginModalStatus = true
        this.setState({
            loginModalStatus: loginModalStatus
        });
    }

    /**
     * The function for open location modal.
     * */
    openLocationModal = () => {
        localStorage.setItem('locationModalStatus', true)
        this.setState({
            locationModalStatus: true
        })
    }

    /**
     * The function for close location modal.
     * */
    closeLocationModal = () => {
        localStorage.setItem('locationModalStatus', false)
        this.setState({
            locationModalStatus: false
        })
    }



    render() {
        const {Component, pageProps} = this.props
        return (
            <GlobalContext.Provider value={{
                locationModalStatus: this.state.locationModalStatus,
                openLocationModal: this.openLocationModal,
                closeLocationModal: this.closeLocationModal,
                getLocalStorageValue: this.getLocalStorageValue,
                setLocalStorageValue: this.setLocalStorageValue,
            }}>
                <Component {...pageProps} />
            </GlobalContext.Provider>
        );
    }
}