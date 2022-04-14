import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { ProfileLoginPage } from './pages/ProfileLoginPage'
import { ProfileSignupPage } from './pages/ProfileSignupPage'

export const App = () => {
  return (
    <>
      {/* <nav>
        <ul>
          <li><Link to="/login">ログインはこちら</Link></li>
          <li><Link to="/signup">アカウントをお持ちでない方</Link></li>
        </ul>
      </nav> */}
      <Routes>
        <Route path="/login" element={<ProfileLoginPage />} />
        <Route path="/signup" element={<ProfileSignupPage />} />
      </Routes>
    </>
  )
}
