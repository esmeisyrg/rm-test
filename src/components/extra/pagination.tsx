import React, { useState } from 'react';
import styles from '../../styles/UI/pagination.module.scss';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

const Pagination: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);

  const handlePreviousClick = () => {
    setActiveIndex(prevIndex => Math.max(prevIndex - 1, 1));
  };

  const handleNextClick = () => {
    setActiveIndex(prevIndex => (prevIndex === 5 ? 1 : prevIndex + 1));
  };

  const handleIndexClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <article className={styles['buttons-container']}>
      <button className={styles.button} onClick={handlePreviousClick}><MdOutlineArrowBackIos/></button>
      {[1, 2, 3, 4, 5].map((index) => (
        <button
          key={index}
          className={`${styles.button} ${activeIndex === index ? styles.active : ''}`}
          onClick={() => handleIndexClick(index)}
        >
          {index}
        </button>
      ))}
      <button className={styles.button} onClick={handleNextClick}><MdOutlineArrowForwardIos /></button>
    </article>
  );
}

export default Pagination;