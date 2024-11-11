import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <main class="h-screen w-full flex flex-col justify-center items-center bg-[#ff004a]">
            <h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>

            <button class="mt-5">
                <a
                    class="relative inline-block text-sm font-medium text-[#e30052] group active:text-orange-500 focus:outline-none focus:ring"
                >
                    <span
                        class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
                    ></span>

                    <span class="relative block px-8 py-3 bg-[#fafbfd] border ">
                        <Link to={'/'}>Go Back</Link>
                    </span>

                </a>
            </button>

        </main >
    )
}

export default NotFound