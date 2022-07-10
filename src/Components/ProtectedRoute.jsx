import React from 'react'
import {useParams,Navigate} from "react-router-dom"

const ProtectedRoute = ({children}) => {
    const {year,month}=useParams()
    if(year<0||month<1||month>12)return  <Navigate to="/404"/>   

  return children
}

export default ProtectedRoute
