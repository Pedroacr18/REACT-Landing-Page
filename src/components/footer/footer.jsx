import styles from "./footer.module.css";
import meta from "../../img/meta.png";
import facebook from "../../img/facebook.png";
import instagram from "../../img/instagram.png";
import twitter from "../../img/twitter.png";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerConteiner}>
          <div>
            <img src={meta} alt="" className={styles.footer_logo}/>
            <span className={styles.FooterP}>
              React também é uma arquitetura. Os frameworks que o implementam
              permitem buscar dados em componentes assíncronos que são
              executados no servidor ou mesmo durante a construção.
            </span>
          </div>
          
          <div className={styles.parede}>
            <div>
                <ul className={styles.footer_ul}>
                  <div>
                    <h3 className={styles.footer_title}><a href="#" className={styles.footer_h3}>Aprenda a React</a></h3>
                    <li><a href="https://react.dev/learn" className={styles.footer_a}>Começo rápido</a></li>
                    <li><a href="https://react.dev/learn/installation" className={styles.footer_a}>Instalação</a></li>
                    <li><a href="https://react.dev/learn/describing-the-ui" className={styles.footer_a}>Descrevendo a IU</a></li>
                    </div>

                    <div>
                    <h3 className={styles.footer_title}><a className={styles.footer_h3} href="https://react.dev/community">Referência de API</a></h3>
                    <li><a href="https://react.dev/reference/react" className={styles.footer_a}>APIs de reação</a></li>
                    <li><a href="https://react.dev/reference/react-dom" className={styles.footer_a}>Reagir APIs DOM</a></li>
                    <li><a href="https://react.dev/learn/describing-the-ui" className={styles.footer_a}>Descrevendo a IU</a></li>
                    </div>

                    <div>
                      <h3 className={styles.footer_title}><a className={styles.footer_h3} href="https://react.dev/community">Comunidade</a></h3>
                      <li><a href="https://github.com/facebook/react/blob/main/CODE_OF_CONDUCT.md" className={styles.footer_a}>Código de Conduta</a></li>
                      <li><a href="https://react.dev/community/docs-contributors" className={styles.footer_a}>Colaboradores do Documentos</a></li>
                      <li><a href="https://react.dev/community/team" className={styles.footer_a}>Conheça o time</a></li>
                    </div>
                </ul>
          </div>
        </div>

      </div>

      <div className={styles.copyWrapper}>
          <div>
            <ul className={styles.ulCopyRede}>
              <li>
                <a href="">
                  <img src={facebook} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={instagram} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={twitter} alt="" />
                </a>
              </li>
            </ul>
          </div>
          <p className={styles.footer_copyp}>
            © 2024 META. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
