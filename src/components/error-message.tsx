import Texts from "./extra/Texts"
import HouseIcon from '../assets/houseIcon.svg'
import styles from '../styles/components/extra/errorm.module.scss'


export default function ErrorMessage() {
  return (
    <article className={styles['error-container']}>
        <div className={styles.square}>
            <img src={HouseIcon} alt="HouseIcon" />
            <article className={styles.texts}>
                <h4 className={styles.title}>INMUEBLE NO DISPONIBLE</h4>
                <Texts text="Te presentamos propiedades que podrían interesarte:" color="#8C8C8C" fontWeight="lighter" fontStyle="italic" fontSize="18px" />
            </article>
        </div>
    </article>

  )
}
