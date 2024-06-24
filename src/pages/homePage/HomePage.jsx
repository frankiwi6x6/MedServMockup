import React, { useState } from 'react'
import UserHome from '../../components/UserHome/UserHome'
import AdminHome from '../../components/AdminHome/AdminHome'


function HomePage() {

    const [usertypeId, setUsertypeId] = useState(1)



    return (
        <div>
            <nav className='bg-[#5D6ADD] flex '>
                <div className=''>
                    <h1 className='text-5xl font-semibold py-4 pl-32'>
                        MedServ
                    </h1>
                </div>
                {/* Togglebutton for changing usertype */}
                <div className=' absolute right-0 '>
                    <button onClick={() => setUsertypeId(1)} className={`text-white bg-[#9a9ca7] px-4 py-2 rounded-md ${usertypeId==1? 'bg-[#1e1e20] text-white':null }`}>User</button>
                    <button onClick={() => setUsertypeId(2)} className={`text-white bg-[#9a9ca7] px-4 py-2 rounded-md ${usertypeId==2? 'bg-[#1e1e20] text-white':null }`}>Admin</button>
                </div>

            </nav >
            {usertypeId === 1 ? <UserHome /> : <AdminHome />
            }
        </div >
    )
}

export default HomePage