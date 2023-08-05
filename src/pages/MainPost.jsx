import React, { useContext, useEffect, useState } from 'react'
import MainArtists from '../components/MainArtists'
import Comment from '../components/Comment';
import { mainPostsContext } from '../contexts/MainPostsContext';
import { commentsContext } from '../contexts/CommentsContext'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../components/Loader'

function MainPost() {
  const mainPosts = useContext(mainPostsContext)
  const mainComments = useContext(commentsContext)
  let params = useParams()

  const [mainPostShow, setMainPostShow] = useState([])
  const [commentCount, setCommentCount] = useState(0)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    if (mainPosts.mainPosts) {
      setMainPostShow(mainPosts.mainPosts.filter((post) => post[0] === params.postID))
    }
    
    let commentsFilter = mainComments.comments.filter((comment) => comment[1].musicID === params.postID)
    setCommentCount(commentsFilter.length)
  }, [mainPosts])

  const shareFunction = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);
    notify('با موفقیت در کلیپ بورد کپی شد')
  }

  const notify = (message) => {
    toast.success(message + " ! ", {
      position: toast.POSITION.TOP_RIGHT
    });
  };

  return (
    <main>
      {mainPostShow[0] ? (
        <section className=''>
          <div className='bg-gradient-to-br from-cyan-400 from-20% via-blue-400 via-30% to-purple-600 to-70% relative overflow-hidden mainTop-before mainTop-after'>
            <div className='flex justify-center flex-wrap items-center gap-10 container mx-auto relative z-10 p-8 py-40'>
              <div className='grow md:basis-1/4 flex justify-center items-center'>
                <img className='object-cover max-w-[300px] max-h-[300px] w-full h-full rounded-lg' style={{ boxShadow: '0 29px 32px -20px rgba(0,0,0,.5)' }} src={`/images/${mainPostShow[0][1].image}`} alt={mainPostShow[0][1].title} />
              </div>
              <div className='grow md:basis-2/4 flex flex-col justify-center items-start'>
                <h1 className='font-vazirBold text-white text-2xl'>{mainPostShow[0][1].title}</h1>
                <div className='font-vazirRegular flex flex-col mt-6 gap-3 text-white'>
                  <span>اثری از {mainPostShow[0][1].author}</span>
                  <span>در سبک {mainPostShow[0][1].type}</span>
                  <span>{mainPostShow[0][1].year} (1 قطعه)</span>
                </div>
              </div>
            </div>
          </div>
          <div className='max-w-[850px] w-full bg-white p-4 rounded-lg relative z-20 -mt-16 mx-auto text-left font-vazirRegular' style={{ boxShadow: '0 10px 30px rgba(28,76,156,.15)' }}>
            <div className='flex justify-center items-center text-gray-500'>
              <span className='basis-1/2 p-2 text-center'>CD 2</span>
              <span className='basis-1/2 p-2 text-center rounded-t-md bg-gray-200/80'>CD 1</span>
            </div>
            <div className='bg-gray-200/80 pb-2 rounded-b-'>
              <audio className='w-full' controls src={mainPostShow[0][1].audio}></audio>
              <div className='bg-white m-2 mb-0 rounded-md flex justify-between items-center p-4 text-gray-600'>
                <a download={true} href={mainPostShow[0][1].audio}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </a>
                <div className='flex justify-center items-center'>
                  <span className='relative top-[2px] px-2 music-name-animation'>{mainPostShow[0][1].musicName}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className='py-4 my-4 flex-col md:flex-row font-vazirRegular text-center text-gray-500 flex justify-center items-center gap-5'>
              <span className='text-sm px-2'>دانلود موزیک</span>
              <a download={true} href={mainPostShow[0][1].audio} className='rounded-md hover:brightness-90 transition-all flex justify-start items-center text-white overflow-hidden bg-sky-500'>
                <span className='bg-sky-600 p-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                  </svg>
                </span>
                <span className='px-8 font-vazirBold text-sm'>MP3 128kbps</span>
              </a>
              <a download={true} href={mainPostShow[0][1].audio} className='rounded-md hover:brightness-90 transition-all flex justify-start items-center text-white overflow-hidden bg-lime-500'>
                <span className='bg-lime-600 p-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                  </svg>
                </span>
                <span className='px-8 font-vazirBold text-sm'>MP3 320kbps</span>
              </a>
            </div>
            <div className='py-4 my-4 border-0 border-y border-gray-200 text-gray-600 flex justify-center items-center gap-7'>
              <div className='justify-center items-center hidden md:flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className='relative top-[2px]'>{mainPostShow[0][1].timeAdded}</span>
              </div>
              <div className='flex justify-center items-center text-sky-500'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-1 cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                </svg>
                <span className='relative top-[4px]'>{mainPostShow[0][1].like}</span>
              </div>
              <div className='flex justify-center items-center text-rose-500'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-1 cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384" />
                </svg>
                <span className='relative top-[4px]'>{mainPostShow[0][1].dislike}</span>
              </div>
              <div className='flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
                <span className='relative top-[2px]'>{commentCount} دیدگاه</span>
              </div>
              <button onClick={shareFunction}
                className='flex justify-center items-center rounded-full hover:bg-gray-200 transition-all w-9 h-9'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                </svg>
              </button>
            </div>
            <div className='p-1 py-2 mb-6'>
              <p className='font-vazirRegular text-gray-800 text-justify capitalize leading-8'>{mainPostShow[0][1].descriptions}</p>
            </div>
            <hr />
            <Comment musicID={mainPostShow[0][0]} />
          </div>
        </section>
      ) : <Loader />}
      <MainArtists />
    </main>
  )
}
export default MainPost
