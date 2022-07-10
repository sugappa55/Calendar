// import Calender from "./Calander/Calender";
import {Route,Routes} from "react-router-dom"
import React, { Suspense } from "react";
import Welcome from "./Components/Welcome";
import NotFound from "./Components/NotFound";
import ProtectedRoute from "./Components/ProtectedRoute";
const Calender = React.lazy(() => import("./Calander/Calender"));



function App() {
  return (
    <div >
      <Routes>
        <Route exact path="/:year/:month" element={<ProtectedRoute>
          <Suspense fallback={<div className="flex w-full justify-center items-center">Loading...</div>}>
        <Calender />
      </Suspense>
        </ProtectedRoute>}/>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/404" element={<NotFound/>}/>
        <Route path='*' exact={true} element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
