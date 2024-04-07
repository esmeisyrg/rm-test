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

interface InfoProps{
  id: number;
  price: number;
  business_type?: string;
  arrangement?: string;
  realstatetype_id?: number;
  realstate_type?: string;
  sqm_land?: number;
  parking_spots?: number;
  bedrooms?: number;
  bathrooms?: number;
  city?: string;
  sector?: string;
  latitude?: number;
  longitude?: number;
  status?: string;
  condition_status?: string;
  improvements: {
    realstate_id?: number;
    name?: string;
  }
  main_picture: {
    big?: string;
    small?: string;
  }
  project: {
    separation_price?: string;
  }
  minimum_price?: string;
  maximum_price?: string;

  info: {
    realstate_id?: number;
    language_id?: number;
    title?: string;
  }
}


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

              <Link to="/details">
                  <img className={styles.image} src={item.main_picture.small} alt="House" />
              </Link>

              <div className={styles['card-content']}>
                <h3>{item.realstate_type}</h3>
                <p>{item.city}</p>

                <p>{item.city}, {item.sector}</p>

                <p>Venta</p>
                <p>$US {item.price}</p>

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