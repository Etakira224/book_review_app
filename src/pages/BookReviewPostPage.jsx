import React from 'react'
import axios from 'axios'

export const BookReviewPostPage = () => {
  axios.get("https://api-for-missions-and-railways.herokuapp.com/books")
  //認証トークン: bookpost
  .then(
    (result) => {

    },
    (error) => {
      
    }
  )
  return (
    <div>BookReviewPostPage</div>
  )
}
