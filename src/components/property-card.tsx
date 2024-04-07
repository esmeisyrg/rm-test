import { useState, useEffect} from 'react';
import styles from '../styles/UI/property-card.module.scss';
import IBath from '../assets/icons/Ibath.svg';
import IRoom from '../assets/icons/IRoom.svg';
import IParking from '../assets/icons/IParking.svg';
import IMetrics from '../assets/icons/IMetrics.svg';
import { getRealEstates } from '../hooks/apiRequest';
import Heart from '../assets/icons/saved.svg';
import HeartActive from '../assets/icons/savedActive.svg';
import { Link } from 'react-router-dom';
import { InfoProps } from '../utils/infoProps';



const PropertyCard: React.FC = () => {
  const [data, setData] = useState<InfoProps[] | null>(null);

  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };
  

  useEffect(() => {
      async function fetchData() {
          try {
              const apiResponse = await getRealEstates();
              console.log(apiResponse); 
              const apiData = apiResponse.data; 
              setData(apiData);
          } catch (error) {
              console.error('Error fetching real estates', error);
          }
      }
      fetchData();
  }, []);

  return (
    <>
      {data &&
          data.map((item) => (       
        <div key={item.id} className={styles.container}>
          <article className={styles['card-container']}>
            <div className={styles.card}>
            <img
                  className={styles.heart}
                  src={favorites.includes(item.id) ? HeartActive : Heart}
                  alt="Favorite"
                  onClick={() => toggleFavorite(item.id)}
                />

              <Link to={`/details/${item.id}`}>
                  <img className={styles.image} src={item.main_picture.small} alt="House" />
              </Link>

              <div className={styles['card-content']}>
          
                <h3 className={styles['property-title']}>{item.realstate_type}</h3>
                <p className={styles.city}>{item.city}</p>
                <p className={styles['city-sector']}>{item.city}, {item.sector}</p>
                
                <article className={styles['venta-container']}>
                  <p className={styles.venta}>VENTA</p>
                  <p className={styles.price}>$US {item.price}</p>

                </article>
                

                <article className={styles.icons}>
                  <img src={IParking} alt="Parking Icon" />
                  <span>{item.parking_spots}</span>
                  <img src={IBath} alt="Bathrooms icon" />
                  <span>{item.bathrooms}</span>
                  <img src={IRoom} alt="Room Icon" />
                  <span>{item.bedrooms}</span>     
                  <img src={IMetrics} alt="Metrics Icon" />
                  <span>{item.sqm_land}</span> 
                </article>
                <p className={styles.code}>Cod.{item.id}</p>

              </div>
            </div>

          </article>

    </div>
    ))}
    </>

  );
};

export default PropertyCard;