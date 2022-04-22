import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const ProfileSignupPage = () => {
  fetch('https://api-for-missions-and-railways.herokuapp.com/users')
  .then(res => res.json())
  .then(
    (res) => {
      
    },
    (error) => {
      
    }
  )

  return (
    <>
      <div className="auth-container">
        <h1>Sign Up</h1>
        <form className="auth-form">
          <div className="auth-form-item">
            <label>E-mail Address</label>
            <input name="email" type="email" placeholder="email@gmail.com" />
          </div>
          <div className="auth-form-item">
            <label>Password</label>
            <input name="password" type="password" placeholder="Password"/>
          </div>
          {/* ここにサインアップボタン */}
        </form>
        <Link to="/login">ログインはこちら</Link>
        <br />
        <Link to="/">書籍一覧へ戻る</Link>
      </div>
    </>
  )
}
