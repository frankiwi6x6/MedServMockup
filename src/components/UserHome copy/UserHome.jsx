import React, { useState } from 'react'

import CreateRequestModal from '../CreateRequestComponent/CreateRequestModal'

function UserHome() {

    const [isOpen, setIsOpen] = useState(false)

    let solicitudes = [
        {
            id: 1,
            fecha: '16/06/2024',
            descripcion: 'Hola, solicito una visita técnica para el próximo mes en la ciudad de San Antonio para una máquina de diálisis “5008S CorDiax”.\nDe antemano muchas gracias.',
            estado: 'Pendiente',
            profilePic: 'https://png.pngtree.com/png-clipart/20230918/ourmid/pngtree-photo-men-doctor-physician-chest-smiling-png-image_10132895.png'
        },
        {
            id: 2,
            fecha: '15/03/2024',
            descripcion: 'Hola, necesito una visita técnica de urgencia para mañana en la ciudad de San Antonio para una máquina de diálisis “5008S Cordiax”, no funciona.\nGracias.',
            estado: 'Aprobado',
            profilePic: 'https://png.pngtree.com/png-clipart/20230918/ourmid/pngtree-photo-men-doctor-physician-chest-smiling-png-image_10132895.png'
        },
        {
            id: 3,
            fecha: '15/03/2024',
            descripcion: 'Hola, necesito una visita técnica de urgencia para mañana en la ciudad de San Antonio para una máquina de diálisis “5008S Cordiax”, no funciona.\nGracias.',
            estado: 'Rechazado',
            profilePic: 'https://png.pngtree.com/png-clipart/20230918/ourmid/pngtree-photo-men-doctor-physician-chest-smiling-png-image_10132895.png'
        }

    ]

    let visitasTecnicas = [
        {
            id: 1,
            fecha: '16/03/2024',
            localidad: 'San Antonio',
            tecnico: 'Juan Pérez',
            foto: 'https://cdn-icons-png.flaticon.com/512/2544/2544316.png'
        },
    ]

    const addRequest = () => {
        console.log('addRequest')
        setIsOpen(true)



    }



    return (
        <div>
            <nav className='bg-[#5D6ADD]  '>
                <h1 className='text-5xl font-semibold py-4 pl-32'>
                    MedServ
                </h1>
            </nav>
            <div className='bg-[#EFEFEF] h-screen'>
                <div className='flex py-7 px-11 justify-between'>
                    <div className='w-6/12 bg-[#D9D9D9] min-h-[700px] rounded-lg mx-5  relative' >
                        <h1 className='text-4xl text-black font-bold pl-10 mt-7 '>
                            Mis Solicitudes
                        </h1>

                        {solicitudes.map((solicitud) => (
                            <div key={solicitud.id} className='flex bg-[#CCCCCC] p-5 rounded-lg my-5 mx-2'>
                                <img src={solicitud.profilePic} alt='profilePic' className='w-20 h-20 rounded-full' />
                                <div className='ml-5 relative'>

                                    <div className={`absolute top-0 right-0 px-2 py-1 rounded-full  text-black ${solicitud.estado === 'Pendiente' ? 'bg-[#FFB800]' : solicitud.estado === 'Aprobado' ? 'bg-[#00FF00]' : 'bg-[#FF0000]  text-white '}`}>
                                        {solicitud.estado}
                                    </div>

                                    <p className='text-lg mt-10 mb-5 text-black'>{solicitud.descripcion}</p>
                                    <h1 className='absolute right-0 bottom-0 text-l font-semibold text-black'>{solicitud.fecha}</h1>
                                </div>
                            </div>
                        ))}

                        <button
                            onClick={addRequest}
                            className="size-12 rounded-full inline-flex items-center justify-center bg-[#5D6ADD}] text-white text-xl font-bold">+</button>


                    </div>

                    <div className='w-6/12 bg-[#D9D9D9] min-h-[700px] rounded-lg roun' >
                        <h1 className='text-4xl text-black font-bold pl-10 mt-7 '>
                            Visitas técnicas anteriores
                        </h1>
                        {
                            visitasTecnicas.map((visita) => (
                                <div key={visita.id} className='flex bg-[#CCCCCC] p-5 rounded-lg my-5 mx-2'>
                                    <img src={visita.foto} alt='profilePic' className='w-20 h-20 rounded-full' />
                                    <div className='ml-5 relative'>
                                        <p className='text-lg my-5 text-black'>{visita.tecnico} te visitó en {visita.localidad} el {visita.fecha}</p>
                                        <h1 className='absolute right-0 bottom-0 text-l font-semibold text-black'>{visita.fecha}</h1>
                                    </div>
                                </div>
                            ))}


                    </div>
                </div>
            </div>
            <CreateRequestModal isOpen={isOpen} onClose={() => { setIsOpen(false) }} />
        </div >
    )
}

export default UserHome