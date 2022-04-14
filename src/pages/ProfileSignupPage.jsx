import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const ProfileSignupPage = () => {
  axios.get('https://api-for-missions-and-railways.herokuapp.com/users')
  .then(
    (result) => {

    },
    (error) => {
      
    }
  )

  return (
    <div>
        <Link to="/login">ログインはこちら</Link>
    </div>
  )
}
