import React, { createContext, useEffect, useState } from 'react'

export const commentsContext = createContext()

function CommentsProvider({ children }) {
    const [comments, setComments] = useState([])

    useEffect(() => {
        const runCommentsApi = async () => {
            const commentsApi = await fetch('https://novamusic-f81fd-default-rtdb.firebaseio.com/comments.json')
            const commentsApiToJson = await commentsApi.json()
            setComments(Object.entries(commentsApiToJson))
        }
        runCommentsApi()
    }, [])
    return (
        <commentsContext.Provider value={{ comments, setComments }}>

            {children}
            
        </commentsContext.Provider>
    )
}

export default CommentsProvider
