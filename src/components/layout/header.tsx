import styles from '../../styles/layout/header.module.scss'
import Logo from '../../assets/Icon.svg'
import SearchLabel from '../ui/Search-label'
import US from '../../assets/usa.svg'
import ES from '../../assets/rd.svg'


export default function Header() {
  return (
    <header className={styles.header}>

      {/* create a header  structure */}
      <div className={styles.container}> 
        <div className={styles.logo}>
          <img src={Logo} alt="logo" />
        </div>

        <SearchLabel/>
        <nav>
          <ul>
            <li>
              <a href="/">Comprar</a>
            </li>
            <li>
              <a href="/about">Alquiler</a>
            </li>
            <li>
              <a href="/contact">Agencia/Agentes</a>
            </li>
            <li>
              <a href="/contact">Blog</a>
            </li>
            <li>
              <a href="/contact">Contáctanos</a>
            </li>
            <hr className={styles.line}/>
            <li className={styles.lan}>IDIOMA
              <a href="/contact"><img src={US} alt="US" /></a>
              <a href="/contact"><img src={ES} alt="ES" /></a>
            </li>
            <hr className={styles.line}/>


          </ul>
        </nav>
      </div>
    </header>
  )
}
