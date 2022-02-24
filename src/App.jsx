import { useState, useEffect } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoNoticias from "./components/ListadoNoticias"

function App() {

  //definir la categoría y noticias
  const [ categoria, setCategoria ] = useState('')
  const [ noticias, setNoticias ] = useState([])

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=224c7f7de2434411807e5b4364ad39a0`;
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      setNoticias(resultado.articles);
    }
    consultarAPI()
  }, [categoria])

  return (
    <>
      <Header
        titulo='Buscador de Noticias'
      />

      <div className="container white">
        <Formulario
          setCategoria={setCategoria}
        />
        <ListadoNoticias
          noticias={noticias}
        />
      </div>
    </>
  )
}


export default App
