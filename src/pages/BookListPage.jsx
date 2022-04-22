import React from 'react'
import axios from 'axios'
import { Header } from '../components/Header'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
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
      <Header />
      <Container>
        <Routes>
          <Route exact path='/profile' component={<p>アカウント設定</p>}/>
          <Route exact path='/login' component={<p>ログインする</p>}/>
        </Routes>
      </Container>
    </>
  )
}

{/* <Header></Header>
      <div>ここにログアウトボタンを表示</div>
      <body>
        <div className='list-container'>
          <h2>書籍一覧</h2>
        </div>
      </body> */}