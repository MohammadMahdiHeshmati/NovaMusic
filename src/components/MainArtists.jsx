import React, { useContext } from 'react'
import { mainPostsContext } from '../contexts/MainPostsContext'
import { Link } from 'react-router-dom'

function MainArtists() {
    const mainPosts = useContext(mainPostsContext)

    return (
        <section className='w-full'>
            <div className='container mx-auto w-full flex flex-col justify-start items-start'>
                <div className='w-full py-6 border-0 border-b border-gray-200'>
                    <p className='font-vazirRegular text-gray-800'>بهترین های هنرمندان</p>
                </div>
                <div className='w-full pt-6 pb-14'>
                    <ul className='font-vazirRegular text-gray-600 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-max grid-flow-row'>
                        {mainPosts.mainPosts.map((post) => (
                            <li key={post[0]}>
                                <Link onClick={window.scrollTo({ top: 0, behavior: 'smooth' })} to={`/post/${post[0]}`} className='py-1 px-4 my-1 whitespace-nowrap overflow-hidden text-ellipsis block main-artist-before' href="#">{post[1].title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default MainArtists
