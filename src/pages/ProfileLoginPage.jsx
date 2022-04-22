import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export const ProfileLoginPage = () => {
  // const data = { firstName : "Taro", lastName : "Yamada" }
  fetch('https://api-for-missions-and-railways.herokuapp.com/signin', 'body')
  .then(res => res.json())
  .then(
    (res) => {
      console.log();
    },
    (error) => {
      
    }
  )

  return (
    <>
      <div className="auth-container">
        <h1>Sign In</h1>
        <form className="auth-form">
          <div className="auth-form-item">
            <label>E-mail Address</label>
            <input name="email" type="email" placeholder="email@gmail.com" />
          </div>
          <div className="auth-form-item">
            <label>Password</label>
            <input name="password" type="password" placeholder="Password"/>
          </div>
            {/* <SignInButton type="submit">SIGN IN</SignInButton> */}
        </form>
        <Link to="/signup">アカウントをお持ちでない方</Link>
        <br />
        <Link to="/">書籍一覧へ戻る</Link>
      </div>
    </>
  )
}
