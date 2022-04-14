import React from 'react'
import axios from 'axios'

export const ProfileEditPage = () => {
  axios.get("https://api-for-missions-and-railways.herokuapp.com/users")
  .then(
    (result) => {

    },
    (error) => {
      
    }
  )
  // 認証トークン:profileedit
  return (
    <>
    
    </>
  )
}
