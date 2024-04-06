import ErrorMessage from "../components/error-message"
import Footer from "../components/layout/footer"
import Header from "../components/layout/header"
import styles from "../styles/pages/error.module.scss"

export default function Error() {
  return (
    <div className={styles['error-container']}>
    
      <Header/>

      <ErrorMessage/>

      <Footer/>


    </div>
  )
}
