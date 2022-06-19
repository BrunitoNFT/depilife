import Form from "../Components/Form"
import "../styles/styles.css"

const NuevoCliente = ({setListado,listado}) => {
  return (
    <div className="">
      <h1 className='text-6xl font-bold text-gray-600 mt-3 ml-10'>Nuevo Cliente</h1>
      <p className='text-2xl text-gray-500 mt-3 ml-10'>Complete el formulario inferior para agregar un cliente.</p>

      <Form setListado={setListado} listado={listado}/>
    </div>
  )
}

export default NuevoCliente