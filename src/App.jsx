
import './App.css'
import { MyComponent } from './components/MyComponent'
import { SecondComponent } from './components/SecondComponent'

function App() {

  const name = 'Nico ';
  const lastname = 'Velásquez ';

  return (
    <>
      <div>
        <h2>Práctica de Componentes y Eventos</h2>
        {/* Carga el Primer componente */}
        <MyComponent name={name} lastname={lastname} />
        {/* Carga el Segundo componente */}
        <SecondComponent name={name} lastname={lastname} />
        <button onClick={() => console.log('Has hecho click en el botón')}>Click Me!</button>
      </div>
    </>
  )
}

export default App
