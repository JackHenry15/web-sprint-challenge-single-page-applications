import React from 'react'

import { useHistory } from 'react-router-dom'
import Pizza from './Assets/Pizza.jpg'

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
                src={Pizza}
                alt=''
                width={800}
            />
            <br></br>
            <button
                onClick={routeToHome}
                className='md-button home-button'
            >
            Make a Pizza!
            </button>
        </div>
    )
}