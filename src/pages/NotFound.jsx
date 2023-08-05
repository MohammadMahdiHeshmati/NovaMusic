import React, { useEffect } from 'react'
import MainArtists from '../components/MainArtists'

function NotFound() {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    return (
        <main>
            <section className='py-[45%] pb-[25%] px-[10%] md:py-[25%] md:pb-[20%] lg:md:py-[15%] lg:md:pb-[10%] flex justify-center flex-col items-start bg-gradient-to-br from-cyan-400 from-20% via-blue-400 via-30% to-purple-600 to-70% relative overflow-hidden mainTop-before mainTop-after'>
                <h2 className='font-vazirBold text-white text-3xl'>اوه!</h2>
                <h2 className='font-vazirBold text-white text-3xl'>صفحه مورد نظر پیدا نشد</h2>
                <p className='font-vazirBold text-white py-8'>لطفا از منوی سایدبار و یا منوی پایین اقدام به بازکردن صفحه مورد نظر خود کنید!</p>
            </section>
            <MainArtists />
        </main>
    )
}

export default NotFound
