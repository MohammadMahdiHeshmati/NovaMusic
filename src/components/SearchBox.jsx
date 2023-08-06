import React from 'react'

function SearchBox({ searchBoxShow, searchBoxHideFunc }) {
  return (
    <section className={`fixed z-50 inset-0 flex justify-center items-center transition-all duration-500 ${searchBoxShow ? "translate-y-0" : "-translate-y-full"}`}>
      <div className='absolute inset-0 z-[51] bg-black/30' onClick={searchBoxHideFunc}></div>
      <div className='absolute z-[52] max-w-[90%] md:max-w-[50%] bg-white rounded-lg w-full font-vazirRegular'>
        <div className='flex justify-between items-center p-4'>
          <span>جستجو در نووا موزیک...</span>
          <button onClick={searchBoxHideFunc}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-600 hover:text-black transition-all">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <form action='#' className='p-8 text-center font-vazirRegular flex justify-center items-center'>
          <input type="search" className='p-3 border-2 border-gray-200 outline-none transition-all rounded-r-md w-1/2 md:w-3/4 focus:border-black' placeholder="نام قطعه، آلبوم و ..." />
          <button type='submit' className='px-6 py-3 bg-gray-200 rounded-l-md border-2 transition-all border-gray-200  text-gray-600 hover:text-black hover:bg-gray-300 hover:border-gray-300'>جستجو</button>
        </form>
      </div>
    </section>
  )
}

export default SearchBox
