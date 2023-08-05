import React, { useContext, useEffect, useState } from 'react'
import { mainPostsContext } from '../contexts/MainPostsContext'

function MainTop() {
    const mainPosts = useContext(mainPostsContext)

    const [popularPosts, setPopularPosts] = useState([])

    useEffect(() => {
        let mainPopularPost = mainPosts.mainPosts.map((post) => post[1].type)
        let allPopularPost = [...new Set(mainPopularPost)]
        setPopularPosts(allPopularPost)
    }, [mainPosts])

    return (
        <section className='bg-gradient-to-br from-cyan-400 from-20% via-blue-400 via-30% to-purple-600 to-70% relative overflow-hidden mainTop-before mainTop-after'>
            <div className='pt-40 pb-28 flex flex-col justify-start items-center relative z-10 container mx-auto'>
                <div className='text-center px-4'>
                    <h1 className='font-vazirBold text-white text-lg p-2'>رسانه موسیقی بی کلام نووا موزیک</h1>
                    <p className='font-vazirLight text-white text-base p-2'> معرفی، پخش آنلاین و دانلود آثار موسیقی بی کلام در انواع سبک ها و ساز های موسیقی</p>
                    <div className='p-2 pt-8 text-center'>
                        <form action="#" className='bg-white rounded-full overflow-hidden font-vazirRegular flex justify-center items-center'>
                            <input type="search" className='grow p-3 m-[3px] border-0 rounded-r-full outline-none' placeholder='نام قطعه، آلبوم و ...' />
                            <button type='submit' className='p-3 px-8 m-[3px] rounded-l-full bg-gray-200 text-gray-500'>جستجو</button>
                        </form>
                    </div>
                    <div className='p-2 py-4 text-center font-vazirRegular'>
                        <h2 className='font-vazirBold text-white py-4'>موضوعات پر مخاطب</h2>
                        <div className='flex justify-center items-center flex-wrap'>
                            {popularPosts.map((post, index) => (
                                post.length < 20 && <a key={index + 1} className='px-4 py-2 text-white rounded-full mx-1 my-1 cursor-default hover:text-gray-200' style={{ background: 'rgba(255,255,255,0.4)' }}>{post}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainTop
