import {useState} from 'react'
import "../styles/styles.css"

const Inicio = ({setListado,listado}) => {


  return (
    <div>
      <h1 className='text-6xl font-bold text-gray-600 mt-3 ml-10'>Listado Clientes</h1>
      <p className='text-2xl text-gray-500 mt-3 ml-10'>Elimine, visualize o edite los clientes en el listado inferior.</p>
      {listado.map(e=>{
        return(
        <div className='ki m-20 p-4 font-bold text-xl text-gray-500 rounded-md'>
           <p className='mt-2'>nombre: {e.nombre}</p>
           <p className='mt-2'>Dni: {e.dni}</p>
           <p className='mt-2'>E-Mail: {e.correo}</p>
           <p className='mt-2'>Lista: {e.listaFin}</p>
           <p className='mt-2'>Metodo de Pago: {e.radio}</p>
        </div>)
      })}
    </div>
  )
}

export default Inicio