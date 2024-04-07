import Footer from "../components/layout/footer"
import Header from "../components/layout/header"
import { useParams } from 'react-router-dom';
import { getRealEstatesById } from '../hooks/apiRequest'; 
import { InfoProps } from "../utils/infoProps";
import { useState, useEffect } from 'react';

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [realEstateDetails, setRealEstateDetails] = useState<InfoProps | null>(null);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const apiResponse = await getRealEstatesById(Number(id)); // Convertimos el id a número y lo pasamos a la función de la API
        setRealEstateDetails(apiResponse.data);
      } catch (error) {
        console.error('Error fetching real estate details', error);
      }
    }

    fetchDetails();
  }, [id]); 

  if (!realEstateDetails) {
    return <div>Cargando...</div>; 
  }

  return (
    <>


      <Header/>

      <h1>{realEstateDetails.bedrooms}</h1>


      <h1>Detalles del inmueble {id}</h1>

      <Footer/>



    </>
  )
}
export default Details;
