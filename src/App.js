import "./App.css";
import Homepage from "./components/Homepage";
import Sidebar from "./components/Sidebar";

import Maindoc from "./components/Maindoc";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Fifthcard from "./components/Fifthcard";
import Fourthcard from "./components/Fourthcard";
import Solana from "./components/Solana";
import Data from "./components/Data";

function App() {
  return (
    <>
      <div className="">
        <Sidebar />
        <div className="w-full bg-[#edf1f2] lg:pl-[19rem] md:pl-[9rem] pl-[4rem]">
          <Navbar />
          <Routes>
            <Route path="/" element={ <Maindoc />}/>
            <Route path="/data" element={ <Data/>}/>
            <Route path="/fifth" element={ <Fifthcard />}/>
            <Route path="/fourth" element={ <Fourthcard />}/>
            <Route path="/solana" element={ <Solana />}/>
  
           
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
