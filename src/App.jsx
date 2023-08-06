import React from 'react'
import { useRoutes } from 'react-router-dom'

import MainPostsProvider from './contexts/MainPostsContext'
import CommentsProvider from './contexts/CommentsContext'

import Routes from './Routes'
import Header from './components/Header'
import Footer from './components/Footer'

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  let router = useRoutes(Routes)

  return (
    <>
      <MainPostsProvider>
        <CommentsProvider>
          <Header />
          {router}
          <Footer />
        </CommentsProvider>
      </MainPostsProvider>
      <ToastContainer rtl toastClassName="font-vazirRegular" />
    </>
  )
}

export default App