import React, { useContext, useEffect, useState } from 'react'
import { commentsContext } from '../contexts/CommentsContext'
import { toast } from 'react-toastify';
import Avatar from '../assets/avatar60.jpg'

function Comment({ musicID, onDataReceived }) {
    const mainComments = useContext(commentsContext)
    const [mainPostComments, setMainPostComments] = useState([])

    const [userCommentContent, setUserCommentContent] = useState("")
    const [userCommentName, setUserCommentName] = useState("")
    const [userCommentEmail, setUserCommentEmail] = useState("")

    useEffect(() => {
        let commentsFilter = mainComments.comments.filter((comment) => comment[1].musicID === musicID)
        setMainPostComments(commentsFilter)
    }, [musicID])

    const addToDbApi = async () => {
        let newComment = {
            musicID: musicID,
            commentTime: new Date().toDateString().slice(4, 15),
            commentContent: userCommentContent,
            commentName: userCommentName,
            commentEmail: userCommentEmail,
        }

        const addCommentApi = await fetch('https://novamusic-f81fd-default-rtdb.firebaseio.com/comments.json', {
            method: 'POST',
            body: JSON.stringify(newComment)
        })
        if (addCommentApi.status === 200) {
            successNotify("دیدگاه شما با موفقیت ثبت شد")
            setUserCommentContent("")
            setUserCommentName("")
            setUserCommentEmail("")
        } else {
            errorNotify("مشکلی در ثبت دیدگاه شما پیش آمده است")
        }
    }

    const addCommentHandler = () => {
        if (userCommentContent !== "" && userCommentName !== "" && userCommentEmail !== "") {
            addToDbApi()
        } else {
            warnNotify("لطفا تمامی فیلد ها را پر کنید")
        }
    }

    const warnNotify = (message) => {
        toast.warn(message + " ! ", {
            position: toast.POSITION.TOP_RIGHT
        });
    };
    const errorNotify = (message) => {
        toast.error(message + " ! ", {
            position: toast.POSITION.TOP_RIGHT
        });
    };
    const successNotify = (message) => {
        toast.success(message + " ! ", {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    return (
        <div className='mt-8 flex flex-col justify-start items-start font-vazirRegular'>
            <div className='text-lg font-vazirBold text-gray-700 px-2 border-0 border-r-4 border-red-500'>دیدگاه کاربران ( {mainPostComments.length} دیدگاه )</div>
            <div className='w-full flex justify-start items-start flex-col gap-8 py-6'>
                {mainPostComments.length > 0 ? (
                    <>
                        {
                            mainPostComments.map((comment) => (
                                <div key={comment[0]} className='w-full flex justify-start items-start gap-3'>
                                    <div className='shrink-0 basis-18 basis-18 mt-4 rounded-full overflow-hidden'>
                                        <img className='aspect-square object-cover w-full' src={Avatar} alt="Avatar" />
                                    </div>
                                    <div className='grow flex flex-col justify-center items-start border-0 border-b border-gray-200 pb-4'>
                                        <div className='text-right'>
                                            <h2 className='px-1 font-vazirBold text-yellow-500 text-lg'>{comment[1].commentName}</h2>
                                            <p className='p-1 text-gray-700'>{comment[1].commentContent}</p>
                                        </div>
                                        <div className='pt-2 font-vazirLight text-gray-500 flex justify-center items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className='text-[13px] relative top-[1px] mx-[2px]'>{comment[1].commentTime}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </>
                ) : (
                    <span className='text-gray-600 text-base'>هنوز دیدگاهی ارسال نشده! اولین نفر باشید.</span>
                )}

            </div>
            <div className='w-full pb-4 flex flex-col justify-start items-start gap-3'>
                <span className='font-vazirBold text-gray-700'>دیدگاه شما پیرامون این مطلب ؟</span>
                <textarea value={userCommentContent} onChange={(e) => setUserCommentContent(e.target.value)} className='p-2 transition-all outline-none border-2 rounded-sm w-full border-gray-300 focus:border-gray-900' rows="10" placeholder='متن دیدگاه ...'></textarea>
                <div className='w-full flex justify-start items-center flex-wrap md:flex-nowrap gap-3'>
                    <input value={userCommentName} onChange={(e) => setUserCommentName(e.target.value)} className='p-2 transition-all outline-none border-2 rounded-sm basis-full md:basis-1/2 border-gray-300 focus:border-gray-900' type="text" placeholder='نام*' />
                    <input value={userCommentEmail} onChange={(e) => setUserCommentEmail(e.target.value)} className='p-2 transition-all outline-none border-2 rounded-sm basis-full md:basis-1/2 border-gray-300 focus:border-gray-900' type="text" placeholder='ایمیل*' />
                </div>
                <button onClick={addCommentHandler} className='bg-gray-200 py-2 px-6 rounded-sm text-gray-600 hover:bg-gray-300 transition-all'>ارسال دیدگاه</button>
            </div>
        </div >
    )
}

export default Comment
