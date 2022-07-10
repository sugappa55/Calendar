import React from 'react'
import {useParams,Navigate} from "react-router-dom"

const ProtectedRoute = ({children}) => {
    const {year,month}=useParams()
    if(year<0||month<1||month>12||typeof year!=="number"||typeof month!=="number"||!month||!year||month===undefined||year===undefined)return  <Navigate to="/404"/>   

  return children
}

export default ProtectedRoute
