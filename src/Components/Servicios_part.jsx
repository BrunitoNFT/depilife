import {useState,useEffect} from 'react'
import data from "../data/data.js"



const Servicios_part = ({elemento,lista,setLista}) => {

    const [servicio,setServicio] = useState([])
    useEffect(() => {

        if (servicio.length>0) {
            setLista([...lista,servicio])
        }
    }, [servicio])
    


  return (
    <select id='servicio' className='h-10 text-center mt-3 block w-full font-bold text-gray-400 ki rounded-sm ' onChange={e=>setServicio((e.target.value).split(","))} >
                    <option value="" className='border-4 border-black'>-- Seleccione el servicio --</option>

                    {data.map(dato =>(
                        <option value={[dato.codigo,elemento]}>
                            {dato.categoria}
                        </option>
                    ))}
                    </select>
  )
}

export default Servicios_part