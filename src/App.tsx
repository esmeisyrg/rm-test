import AppRouter from './routes/AppRouter.tsx'
import { getRealEstates, getRealEstatesById} from './hooks/apiRequest.tsx'

function App() {

  getRealEstates()
  .then(data => {
    console.log('Propiedades inmobiliarias:', data);
  })
  .catch(error => {
    console.error('Error al obtener las propiedades inmobiliarias:', error);
  });

  getRealEstatesById(165946)
  .then(data => {
    console.log('Propiedad inmobiliaria por ID:', data);
  })
  .catch(error => {
    console.error('Error al obtener la propiedad inmobiliaria por ID:', error);
  });

  return (
    <>
      <AppRouter/>

    </>
  )
}

export default App
