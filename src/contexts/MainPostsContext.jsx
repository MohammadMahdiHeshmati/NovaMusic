import React, { createContext, useEffect, useState } from 'react'

export const mainPostsContext = createContext()

const mainPostsProvider = ({ children }) => {
  const [mainPosts, setMainPosts] = useState([])

  useEffect(() => {
    const runApi = async () => {
      const requestApi = await fetch('https://novamusic-f81fd-default-rtdb.firebaseio.com/ArtistsDatas.json')
      const responseApi = await requestApi.json()
      setMainPosts(Object.entries(responseApi))
    }
    runApi()
  }, [])

  return (
    <mainPostsContext.Provider value={{ mainPosts, setMainPosts }}>
      {children}
    </mainPostsContext.Provider>
  )
}

export default mainPostsProvider
