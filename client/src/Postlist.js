import React from 'react'
import Header from './Header'
import LandingPage from './Components/HomePage/LandingPage'
import Upload from './Upload'
function Postlist(){
    return(
        <div>
            <Header />
            <LandingPage />
            <Upload />
        </div>
    );
}
export default Postlist;