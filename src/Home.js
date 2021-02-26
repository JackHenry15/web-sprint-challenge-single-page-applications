import React from 'react'

import { useHistory } from 'react-router-dom'

export default function Home() {
    // click handler that navigates me to '/pizza'
    const history = useHistory()

    const routeToHome = () => {
        console.log(history);
        history.push('/pizza')
    }

    return(
        <div className='home-wrapper'>
            <img
                className='home-image'
                src='https://via.placeholder.com/150'
                alt=''
            />
            <button
                onClick={routeToHome}
                className='md-button home-button'
            >
            Make a Pizza!
            </button>
        </div>
    )
}