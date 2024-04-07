import Header from '../components/layout/header'
import styles from '../styles/pages/listing.module.scss'
import Footer from '../components/layout/footer'
import PropertyCard from '../components/property-card'


export default function Listing() {
  return (
    <div className={styles.container}>
      <Header />

        <section className={styles['container-properties']}>
          <PropertyCard/>
        </section>

  


      <Footer />



    </div>
  )
}
