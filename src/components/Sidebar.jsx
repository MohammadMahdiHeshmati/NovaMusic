import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Sidebar({ SidebarShow, SidebarHideFunc }) {
  const [sidebarStyleToogler, setSidebarStyleToogler] = useState(false)
  const [instrumentToogler, setInstrumentToogler] = useState(false)

  return (
    <section className={`fixed z-[55] inset-0 flex justify-center items-center transition-all duration-500 ${SidebarShow ? "translate-x-0" : "translate-x-full"}`}>
      <div className='absolute inset-0 z-[56] bg-transparent' onClick={SidebarHideFunc}></div>
      <div className='absolute top-0 right-0 bottom-0 z-[57] bg-white max-w-[350px] min-w-[250px] w-[80%] flex flex-col items-stretch justify-start'>
        <div className='flex justify-between items-center px-4 py-6 bg-zinc-600'>
          <Link to='/' onClick={SidebarHideFunc} className='font-vazirRegular text-white'>
            <h2 className='text-lg p-2 pt-0 text-yellow-500'>نووا موزیک</h2>
            <span className='text-sm p-2'>رسانه موسیقی بی کلام</span>
          </Link>
          <button onClick={SidebarHideFunc}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-200 hover:text-white transition-all">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className='grow bg-white overflow-x-hidden overflow-y-auto py-2'>
          <ul className='font-vazirRegular text-gray-500'>
            <li>
              <p
                onClick={() => setSidebarStyleToogler(!sidebarStyleToogler)}
                className='flex justify-between items-center py-3 px-3 cursor-pointer border-0 border-b border-gray-100/50 hover:bg-gray-50 hover:text-gray-800 transition-all'>
                <span>سبک ها و حالت ها</span>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    {sidebarStyleToogler ? (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    )}
                  </svg>
                </button>
              </p>
              <ul className={`overflow-hidden transition-all duration-300 ${sidebarStyleToogler ? "max-h-[225px]" : "max-h-[0]"}`}>
                <li><a className='block py-3 px-8 cursor-pointer border-0 border-b border-gray-100/50 hover:bg-gray-50 hover:text-gray-800 transition-all text-sm' href="#">موسیقی کلاسیک</a></li>
                <li><a className='block py-3 px-8 cursor-pointer border-0 border-b border-gray-100/50 hover:bg-gray-50 hover:text-gray-800 transition-all text-sm' href="#">موسیقی آرامش بخش</a></li>
                <li><a className='block py-3 px-8 cursor-pointer border-0 border-b border-gray-100/50 hover:bg-gray-50 hover:text-gray-800 transition-all text-sm' href="#">موسیقی فیلم</a></li>
                <li><a className='block py-3 px-8 cursor-pointer border-0 border-b border-gray-100/50 hover:bg-gray-50 hover:text-gray-800 transition-all text-sm' href="#">موسیقی لایت</a></li>
                <li><a className='block py-3 px-8 cursor-pointer border-0 border-b border-gray-100/50 hover:bg-gray-50 hover:text-gray-800 transition-all text-sm' href="#">موسیقی حماسی</a></li>
              </ul>
            </li>
            <li>
              <p
                onClick={() => setInstrumentToogler(!instrumentToogler)}
                className='flex justify-between items-center py-3 px-3 cursor-pointer border-0 border-b border-gray-100/50 hover:bg-gray-50 hover:text-gray-800 transition-all'>
                <span>ساز ها</span>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    {instrumentToogler ? (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    )}
                  </svg>
                </button>
              </p>
              <ul className={`overflow-hidden transition-all duration-300 ${instrumentToogler ? "max-h-[225px]" : "max-h-[0]"}`}>
                <li><a className='block py-3 px-8 cursor-pointer border-0 border-b border-gray-100/50 hover:bg-gray-50 hover:text-gray-800 transition-all text-sm' href="#">پیانو</a></li>
                <li><a className='block py-3 px-8 cursor-pointer border-0 border-b border-gray-100/50 hover:bg-gray-50 hover:text-gray-800 transition-all text-sm' href="#">ویولن</a></li>
                <li><a className='block py-3 px-8 cursor-pointer border-0 border-b border-gray-100/50 hover:bg-gray-50 hover:text-gray-800 transition-all text-sm' href="#">گیتار</a></li>
                <li><a className='block py-3 px-8 cursor-pointer border-0 border-b border-gray-100/50 hover:bg-gray-50 hover:text-gray-800 transition-all text-sm' href="#">فلوت</a></li>
                <li><a className='block py-3 px-8 cursor-pointer border-0 border-b border-gray-100/50 hover:bg-gray-50 hover:text-gray-800 transition-all text-sm' href="#">سنتور</a></li>
              </ul>
            </li>
            <li>
              <a className='block py-3 px-3 cursor-pointer border-0 border-b border-gray-100/50 hover:bg-gray-50 hover:text-gray-800 transition-all' href="#">لیست هنرمندان</a>
            </li>
            <li>
              <a className='block py-3 px-3 cursor-pointer border-0 border-b border-gray-100/50 hover:bg-gray-50 hover:text-gray-800 transition-all' href="#">بهترین ها از دیدگاه نووا موزیک</a>
            </li>
            <li>
              <a className='block py-3 px-3 cursor-pointer border-0 border-b border-gray-100/50 hover:bg-gray-50 hover:text-gray-800 transition-all' href="#">بهترین های هنرمندان</a>
            </li>
            <li>
              <a className='block py-3 px-3 cursor-pointer border-0 border-b border-gray-100/50 hover:bg-gray-50 hover:text-gray-800 transition-all' href="#">تکنوازی</a>
            </li>
            <li>
              <a className='block py-3 px-3 cursor-pointer border-0 border-b border-gray-100/50 hover:bg-gray-50 hover:text-gray-800 transition-all' href="#">خاطره انگیز</a>
            </li>
            <li>
              <a className='block py-3 px-3 cursor-pointer border-0 border-b border-gray-100/50 hover:bg-gray-50 hover:text-gray-800 transition-all' href="#">250 فیلم برتر</a>
            </li>
            <li>
              <a className='block py-3 px-3 cursor-pointer border-0 border-b border-gray-100/50 hover:bg-gray-50 hover:text-gray-800 transition-all' href="#">لیست سایر دسته ها</a>
            </li>
            <li>
              <a className='block py-3 px-3 cursor-pointer border-0 border-b border-gray-100/50 hover:bg-gray-50 hover:text-gray-800 transition-all' href="#">آلبوم</a>
            </li>
            <li>
              <a className='block py-3 px-3 cursor-pointer border-0 border-b border-gray-100/50 hover:bg-gray-50 hover:text-gray-800 transition-all' href="#">تک آهنگ</a>
            </li>
          </ul>
        </div>
        <div className='flex justify-center items-center bg-zinc-100 font-vazirRegular text-gray-500 text-sm'>
          <span className='grow text-center p-4 hover:text-gray-950 transition-all'>
            <a href="#">تبلیغات</a>
          </span>
          <span className='grow text-center p-4 hover:text-gray-950 transition-all'>
            <a href="#">تماس با ما</a>
          </span>
          <span className='grow text-center p-4 hover:text-gray-950 transition-all'>
            <a href="#">فروشگاه</a>
          </span>
        </div>
      </div>
    </section >
  )
}

export default Sidebar
