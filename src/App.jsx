import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import { ProfileLoginPage } from './pages/ProfileLoginPage'
import { ProfileSignupPage } from './pages/ProfileSignupPage'
import { ProfileEditPage } from './pages/ProfileEditPage'
import { BookListPage } from './pages/BookListPage'
import { BookReviewPostPage } from './pages/BookReviewPostPage'

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
        <Route path="/*" element={<BookListPage />} />
        <Route path="/login" element={<ProfileLoginPage />} />
        <Route path="/signup" element={<ProfileSignupPage />} />
        <Route path="/profile" element={<ProfileEditPage />} />
        <Route path="/new" element={<BookReviewPostPage />} />
      </Routes>
    </>
  )
}
