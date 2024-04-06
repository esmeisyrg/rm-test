import styles from '../../styles/layout/footer.module.scss';
import Logo from '../../assets/Icon.svg';
import Button from '../../components/ui/Button';
import Texts from '../extra/Texts';
import Globe from '../../assets/img/remaxglobe.svg';

export default function Footer() {
  const buttonData = [
    { text: "Abre tu Franquicia", backgroundColor: "#0071BA", hoverColor: "#025f9e", destination: 'https://www.google.com' },
    { text: "Únete a RE/MAX", backgroundColor: "#29A9E0", hoverColor: "#1f80a9", destination: 'https://www.google.com' },
    { text: "REGÍSTRATE", backgroundColor: "#E92027", hoverColor: "#E92027", destination: 'https://www.google.com' },
    { text: "SUSCRIBIR", backgroundColor: "#FFFFFF", fontColor:"#1F3564", hoverColor: "#dbdbdb", destination: 'https://www.google.com' }
  ];

  return (
    <footer>
      <div className={styles['top-container']}>
        <article className={styles.left}>
          <img src={Globe} alt="Remax" />
          {buttonData.slice(0, 2).map((button, index) => (
            <Button key={index} text={button.text} backgroundColor={button.backgroundColor} hoverColor={button.hoverColor} destination={button.destination}  fontColor={button.fontColor} />
          ))}
          <Texts text='RE/MAX es una empresa multinacional, que permite Capacitar, Educar y relacionar a los Asesores y gestores de negocios con el mercado inmobiliario  del Mundo, a través de su conocimiento y relaciones nacionales y extranjeras. Desde la primer oficina que abrió sus puertas en 1973 en Denver, Colorado, RE/MAX se ha convertido en una red global de bienes raíces de oficinas de propiedad de franquiciados que funciona con cerca de 90.000 asociados de ventas.'/>
        </article>

        <article className={styles.right}>
        <Button key={2} text={buttonData[2].text} backgroundColor={buttonData[2].backgroundColor} hoverColor={buttonData[2].hoverColor} destination={buttonData[2].destination} fontColor={buttonData[2].fontColor} />

        <Texts text='Mejora tu experiencia de búsqueda. Regístrate para que puedas guardar las propiedades de tu interés y recibir actualizaciones de las mismas.'/>
        <Texts text='Suscribete y recibe las actualizaciones de nuevas propieades.'/>
          {/* createa an input label */}
          <input
            type="text"
            className={styles.searchInputG}
            placeholder="Email"
          />

          {buttonData.slice(3).map((button, index) => (
            <Button key={index} text={button.text} backgroundColor={button.backgroundColor} hoverColor={button.hoverColor} destination={button.destination}  fontColor={button.fontColor}/>
          ))}

        </article>

        <ul className={styles['list-container']}>
          <li><a href="#">Propiedades</a></li>
          <li><a href="#">Agentes</a></li>
          <li><a href="#">Franquicias</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Alquilar</a></li>
          <li><a href="#">Collection</a></li>
          <li><a href="#">Contáctanos</a></li>
          <li><a href="#">Comprar</a></li>
        </ul>
      </div>



      <div className={styles.container}>
        <img src={Logo} alt="Footer Copyright" />
        <p className={styles.text}>Copyright ® Todos los derechos reservados 2022,  REMAX RD</p>
      </div>
    </footer>
  );
}
