import styles from './hero.module.css'
import Projeto from "../../img/projeto1.png"

const Hero = () =>{
  return (
    <section className={styles.pricipal}>
        <div className={styles.wrapper}>
            <img src={Projeto} alt="Projeto" />
            <h1 className={styles.texto1}>Crie diversas interfaces <span className={styles.hero_span}>rápidas e incríveis usando componentes</span></h1>
            <h2 className={styles.texto2}>O React permite construir interfaces de usuário a partir de<br /> peças individuais chamadas componentes.</h2>
            <div className={styles.caixa}>
            <a className={styles.aprenda} href="#">Apreenda</a>
            <a className={styles.aprenda2} href="#">Documentação</a>
            </div>
        </div>
    </section>
    
  );
};

export default Hero;