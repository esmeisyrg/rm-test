import styles from '../../styles/layout/header.module.scss'
import Logo from '../../assets/Icon.svg'
import SearchLabel from '../ui/Search-label'
import US from '../../assets/usa.svg'
import ES from '../../assets/rd.svg'
import { Link } from 'react-router-dom'

import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";


interface HeaderProps {
  showSearchLabel: boolean
  showSelect: boolean
}

const Header: React.FC<HeaderProps> = ({ showSearchLabel, showSelect = true }) => {
  return (
    <header className={styles.header}>
      <div  className={`${styles.container} ${showSearchLabel ? styles.withSearchLabel : styles.withoutSearchLabel}`}>
        <Link to="/">
          <div className={styles.logo}>
            <img src={Logo} alt="logo" />
          </div>
        </Link>


        {showSearchLabel && <SearchLabel />}
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

      
      {showSelect && (
        <article className={styles['select-container']}>
          <div className={styles.buy}>
            <MdOutlineCheckBoxOutlineBlank />
            COMPRAR
          </div>
          <div className={styles.alquilar}>
            <MdOutlineCheckBox />
            ALQUILAR
          </div>
        </article>
      )}
    </header>
  )
}

export default Header;
