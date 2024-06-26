import React from 'react';
import styles from '../../styles/UI/button.module.scss';

interface ButtonProps {
  text: string;
  backgroundColor?: string;
  hoverColor?: string;
  destination?: string;
  fontColor?: string;
  padding?: string;
  onClick?: () => void; 
}

const Button: React.FC<ButtonProps> = ({ text, backgroundColor, hoverColor, destination, fontColor, padding, onClick }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (destination) {
      window.open(destination, '_blank', 'noopener,noreferrer'); 
    }
  };

  return (
    <button
      className={styles.button}
      style={{ backgroundColor: isHovered ? hoverColor : backgroundColor, color: fontColor, padding: padding} }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
