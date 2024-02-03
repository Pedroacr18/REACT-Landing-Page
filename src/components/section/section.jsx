import styles from "./section.module.css";
import Suporte from "../../img/fone.svg";
import Desempenho from "../../img/qualidade.svg";
import Onboarding from "../../img/rede.svg";
import Produto from "../../img/produto.svg";
import Qualidade from "../../img/pasta.svg";
import Resultado from "../../img/grafico.svg";

const Ben = () => {
  return (
    <section className={styles.Ben}>
      <div className={styles.ben_wrapper}>
        <div className={styles.ben_text}>
          <h1 className={styles.ben_title}>Benefícios de usar React </h1>
          <p className={styles.ben_paragrafo}>
            Lorem ipsum dolor sit amet, consectetur adipis elit
          </p>
        </div>

        <div className={styles.ben_container}>
          <div className={styles.ben_content}>
            <div className={styles.ben_conttext}>
              <div className={styles.ben_icon}>
              <img src={Suporte} alt="Suporte"></img>
              </div>
              <h2 className={styles.ben_conttitle}>Suporte</h2>
              <p className={styles.bencontp}>
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipis elit. Sit enim nec, proin faucibus nibh
                <br /> et sagittis a. Lacinia purus ac amet.
              </p>
            </div>

            <div className={styles.ben_conttext}>
              <div className={styles.ben_icon}>
              <img src={Desempenho} alt="Suporte"></img>
              </div>
              <h2 className={styles.ben_conttitle}>Alto desempenho</h2>
              <p className={styles.bencontp}>
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipis elit. Sit enim nec, proin faucibus nibh
                <br /> et sagittis a. Lacinia purus ac amet.
              </p>
            </div>

            <div className={styles.ben_conttext}>
            <div className={styles.ben_icon}>
              <img src={Onboarding} alt="Suporte"></img>
              </div>
              <h2 className={styles.ben_conttitle}>Onboarding</h2>
              <p className={styles.bencontp}>
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipis elit. Sit enim nec, proin faucibus nibh
                <br /> et sagittis a. Lacinia purus ac amet.
              </p>
            </div>
          </div>

          <div className={styles.ben_content}>
            <div className={styles.ben_conttext}>
            <div className={styles.ben_icon}>
              <img src={Produto} alt="Suporte"></img>
              </div>
              <h2 className={styles.ben_conttitle}>Produto</h2>
              <p className={styles.bencontp}>
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipis elit. Sit enim nec, proin faucibus nibh
                <br /> et sagittis a. Lacinia purus ac amet.
              </p>
            </div>

            <div className={styles.ben_conttext}>
            <div className={styles.ben_icon}>
              <img src={Qualidade} alt="Suporte"></img>
              </div>
              <h2 className={styles.ben_conttitle}>Qualidade</h2>
              <p className={styles.bencontp}>
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipis elit. Sit enim nec, proin faucibus nibh
                <br /> et sagittis a. Lacinia purus ac amet.
              </p>
            </div>

            <div className={styles.ben_conttext}>
            <div className={styles.ben_icon}>
              <img src={Resultado} alt="Suporte"></img>
              </div>
              <h2 className={styles.ben_conttitle}>Resultado</h2>
              <p className={styles.bencontp}>
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipis elit. Sit enim nec, proin faucibus nibh
                <br /> et sagittis a. Lacinia purus ac amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ben;
