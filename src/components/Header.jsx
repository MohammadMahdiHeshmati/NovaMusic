import React, { useEffect, useState } from 'react'
import SearchBox from './SearchBox'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

function Header() {
    const [headerShow, setHeaderShow] = useState('');
    const [headerZero, setheaderZero] = useState('header-zero header-animation-show');
    
    const [searchBoxShow, setSearchBoxShow] = useState(false);
    const [SidebarShow, setSidebarShow] = useState(false);
    const [scrollToTop, setScrollToTop] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window !== undefined) {
                window.scrollY < 10 ? setheaderZero('header-zero header-animation-show') : setheaderZero('');
            }
            if (window.scrollY > 500) {
                setScrollToTop(true)
            } else {
                setScrollToTop(false)
            }
        });
    }, []);

    useEffect(() => {
        window.onscroll = function (e) {
            if (this.oldScroll > this.scrollY || this.oldScroll < 100) {
                setHeaderShow('header-scrolled header-animation-show')
            } else if (this.oldScroll < this.scrollY) {
                setHeaderShow('');
            }
            this.oldScroll = this.scrollY;
        }
    }, []);

    const searchBoxHideFunc = () => setSearchBoxShow(false)
    const SidebarHideFunc = () => setSidebarShow(false)

    return (
        <>
            {<SearchBox searchBoxShow={searchBoxShow} searchBoxHideFunc={searchBoxHideFunc} />}
            {<Sidebar SidebarShow={SidebarShow} SidebarHideFunc={SidebarHideFunc} />}

            <button className={`fixed bottom-10 left-10 z-50 bg-zinc-600 p-2 text-white cursor-pointer transition-all duration-500 rounded-full ${scrollToTop ? "translate-y-0" : "translate-y-[120px]"}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                </svg>
            </button>

            <header>
                <section className={`transition-all duration-500 fixed left-0 right-0 top-0 p-2 z-30 header-animation-hide ${headerZero} ${headerShow}`}>
                    <div className='flex justify-between items-center p-4 container mx-auto'>
                        <div className='flex justify-center items-center'>
                            <Link to='/' className='font-vazirBold text-xl ml-5 hidden md:inline'>نووا موزیک</Link>
                            <button className='flex justify-center items-center' onClick={() => setSidebarShow(true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                <span className='font-vazirRegular text-sm'>دسته بندی</span>
                            </button>
                        </div>
                        <Link to='/' className='font-vazirBold text-xl mx-1 md:hidden'>نووا موزیک</Link>
                        <button onClick={() => setSearchBoxShow(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </button>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header
