import styles from "./section.module.css";
import FotoAT from "../../img/atomo.png";

const Section3 = () => {
  return (
    <section className={styles.section3}>
        <div className={styles.fotoatomo}>
            <img src={FotoAT} alt="" />
        </div>
        <div className={styles.section3content}>
            <h2 className={styles.sectionH2}>Bem-Vindo à comunidade <br />React</h2>
            <a className={styles.aprenda3} href="#">Apreenda</a>
        </div>


        
    </section>
  )
}

export default Section3