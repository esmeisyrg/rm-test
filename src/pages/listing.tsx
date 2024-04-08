import Header from '../components/layout/header'
import styles from '../styles/pages/listing.module.scss'
import Footer from '../components/layout/footer'
import PropertyCard from '../components/property-card'
import Pagination from '../components/extra/pagination'


export default function Listing() {
  return (
    <div className={styles.container}>
      <Header showSearchLabel={true} showSelect ={true} />

        <section className={styles['container-properties']}>
          <PropertyCard/>
        </section>

        <article className={styles.pagination}>
            <Pagination />
        </article>


        <Footer showWhiteBackground={true} />
    </div>
  )
}
