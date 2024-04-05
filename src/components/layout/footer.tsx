import styles from '../../styles/layout/footer.module.scss'
import Logo from '../../assets/Icon.svg'
import Button from '../../components/ui/Button'

export default function footer() {
  return (
    <footer>
      <div>
        <Button text="REGÍSTRATE" backgroundColor="RED" hoverColor="black" destination='https://www.google.com' />

      </div>


      <div className={styles.container}>
        <img src={Logo} alt="Footer Copyright" />
        <p className={styles.text}>Copyright ® Todos los derechos reservados 2022,  REMAX RD</p>
      </div>
   
    </footer>
  )
}
