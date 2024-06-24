import React, { useEffect, useState } from 'react'

import TechnicianScheduleComponent from '../TechnicianScheduleComponent/TechnicianScheduleComponent'
import RespondRequestComponent from '../RespondRequestComponent/RespondRequestComponent'
import AddTechnicianModal from '../AddTechnicianComponent/AddTechnicianModal'

function AdminHome() {

    const [isOpen, setIsOpen] = useState(false)
    const [selectedTecnico, setSelectedTecnico] = useState()
    const [isResponseModalOpen, setIsResponseModalOpen] = useState(false)
    const [selectedSolicitud, setSelectedSolicitud] = useState()
    const [openAddTechModal, setOpenAddTechModal] = useState(false)



    let ultimasSolicitudes = [
        {
            id: 1,
            nombre: 'José Pérez',
            fecha: '15/03/2024',
            descripcion: 'Hola, necesito una visita técnica de emergencia hoy mismo en la ciudad de Concepción para una máquina de diálisis “4008S Classic”.',
            direccion: 'Calle Falsa 123',
            estado: 'Pendiente',
            profilePic: 'https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-afro-professional-doctor-png-image_10148632.png'
        },
        {
            id: 2,
            nombre: 'Juan Pérez',
            fecha: '16/06/2024',
            descripcion: 'Hola, necesito una visita técnica de urgencia para mañana en la ciudad de San Antonio para una máquina de diálisis “5008S Cordiax”, no funciona.\nGracias.',
            direccion: 'Calle Falsa 123',
            estado: 'Pendiente',
            profilePic: 'https://png.pngtree.com/png-clipart/20230918/ourmid/pngtree-photo-men-doctor-physician-chest-smiling-png-image_10132895.png'
        },
        {
            id: 3,
            nombre: 'Esteban Dido',
            fecha: '18/06/2024',
            descripcion: 'Hola, solicito agendar un mantenimiento programado para la próxima semana en la ciudad de Valparaíso para una máquina de diálisis “5008S CorDiax”.',
            direccion: 'Calle Falsa 123',
            estado: 'Pendiente',
            profilePic: 'https://w7.pngwing.com/pngs/98/590/png-transparent-physician-doctor-of-medicine-patient-health-care-doctor-electronics-microphone-service-thumbnail.png'
        }

    ]

    let tecnicos = [
        {
            id: 1,
            nombre: 'José Pérez',
            foto: 'https://cdn-icons-png.flaticon.com/512/2544/2544316.png',
            horario: 'https://media.discordapp.net/attachments/748956583739785226/1254858259144114206/image.png?ex=667b0553&is=6679b3d3&hm=909f2850bcdc8734ad552c9d5c2c846bf59b22b1239f41b97c93895ee86efd1d&=&format=webp&quality=lossless&width=720&height=253',
            horarios: [
                "Lunes 10:00 - 18:00",
                "Martes 10:00 - 18:00",
                "Miércoles 10:00 - 18:00",
                "Jueves 10:00 - 18:00",
                "Viernes 10:00 - 18:00",
                "Sábado 10:00 - 18:00",
            ]
        },
        {
            id: 2,
            nombre: 'Juan Pérez',
            foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLbVhzLgN14oGnbU2oezZ7brPLOf_r5qabzA&s',
            horario: 'https://media.discordapp.net/attachments/748956583739785226/1254858259144114206/image.png?ex=667b0553&is=6679b3d3&hm=909f2850bcdc8734ad552c9d5c2c846bf59b22b1239f41b97c93895ee86efd1d&=&format=webp&quality=lossless&width=720&height=253',
            horarios: [
                "Lunes 10:00 - 18:00",
                "Martes 10:00 - 18:00",
                "Miércoles 10:00 - 18:00",
                "Jueves 10:00 - 18:00",
                "Viernes 10:00 - 18:00",
                "Sábado 10:00 - 18:00",
            ]
        },
        {
            id: 3,
            nombre: 'Esteban Dido',
            foto: 'https://w7.pngwing.com/pngs/166/660/png-transparent-technique-technical-support-service-computer-repair-technician-tecnico-photography-service-hand-thumbnail.png',
            horario: 'https://media.discordapp.net/attachments/748956583739785226/1254858259144114206/image.png?ex=667b0553&is=6679b3d3&hm=909f2850bcdc8734ad552c9d5c2c846bf59b22b1239f41b97c93895ee86efd1d&=&format=webp&quality=lossless&width=720&height=253',
            horarios: [
                "Lunes 10:00 - 18:00",
                "Martes 10:00 - 18:00",
                "Miércoles 10:00 - 18:00",
                "Jueves 10:00 - 18:00",
                "Viernes 10:00 - 18:00",
                "Sábado 10:00 - 18:00",
            ]
        },
        {
            id: 4,
            nombre: 'Franco',
            foto: 'https://w7.pngwing.com/pngs/218/773/png-transparent-technician-computer-icons-car-maintenance-service-repair-technician-computer-icons-car-maintenance.png',
            horario: 'https://media.discordapp.net/attachments/748956583739785226/1254858259144114206/image.png?ex=667b0553&is=6679b3d3&hm=909f2850bcdc8734ad552c9d5c2c846bf59b22b1239f41b97c93895ee86efd1d&=&format=webp&quality=lossless&width=720&height=253',
            horarios: [
                "Lunes 10:00 - 18:00",
                "Martes 10:00 - 18:00",
                "Miércoles 10:00 - 18:00",
                "Jueves 10:00 - 18:00",
                "Viernes 10:00 - 18:00",
                "Sábado 10:00 - 18:00",
            ]
        },


    ]

    const handleTecnico = (tecnico) => {
        setSelectedTecnico(tecnico)
        setIsOpen(true)
    }

    const handleResponse = (solicitud) => {
        setSelectedSolicitud(solicitud)
        setIsResponseModalOpen(true)
    }

    const handleAddTech = () => {
        setOpenAddTechModal(true)
    }




    return (
        <div>
           
            <div className='bg-[#EFEFEF] h-screen'>
                <div className='flex py-7 px-11 justify-between'>
                    <div className='w-6/12 bg-[#D9D9D9] min-h-[700px] rounded-lg mx-5  relative' >
                        <h1 className='text-4xl text-black font-bold pl-10 mt-7 '>
                            Técnicos
                        </h1>

                        {tecnicos.map((tecnico) => (
                            <div key={tecnico.id} className='flex bg-[#CCCCCC] p-5 rounded-lg my-5 mx-2'>
                                <img src={tecnico.foto} alt='profilePic' className='w-20 h-20 rounded-full' />
                                <div className='ml-5 relative flex flex-auto justify-between'>

                                    <p className='text-lg mt-10 mb-5 text-black '>{tecnico.nombre}</p>

                                    <button onClick={() => handleTecnico(tecnico)}
                                        className='right-0'>Ver Horario  </button>
                                </div>
                            </div>
                        ))}

                        <button
                        onClick={handleAddTech}
                            className="size-12 rounded-full inline-flex items-center justify-center bg-[#5D6ADD}] text-white text-xl font-bold">+</button>


                    </div>

                    <div className='w-6/12 bg-[#D9D9D9] min-h-[700px] rounded-lg roun' >
                        <h1 className='text-4xl text-black font-bold pl-10 mt-7 '>
                            Solicitudes pendientes
                        </h1>

                        {ultimasSolicitudes.map((solicitud) => (
                            <div key={solicitud.id} className='flex bg-[#CCCCCC] p-5 rounded-lg my-5 mx-2' onClick={() => handleResponse(solicitud)}
                            >
                                <img src={solicitud.profilePic} alt={`Foto de perfil de ${solicitud.nombre}`} className='w-20 h-20 rounded-full' />
                                <div className='ml-5 relative'>

                                    <div className={`absolute top-0 right-0 px-2 py-1 rounded-full  text-black ${solicitud.estado === 'Pendiente' ? 'bg-[#FFB800]' : solicitud.estado === 'Aprobado' ? 'bg-[#00FF00]' : 'bg-[#FF0000]  text-white '}`}>
                                        {solicitud.estado}
                                    </div>

                                    <p className='text-lg mt-10 mb-5 text-black'>{solicitud.descripcion}</p>
                                    <h1 className='absolute right-0 bottom-0 text-l font-semibold text-black'>{solicitud.fecha}</h1>
                                </div>
                            </div>
                        ))}



                    </div>
                </div>
            </div>
            {
                selectedTecnico ?
                    <TechnicianScheduleComponent tecnico={selectedTecnico} isOpen={isOpen} onClose={() => { setIsOpen(false) }} /> : null
            }
            {
                selectedSolicitud ?
                    <RespondRequestComponent isOpen={isResponseModalOpen} onClose={() => { setIsResponseModalOpen(false) }} solicitud={selectedSolicitud} tecnicos={tecnicos} isAproved={null}/> : null
            }
            {
                openAddTechModal ?
                    <AddTechnicianModal isOpen={openAddTechModal} onClose={() => { setOpenAddTechModal(false) }} /> : null
            }

        </div >
    )
}

export default AdminHome