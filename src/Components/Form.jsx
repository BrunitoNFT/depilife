import data from "../data/data.js"
import Servicios from './Servicios.jsx'
import { useState,useEffect } from 'react'
import "../styles/styles.css"
import swal from 'sweetalert';
import {useNavigate} from "react-router-dom";


const Form = ({setListado,listado}) => {

    const navigate = useNavigate()

    const [cantidadServicios, setCantidadServicios] = useState(0)
    const [servicios,setServicios] = useState([])

    const [lista,setLista] = useState([]) //ignorar
    const [listaFin,setListaFin] = useState([])
    const [errorLista,setErrorLista] = useState([false,""])

    const [nombre,setNombre] = useState("")
    const [errorNombre,setErrorNombre] = useState([false,""])

    const [dni,setDni] = useState()
    const [errorDni,setErrorDni] = useState([false,""])


    const [correo,setCorreo] = useState("")
    const [errorMail,setErrorMail] = useState([false,""])

    const [pago,setPago] = useState("")
    const [serviciosFinales,setServiciosFinales] = useState([])

    const [radio,setRadio] = useState("")
    const [errorRadio,setErrorRadio] = useState([false,""])
   

    useEffect(() => {
      let b = false
      let arr = []
      if (lista.length>0) {
        for (let i = 0; i < lista.length; i++) {
          let b = false
          for (let j = i+1; j < lista.length; j++) {
            
              if (lista[i][1]==lista[j][1]){
                b = true
              }
          }
          if (b==false) {
            arr.push(lista[i])
          }
        }
      }
      setListaFin(arr)
    }, [lista])
    

   





    const handleSubmit = e =>{
        e.preventDefault()
        
        //NOMBRE
        if (nombre=="") {
          setErrorNombre([true,"El Nombre es de caracter obligatorio"])
          return
        }else if (nombre.includes("<",">","script","+","*","-","/","[","]","{","}","(",")","=","?","$","this","'",'"',",",".")) {
          setErrorNombre([true,"el nombre tiene un caracter invalido"])
          return
        }else if(nombre.length<4){
          setErrorNombre([true,"el nombre es muy corto, minimo 4 letras"])
          return
        }else if(nombre.length>30){
          setErrorNombre([true,"el nombre es muy largo, maximo 30 letras"])
          return
        }
        setErrorNombre([false,""])

        //DNI
        if (dni=="") {
          setErrorDni([true,"El dni es de caracter obligatorio"])
          return
        }else if (dni.includes("<",">","script","+","*","-","/","[","]","{","}","(",")","=","?","$","this","'",'"',",",".")) {
          setErrorDni([true,"el dni tiene un caracter invalido"])
          return
        }else if(dni.length<6){
          setErrorDni([true,"el dni es muy corto, minimo 6 numeros"])
          return
        }else if(dni.length>10){
          setErrorDni([true,"el dni es muy largo, maximo 10 numeros"])
          return
        }
        setErrorDni([false,""])

        if (correo==="") {
          setErrorMail([true,"El mail es de caracter obligatorio"])
          return
        }else if (correo.includes("<",">","script","*","/","[","]","{","}","(",")","=","?","$","this","'",'"',",",".")) {
          setErrorMail([true,"el mail tiene un caracter invalido"])
          return
        }else if(correo.length<6){
          setErrorMail([true,"el mail es muy corto, minimo 6 caracteres"])
          return
        }else if(correo.length>40){
          setErrorMail([true,"el mail es muy largo, maximo 40 caracteres"])
          return
        }
        setErrorMail([false,""])

        if (listaFin.length!=cantidadServicios && cantidadServicios>0) {
          setErrorLista([true,"servicios de caracter obligatorio"])
          return
        }
        setErrorLista([false,""])

        if (cantidadServicios>0) {
          if (radio=="") {
            setErrorRadio([true,"metodo de pago de caracter obligatorio"])
            return
          }
        }
        setErrorRadio([false,""])

        const awa = async p =>{
          try {
            const url = "http://localhost:4000/clientes"
  
            const agregar = await fetch(url,{
              method: "POST",
              body:JSON.stringify({nombre,dni,correo,listaFin,radio}),
              headers:{
                "Content-Type":"application/json"
              }
            })
            const resultado = await agregar.json()
            console.log(resultado)
            navigate("/")
            
          } catch (error) {
            console.log(error)
          }
  
        }
        awa()
        
        swal({
          title: "Cliente Nuevo!",
          text: "Agregado Exitosamente",
          icon: "success",
          button: false,
        });
        setListado([...listado,{nombre,dni,correo,listaFin,radio}])

        setNombre("")
        setDni("")
        setCorreo("")
        setCantidadServicios(0)
        setRadio("")

        

    }


    const handeClick = e =>{
      e.preventDefault()
      setCantidadServicios(e.target.value)
    }

     /* const handleRadio = e=>{
      e.preventDefault()
      console.log(e.target.value)
    } */

  return (
    <div className=' w-full flex justify-center'>


        <form className="flex flex-col md:w-2/4 mt-20" onSubmit={handleSubmit}>

            <div className={errorNombre[0]?"w-full p-2 tracking-widest kk flex uppercase justify-center text-center items-center font-bold text-white rounded-sm mb-3 mt-7":"hidden"}>{errorNombre[1]}</div>
            <label
            htmlFor='nombre'
            className='text-xl font-bold text-gray-500'
            >Nombre del cliente: </label>
            <input
            type="text"
            id='nombre'
            placeholder='Ej: Franco Gonzales.'
            className='p-2 rounded-sm mt-2 focus:outline-green-600'
            onChange={e=>setNombre(e.target.value)}
            value={nombre}
            ></input>


            <div className={errorDni[0]?"w-full p-2 tracking-widest kk flex uppercase justify-center text-center items-center font-bold text-white rounded-sm mt-7":"hidden"}>{errorDni[1]}</div>
            <label
            htmlFor='dni'
            className='text-xl font-bold text-gray-500 mt-4'
            >DNI: </label>
            <input
            type="number"
            id='dni'
            placeholder='Ej: 34.567.987'
            className='p-2 rounded-sm mt-2 focus:outline-green-600'
            onChange={e=>setDni(e.target.value)}
            value={dni}
            ></input>

            <div className={errorMail[0]?"w-full p-2 tracking-widest kk flex uppercase justify-center text-center items-center font-bold text-white rounded-sm mt-7":"hidden"}>{errorMail[1]}</div>
            <label
            htmlFor='correo'
            className='text-xl font-bold text-gray-500 mt-4'
            >E-Mail: </label>
            <input
            type="email"
            id='correo'
            placeholder='unclientenuevo77@gmail.com'
            className='p-2 rounded-sm mt-2 focus:outline-green-600'
            onChange={e=>setCorreo(e.target.value)}
            value={correo}
            ></input>

            <h1 className='text-xl font-bold text-gray-500 mt-4'>Cantidad de servicios:</h1>
            <div className='h-10 bg-gray-300 rounded-sm mt-2 flex'>
        
            <button className={cantidadServicios==0?'bg-gray-700 border-x-4 kkk h-full w-full mx-1 font-black  text-2xl ':'bg-gray-500 border-x-2 kkk h-full w-full mx-1 font-bold text-white text-lg'} value="0" onClick={handeClick} >0</button>
              <button className={cantidadServicios==1?'bg-gray-700 border-x-4 kkk h-full w-full mx-1 font-black  text-2xl ':'bg-gray-500 border-x-2 kkk h-full w-full mx-1 font-bold text-white text-lg'} value="1" onClick={handeClick} >1</button>
              <button className={cantidadServicios==2?'bg-gray-700 border-x-4 kkk h-full w-full mx-1 font-black  text-2xl ':'bg-gray-500 border-x-2 kkk h-full w-full mx-1 font-bold text-white text-lg'} value="2" onClick={handeClick} >2</button>
              <button className={cantidadServicios==3?'bg-gray-700 border-x-4 kkk h-full w-full mx-1 font-black  text-2xl ':'bg-gray-500 border-x-2 kkk h-full w-full mx-1 font-bold text-white text-lg'} value="3" onClick={handeClick}>3</button>
              <button className={cantidadServicios==4?'bg-gray-700 border-x-4 kkk h-full w-full mx-1 font-black  text-2xl ':'bg-gray-500 border-x-2 kkk h-full w-full mx-1 font-bold text-white text-lg'} value="4" onClick={handeClick}>4</button>
              <button className={cantidadServicios==5?'bg-gray-700 border-x-4 kkk h-full w-full mx-1 font-black  text-2xl ':'bg-gray-500 border-x-2 kkk h-full w-full mx-1 font-bold text-white text-lg'} value="5" onClick={handeClick}>5</button>
              <button className={cantidadServicios==6?'bg-gray-700 border-x-4 kkk h-full w-full mx-1 font-black  text-2xl ':'bg-gray-500 border-x-2 kkk h-full w-full mx-1 font-bold text-white text-lg'} value="6" onClick={handeClick}>6</button>

            </div>

            <div className={errorLista[0]?"w-full p-2  tracking-widest kk flex uppercase justify-center text-center items-center font-bold text-white rounded-sm mt-7":"hidden"}>{errorLista[1]}</div>
            {cantidadServicios>0?<Servicios lista={lista} setLista={setLista} cantidadServicios={cantidadServicios} servicios={servicios} setServicios={setServicios}/>:<h1></h1>}

            
            <div className={cantidadServicios>0?"":"hidden"}>
            <div className={errorRadio[0]?"w-full p-2 tracking-widest kk flex uppercase justify-center text-center items-center font-bold text-white rounded-sm mt-7":"hidden"}>{errorRadio[1]}</div>

                                <h1 className=" text-gray-500 rounded-sm font-bold  text-xl mt-2  mb-1 ">Metodos de pago:</h1>

                    <div class="radio-list" onChange={e=>setRadio(e.target.value)}>
                    <div class="radio-item">
                        <input type="radio" name="radio" id="radio1" value="efectivo"/>
                        <label for="radio1">Efectivo</label>
                    </div>
                    <div class="radio-item">
                        <input type="radio" name="radio" id="radio2" value="credito"/>
                        <label for="radio2">Tarjeta de Credito</label>
                    </div>
                    <div class="radio-item">
                        <input type="radio" name="radio" id="radio3" value="debito"/>
                        <label for="radio3">Tarjeta de Debito</label>
                    </div>

                    </div>
            </div>



            <input type="submit" value="Nuevo Cliente" className='h-10 bg-gray-500 rounded-sm font-bold uppercase text-white text-md mt-4 hover:bg-gray-300 hover:border-2 hover:border-green-600 mb-20 '></input>
        </form>

    </div>
  )
}

export default Form









/* useEffect(() => {
  if (lista.length>0) {
    setListaFin([])
    for (let i = lista.length-1; i >=0; i--) {
      console.log("i",i)
      console.log("1er For - i id: ",lista[i][1])
      console.log()
      for (let j = i; j >=0; j--) {
        console.log("j",j)
        console.log("2do For - j id",lista[j][1])
        console.log()
        if (i==j) {
          console.log("i es igual a j","i: ",i, "j: ",j)
          setListaFin([...listaFin,lista[j]])
          console.log("Lista: ",lista)
          console.log("Lista fin: ",listaFin)
          console.log()
        }else{
          if (lista[i][1]!=lista[j][1]) {
            console.log("i es distinto a j","i: ",i, "j: ",j)
            setListaFin([...listaFin,lista[j]])
            console.log("Lista: ",lista)
            console.log("Lista fin: ",listaFin)
            console.log()
          }
        }
      }
    }
  }

}, [lista]) */