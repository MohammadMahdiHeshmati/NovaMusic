export default function Loader() {
    return (

        <div className='fixed inset-0 bg-black/50 z-[100] flex justify-center items-center'>
            <div className='bg-white/80 animate-bounce p-8 main-content-box rounded-3xl'>
                <div className="spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        
    )
}