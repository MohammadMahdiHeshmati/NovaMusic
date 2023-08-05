import React, { useContext, useEffect, useState } from 'react'
import MainTop from '../components/MainTop'
import MainContent from '../components/MainContent'
import MainArtists from '../components/MainArtists'
import { toast } from 'react-toastify'
import { mainPostsContext } from '../contexts/MainPostsContext';
import Loader from '../components/Loader'
function Home() {
    const mainPosts = useContext(mainPostsContext)

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        notify("به منظور استفاده از خدمات وبسایت برای اتصال به فایربیس VPN خود را روشن کنید")
    }, [])

    const notify = (message) => {
        toast.warn(message + " ! ", {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    return (
        <main>
            {mainPosts.mainPosts[0] ? (<></>) : (< Loader />)}
            <MainTop />
            <MainContent />
            <MainArtists />
        </main>
    )
}

export default Home
