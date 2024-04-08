import styles from '../../styles/layout/footer.module.scss';
import Logo from '../../assets/Icon.svg';
import Button from '../../components/ui/Button';
import Texts from '../extra/Texts';
import Globe from '../../assets/img/remaxglobe.svg';
import  FBIcon  from '../../assets/media/fb-icon.svg';
import  IGIcon  from '../../assets/media/ig-icon.svg';
import  TwitterIcon from '../../assets/media/twitter-icon.svg';
import  WSIcon  from '../../assets/media/whatsapp-icon.svg';

interface FooterProps {
  showWhiteBackground: boolean;
}

const Footer: React.FC<FooterProps> = ({ showWhiteBackground }) => {
  const buttonData = [
    { text: "Abre tu Franquicia", backgroundColor: "#0071BA", hoverColor: "#025f9e", destination: 'https://www.google.com' },
    { text: "Únete a RE/MAX", backgroundColor: "#29A9E0", hoverColor: "#1f80a9", destination: 'https://www.google.com' },
    { text: "REGÍSTRATE", backgroundColor: "#E92027", hoverColor: "#E92027", destination: 'https://www.google.com' },
    { text: "SUSCRIBIR", backgroundColor: "#FFFFFF", fontColor:"#1F3564", hoverColor: "#dbdbdb", destination: 'https://www.google.com' }
  ];

  return (
    <footer className={showWhiteBackground ? styles.whiteBackground : styles.grayBackground}>
      <div className={styles['top-container']}>
          <div className={styles['inner-container']}>
          <article className={styles.left}>
          <div className={styles.grid}>
            <div className={styles.column1}>
              <img src={Globe} alt="Remax" />
            </div>
            <div className={styles.column2}>
              <article className={styles['join-buttons']}>
                <Button key={0} text={buttonData[0].text} backgroundColor={buttonData[0].backgroundColor} hoverColor={buttonData[0].hoverColor} destination={buttonData[0].destination} fontColor={buttonData[0].fontColor} />
                <Button key={1} text={buttonData[1].text} backgroundColor={buttonData[1].backgroundColor} hoverColor={buttonData[1].hoverColor} destination={buttonData[1].destination} fontColor={buttonData[1].fontColor} />
              </article>
              <Texts className={styles.pp1} text='RE/MAX es una empresa multinacional, que permite Capacitar, Educar y relacionar a los Asesores y gestores de negocios con el mercado inmobiliario del Mundo, a través de su conocimiento y relaciones nacionales y extranjeras. Desde la primer oficina que abrió sus puertas en 1973 en Denver, Colorado, RE/MAX se ha convertido en una red global de bienes raíces de oficinas de propiedad de franquiciados que funciona con cerca de 90.000 asociados de ventas.'/>
              <article className={styles.sm}>
                <a href="https://www.facebook.com"><img src={FBIcon} alt="Facebook Icon" /></a>
                <a href="https://www.whatsapp.com"><img src={WSIcon} alt="Whatsapp Icon" /></a>
                <a href="https://www.twitter.com"><img src={TwitterIcon} alt="Twitter Icon" /></a>
                <a href="https://www.instagram.com"><img src={IGIcon} alt="Instagram Icon" /></a>
              </article>
            </div>
          </div>
        </article>

        <article className={styles.right}>
          <Button key={2} text={buttonData[2].text} backgroundColor={buttonData[2].backgroundColor} hoverColor={buttonData[2].hoverColor} destination={buttonData[2].destination} fontColor={buttonData[2].fontColor} />

          <Texts className={styles.p1} text='Mejora tu experiencia de búsqueda. Regístrate para que puedas guardar las propiedades de tu interés y recibir actualizaciones de las mismas.'/>
          <Texts className={styles.p2} text='Suscribete y recibe las actualizaciones de nuevas propiedades.'/>

            <div className={styles['mail-suscribe']}>
              <input
              type="text"
              className={styles.searchInputG}
              placeholder="Email"
            />

            <Button key={3} text={buttonData[3].text} backgroundColor={buttonData[3].backgroundColor} hoverColor={buttonData[3].hoverColor} destination={buttonData[3].destination}  fontColor={buttonData[3].fontColor}/>

            </div>
       
        </article>

        
      </div>
      </div>

      <div className={styles['list-ul']}>
   
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
export default Footer;