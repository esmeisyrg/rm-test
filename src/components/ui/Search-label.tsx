import styles from '../../styles/components/search-label.module.scss'
import { IoIosSearch } from "react-icons/io";

export default function SearchLabel() {
  return (
    <div className={styles.searchContainer}>
      <form className={styles.form}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Buscar"
        />
        <button type="submit" className={styles.searchButton}>
          <IoIosSearch className={styles.searchIcon} />
        </button>
      </form>
    </div>
  );
}