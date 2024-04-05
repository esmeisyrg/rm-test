import styles from '../../styles/layout/header.module.scss'
import Logo from '../../assets/Icon.svg'
import SearchLabel from '../ui/Search-label'

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
          </ul>
        </nav>
      </div>
    </header>
  )
}
