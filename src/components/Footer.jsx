import React from 'react'

function Footer() {
    return (
        <footer>
            <section className='flex flex-col justify-start items-center py-10 bg-zinc-600 text-zinc-300 font-vazirRegular'>
                <span className='container mx-auto p-4 text-base text-center'>© تمامی حقوق برای نووا موزیک محفوظ است. 2013-2022</span>
                <ul className='container mx-auto p-4 text-sm flex justify-center items-center gap-5 flex-wrap'>
                    <li>
                        <a className='hover:text-white transition-all' href="#">صفحه نخست</a>
                    </li>
                    <li>
                        <a className='hover:text-white transition-all' href="#">دسته بندی</a>
                    </li>
                    <li>
                        <a className='hover:text-white transition-all' href="#">فروشگاه</a>
                    </li>
                    <li>
                        <a className='hover:text-white transition-all' href="#">تماس با ما</a>
                    </li>
                    <li>
                        <a className='hover:text-white transition-all' href="#">گزارش تخلف</a>
                    </li>
                    <li>
                        <a className='hover:text-white transition-all' href="#">تبلیغات</a>
                    </li>
                    <li>
                        <a className='hover:text-white transition-all' href="#">حمایت مالی</a>
                    </li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer
