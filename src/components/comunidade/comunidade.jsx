import styles from "./comunidade.module.css";
import Imagem1 from "../../img/imagem.png";
import Imagem2 from "../../img/imagem2.png";
import Imagem3 from "../../img/imagem3.png";
import Imagem4 from "../../img/imagem4.png";

const Comunidade = () => {
  return (
    <section className={styles.Comunidade}>
      <div className={styles.comunidade_wrapper}>
        <div className={styles.imgContainer1}>
          <div>
            <img src={Imagem1} alt="Imagem" />
          </div>
          <div className={styles.comcontent}>
            <h2 className={styles.com_title}>Uma comunidade de milhões</h2>
            <p className={styles.com_p}>
              Você não está sozinho. Dois milhões de desenvolvedores de todo o
              mundo visitam a documentação do React todos os meses. React é algo
              com o qual as pessoas e as equipes podem concordar, venham fazer
              parte da nossa comunidade.
            </p>
            <a className={styles.aprenda} href="#">
              Comunidade
            </a>
          </div>
        </div>

        <div className={styles.ComunidadeImgs}>
          <div>
            <a href="#">
              <img src={Imagem2} alt="Imagem" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={Imagem3} alt="Imagem" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={Imagem4} alt="Imagem" />
            </a>
          </div>
          <div className={styles.texto3}>
          <p>
            É por isso que o React é mais do que uma biblioteca, uma arquitetura
            ou mesmo um ecossistema. React é uma comunidade. É um lugar onde
            você pode pedir ajuda, encontrar oportunidades e fazer novos amigos.
            Você conhecerá desenvolvedores e designers, iniciantes e
            especialistas, pesquisadores e artistas, professores e estudantes.
            Nossas experiências podem ser muito diferentes, mas o React nos
            permite criar interfaces de usuário juntos.
          </p>
        </div>
        </div>

      </div>
    </section>
  );
};

export default Comunidade;
