import React from 'react';
import styles from '../styles/UI/property-card.module.scss';
import IBath from '../assets/icons/Ibath.svg';
import IRoom from '../assets/icons/IRoom.svg';
import IParking from '../assets/icons/IParking.svg';
import IMetrics from '../assets/icons/IMetrics.svg';

interface PropertyCardProps {
  propertyImage?: string;
  propertyType?: string;
  propertyLocation?: string;
  propertyAction?: string;
  propertyPrice?: string;
  propertyCode?: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  propertyType,
  propertyLocation,
  propertyAction,
  propertyPrice,
  propertyImage,
  propertyCode,
}) => {
  return (
    <div className={styles.container}>
      <article className={styles['card-container']}>
        <div className={styles.card}>
          <img className={styles.image} src={propertyImage} alt="House" />
          <div className={styles['card-content']}>
            <h3>{propertyType}</h3>
            <p>{propertyLocation}</p>

            <h3>{propertyAction}</h3>
            <p>{propertyPrice}</p>
            <article className={styles.icons}>
              <img src={IBath} alt="Bathrooms icon" />
              <img src={IParking} alt="Parking Icon" />
              <img src={IMetrics} alt="Metrics Icon" />
              <img src={IRoom} alt="Room Icon" />
            </article>
            <p>{propertyCode}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default PropertyCard;
