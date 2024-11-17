import React, { useContext } from 'react'
import { AuthContext } from './Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from './Loading';

export default function PrivateRoute( {children} ) {

    const { user, loading } = useContext( AuthContext );
    const loacation = useLocation();
    // console.log(location);
    
    // console.log(user);
    if(loading){
     return <Loading />
    }
    if(user && user?.email){
      return children;
    }
  return (
    <Navigate state={location.pathname} to={'/login'}></Navigate>
  )
}
