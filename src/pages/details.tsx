import Footer from "../components/layout/footer"
import Header from "../components/layout/header"
import { useParams } from 'react-router-dom';
import { getRealEstatesById } from '../hooks/apiRequest'; 
import { InfoProps } from "../utils/infoProps";
import { useState, useEffect } from 'react';
import styles from '../styles/pages/details.module.scss'
import Button from "../components/ui/Button";

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [info, setInfo] = useState<InfoProps | null>(null);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const apiResponse = await getRealEstatesById(Number(id)); // Convertimos el id a número y lo pasamos a la función de la API
        setInfo(apiResponse.data);
      } catch (error) {
        console.error('Error fetching real estate details', error);
      }
    }

    fetchDetails();
  }, [id]); 

  if (!info) {
    return <div>Cargando...</div>; 
  }

  return (
    <>
    <Header showSearchLabel={false} showSelect ={false} />

    <section className={styles.details}>

      <h5>{info.bedrooms}</h5>
      <p>{info.bedrooms}</p>

      <article className={styles.icons}>

      </article>
      <hr />
        <h5>Dirección</h5>
        <p>Calle Wallaby</p>
      <hr />

      <h5>Características</h5>

      <article className={styles.left}>
        <h5>Techo</h5>
        <p>Concreto</p>

        <h5>Pisos</h5>
        <p>Concreto</p>


        <h5>Marcos</h5>
        <p>Concreto</p>

        <h5>Gabinetes</h5>
        <p>Concreto</p>

        
        <h5>Ventanas</h5>
        <p>Concreto</p>
      </article>

      
      <article className={styles.right}>
        <h5>Mejoras</h5>
        {/* create a list with ul  and li */}
        <ul>
          <li>Mejora 1</li>
          <li>Mejora 2</li>
          <li>Mejora 3</li>
          <li>Mejora 3</li>
          <li>Mejora 3</li>
        </ul>

        <h5>Puertas</h5>
        <p>Concreto</p>

        <h5>Closets</h5>
        <p>Concreto</p>

      </article>

      <div className={styles['agent-container']}>
        <img src="" alt="" />
        <h5>Puertas</h5>
        <p>Concreto</p>

        <hr />
        <p>Contacto:</p>
        <hr />

        <ul>
          <li>Mejora 1</li>
          <li>Mejora 2</li>
          <li>Mejora 3</li>
        </ul>
        <Button text="WHATSAPP" backgroundColor="#39B44A" />


      </div>

     

      </section>

      <Footer/>



    </>
  )
}
export default Details;
