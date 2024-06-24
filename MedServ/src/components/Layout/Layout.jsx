import React from 'react'

function Layout({ children }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#5D6ADD] ">

            <h1 className="text-4xl font-bold text-white mb-8">MedServ</h1>
            <div className="w-full max-w-[500px]">
                {children}
            </div>
        </div >
    )
}

export default Layout