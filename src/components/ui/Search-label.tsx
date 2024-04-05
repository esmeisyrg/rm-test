import styles from '../../styles/components/search-label.module.scss'
import { IoIosSearch } from "react-icons/io";


export default function SearchLabel() {
  return (
    <div className={styles.searchContainer}>
    <input
      type="text"
      className={styles.searchInput}
      placeholder="Buscar"
    />
    <button type="submit" className={styles.searchButton}>
      <article className={styles.icon}>
      <IoIosSearch />

      </article>
    </button>
  </div>
  )
}
