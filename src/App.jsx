import { useState } from 'react'
import Cabecera from './componentes/top'
import Pie from './componentes/pie'
import Calculadora from './componentes/calculadora'
import Empleados from './componentes/empleados'
import './App.css'


function App() {
  // const [count, setCount] = useState(0)
  // const [agrupar, sumarMas] = useState(1)
  // const [contabilizar, quitar] = useState(0)
   
    return (
    <div className="envoltura">
      <Cabecera />
      <h1>Lista de empleados</h1>
      <Empleados />
      {/* <Form> */}
      <Calculadora />
      {/* ejemplo para cambiar luego patata por el resultado que tengo que guardar en las variables para que haga la suma. Puedo usar las mismas variables para el resto */}
      {/* <button>Aquí tiene que enviar algo para que funcione</button>
      </Form> */}
     <Pie />
    </div>
  
    
  )
}

export default App
