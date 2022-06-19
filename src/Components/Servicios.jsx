import {useEffect,useState} from 'react'
import data from "../data/data.js"
import Servicios_part from './Servicios_part.jsx'


const Servicios = ({cantidadServicios,servicios,setServiciosm,lista,setLista}) => {
    let array = []
    for (let i = 0 ; i < Number(cantidadServicios) ; i++) {
        array.push(i)
    }

    

  return (
    <div>
            {array.map(elemento=>{return(
                <div>
                        <label
                    htmlFor='servicio'
                    className='text-xl font-bold text-gray-500 mt-4 block'
                    >Servicio adquirido: </label>

                    <Servicios_part elemento={elemento} lista={lista} setLista={setLista}/>
                </div>
            )})}
            
    </div>
  )
}

export default Servicios

/* e=>setServicios(...servicios,e.target.value) */