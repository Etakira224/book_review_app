import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const ProfileLoginPage = () => {
  axios.get('https://api-for-missions-and-railways.herokuapp.com/signin')
  .then(
    (result) => {

    },
    (error) => {
      
    }
  )

  return (
    <div>
      <Link to="/signup">アカウントをお持ちでない方</Link>
    </div>
  )
}
