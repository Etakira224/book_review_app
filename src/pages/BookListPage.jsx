import React from 'react'
import axios from 'axios'
import { Routes, Route, Link } from 'react-router-dom'
import { BookReviewPostPage } from './BookReviewPostPage'

export const BookListPage = () => {
  axios.get("https://api-for-missions-and-railways.herokuapp.com/books")
  .then(
    (result) => {

    },
    (error) => {
      
    }
  )
  // 認証トークン:bookapp
  return (
    <>
      <header>
        <div>ここにログアウトボタンを表示</div>
      </header>
      <Route path="/new" element={<BookReviewPostPage />} />
    </>
  )
}
