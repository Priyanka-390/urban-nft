import React from 'react'
import Homepage from './Homepage'
import Data from './Data'
import Fourthcard from './Fourthcard'
import Solana from './Solana'
import Fifthcard from './Fifthcard'
import Navbar from './Navbar'

const Maindoc = () => {
  return (
    <div >
     
          <div className="flex flex-wrap flex-row">
              <div className="xl:w-8/12 w-full  px-3">
                  <Homepage />
          <Data />
          <Fifthcard/>
              </div>
              <div className="xl:w-4/12 w-full  px-3">
          <Fourthcard />
          <Solana/>
              </div>
      </div>
    </div>
  )
}

export default Maindoc
