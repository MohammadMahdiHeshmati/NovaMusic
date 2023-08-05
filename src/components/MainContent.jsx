import React, { useContext } from 'react'
import { mainPostsContext } from '../contexts/MainPostsContext'
import { Link } from 'react-router-dom'

function MainContent() {
    const mainPosts = useContext(mainPostsContext)

    return (
        <section className='bg-white rounded-t-lg relative -mt-16 p-2 z-20'>
            <div className='container mx-auto'>
                <div className='border-0 border-b border-gray-200 font-vazirRegular text-gray-700 text-center'>
                    <button className='px-5 py-3 cursor-pointer border-0 border-b transition-all border-transparent hover:main-content-active-tab main-content-active-tab'>تک آهنگ ها</button>
                    <button className='px-5 py-3 cursor-pointer border-0 border-b transition-all border-transparent hover:main-content-active-tab'>آلبوم ها</button>
                </div>
                <div className='grid grid-cols-1 grid-flow-row auto-rows-fr sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-10 p-6'>

                    {mainPosts.mainPosts.map((post) => (
                        <div key={post[0]} className='group main-content-box'>
                            <article>
                                <figure className='w-full overflow-hidden aspect-square'>
                                    <Link to={`/post/${post[0]}`} className='relative group-hover:main-content-box-img'>
                                        <span className='group-hover:translate-x-[130%] transition-all bg-blue-600 absolute top-0 right-0 m-3 px-2 py-1 rounded-full text-white font-vazirRegular text-sm'>تک آهنگ</span>
                                        <span className='group-hover:translate-y-[170%] transition-all absolute bottom-0 right-0 m-3 px-2 py-1 rounded-full text-white font-vazirRegular text-sm' style={{ background: 'rgba(0,0,0,.7)' }}>{post[1].year}</span>
                                        <img className='object-cover w-full h-full' src={`/images/${post[1].image}`} alt={post[1].title} />
                                    </Link>
                                </figure>
                                <div className='h-16 w-full p-4 pb-0 font-vazirBold text-base overflow-hidden text-gray-700'>
                                    <h3>
                                        <Link to={`/post/${post[0]}`} href="#">
                                            {post[1].title}
                                        </Link>
                                    </h3>
                                </div>
                                <div className='h-13 w-full p-4 pt-3 pb-5 font-vazirLight text-sm text-gray-500'>
                                    <span>
                                        اثری از :
                                        <a href="#" className='text-sky-500' style={{ fontSize: '15px' }}>{post[1].author}</a>
                                    </span>
                                </div>
                            </article>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default MainContent
