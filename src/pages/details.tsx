import Footer from "../components/layout/footer"
import Header from "../components/layout/header"
import { useParams } from 'react-router-dom';
import { getRealEstatesById } from '../hooks/apiRequest'; 
import { InfoProps } from "../utils/infoProps";
import { useState, useEffect } from 'react';
import styles from '../styles/pages/details.module.scss'
import Button from "../components/ui/Button";
import IBath from '../assets/icons/Ibath.svg';
import IRoom from '../assets/icons/IRoom.svg';
import IParking from '../assets/icons/IParking.svg';
import IMetrics from '../assets/icons/IMetrics.svg';
import HouseImg from '../assets/img/house.webp';
import { GoShareAndroid } from "react-icons/go";
import RemaxGlobe from '../assets/img/remaxglobe.svg'


const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [info, setInfo] = useState<InfoProps | null>(null);

  

  useEffect(() => {
    async function fetchDetails() {
      try {
        const apiResponse = await getRealEstatesById(Number(id)); 
        setInfo(apiResponse.data);
      } catch (error) {
        console.error('Error fetching real estate details', error);
      }
    }

    fetchDetails();
  }, [id]); 


  const formatPhoneNumber = (phoneNumber: string): string => {
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');
    const formattedPhoneNumber = `(${cleanedPhoneNumber.slice(0, 3)}) - ${cleanedPhoneNumber.slice(3, 6)} - ${cleanedPhoneNumber.slice(6)}`;
    return formattedPhoneNumber;
  };




  if (!info) {
    return <div className={styles.rm}>
      <img src={RemaxGlobe} alt="Globe" />
      Cargando...</div>; 
  }

  return (
    <>
    <Header showSearchLabel={false} showSelect ={false} />

    <article className={styles['grid-cont']}>
    
    

    <div className={styles.gridd}>
      

      <div className={styles.gridd2}>
        <div className={styles['images-grid']}>
          <div className={styles.card} >
                Código: {info.parent_id}
              </div>

            <div className={styles.card__2} >
              Compartir <GoShareAndroid />

            </div>


          
              <div className={styles['large-image']}>
                <img src={HouseImg} alt="Imagen Grande" />
              </div>
              <div className={styles['small-images-container']}>
                <div className={styles['small-image']}>
                  <img src={HouseImg} alt="Imagen 1" />
                </div>
                <div className={styles['small-image']}>
                  <img src={HouseImg} alt="Imagen 2" />
                </div>
                <div className={styles['small-image']}>
                  <img src={HouseImg} alt="Imagen 3" />
                </div>
              </div>

              <div className={styles.card__3} >
            
                <span className={styles.label}>VENTA</span>
                <span className={styles.price}>US${parseFloat(info.price).toLocaleString('es', { maximumFractionDigits: 2, minimumFractionDigits: 2, useGrouping: true })}</span>
              </div>
          </div>
        
      </div>

      
      </div>

     
     


      </article>


    <section className={styles.details}>
      <div className={styles['details-container']}>

        <div className={styles['left-side']}>

        <h5 className={styles['mini-title__top']}>{info.realstate_type}</h5>
        <p  className={styles.direccion__1}>{info.city}, {info.sector}</p>

        <article className={styles.icons}>
            <img src={IParking} alt="Parking Icon" />
              <span>{info.parking_spots}</span>
            <img src={IBath} alt="Bathrooms icon" />
              <span>{info.bathrooms}</span>
            <img src={IRoom} alt="Room Icon" />
              <span>{info.bedrooms}</span>
            <img src={IMetrics} alt="Metrics Icon" />
              <span>{info.sqm_land}</span>
        </article>

        <hr className={styles.line} />
          <h5 className={styles['mini-title__active']}>Dirección</h5>
          <p className={styles.direccion__2}> {info.city}, {info.sector}</p>
        <hr className={styles.line} />

        <h5 className={styles['mini-title__active2']}>Características</h5>

        <div className={styles['grid-container']} >
          <article className={styles.left}>
            <h5 className={styles['mini-title']}>TECHO</h5>
            <p className={styles['mini-text']}>Concreto</p>

            <h5 className={styles['mini-title']}>PISOS</h5>
            <p className={styles['mini-text']}>Porcelanato</p>


            <h5 className={styles['mini-title']}>MARCOS</h5>
            <p className={styles['mini-text']}>Roble</p>

            <h5 className={styles['mini-title']}>GABINETES</h5>
            <p className={styles['mini-text']}>Roble</p>

            
            <h5 className={styles['mini-title']}>VENTAS</h5>
            <p className={styles['mini-text']}>Aluminio</p>
          </article>
        

          <article className={styles.right}>
            <h5 className={styles['mini-title']}>MEJORAS</h5>
              <ul className={styles.list}>        
                <li className={styles['mini-text__list']}>Sala</li>
                <li className={styles['mini-text__list']} >Comedor</li>
                <li className={styles['mini-text__list']} >Cocina</li>
                <li className={styles['mini-text__list']}>Ascensor</li>
                <li className={styles['mini-text__list']}>Parq. Techado</li>
                <li className={styles['mini-text__list']}>Planta Eléctrica FULL</li>
                <li className={styles['mini-text__list']}>Portón Eléctrico</li>
              </ul>

            <h5  className={styles['mini-title']} >PUERTAS</h5>
            <p className={styles['mini-text']}>Roble</p>

            <h5  className={styles['mini-title']}>CLOSETS</h5>
            <p className={styles['mini-text']}>Roble</p>
          </article>

        </div>
        </div>

        <div className={styles['right-side']}>
          {info.agents && info.agents.length > 0 && (
            <div className={styles['agent-container']}>
              <img className={styles.agent} src={info.agents[0].picture} alt="" />
              <article className={styles['agent-reference']}>

              <h5 className={styles['mini-title__active']} >{info.agents[0].name}</h5>
              <p className={styles['mini-text']} >Agente REMAX/PLUS</p>
              </article>


              <article className={styles.interest}>
              <hr className={styles.line__2} />

              <p className={styles.txI}>¿Estás Interesado(a)? Contáctame</p>
              <hr className={styles.line__2} />
              <ul className={styles.list__2}>
                <li className={styles['mini-text__list']}>{info.agents[0].email}</li>
                <li className={styles['mini-text__list']}>{formatPhoneNumber(info.agents[0].phone)}</li>
                <li className={styles['mini-text__list']}>{formatPhoneNumber(info.agents[0].phone)}</li>
              </ul>
              <div className={styles.bt}>
              <Button text={`WHATSAPP ${formatPhoneNumber(info.agents[0].phone)}`} backgroundColor="#39B44A" hoverColor="#287e34" padding="1.2rem" />

              </div>
              </article>

            </div>
          )}
        </div>

      </div>

      </section>

      <Footer showWhiteBackground={false} />

    </>
  )
}
export default Details;
