import Calender from "./Calander/Calender";
import {Route,Routes} from "react-router-dom"
import React from "react";
import Welcome from "./Components/Welcome";
import NotFound from "./Components/NotFound";
import ProtectedRoute from "./Components/ProtectedRoute";


function App() {
  return (
    <div >
      <Routes>
        <Route path="/:year/:month" element={<ProtectedRoute><Calender/></ProtectedRoute>}/>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/404" element={<NotFound/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
