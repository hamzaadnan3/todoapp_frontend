import React, { useContext } from 'react'
import Loading from '../components/Loading'
import { Context } from '../main'
import { Navigate } from 'react-router-dom'

const Profile = () => {

  const {isAuthenticated,loading, user} = useContext(Context)

  if(!isAuthenticated) return <Navigate to={"/login"} />


  return (
   loading ? <Loading/> : (
    <div>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
    </div>
   )
  )
}

export default Profile