
import styles from '../../styles/UI/pagination.module.scss'

function pagination() {
  return (
    <article className={styles['buttons-container']}>
        <button>Previous</button>
        <button>1</button>
        <button>2</button>
        <button>Next</button>

    </article>
  )
}

export default pagination