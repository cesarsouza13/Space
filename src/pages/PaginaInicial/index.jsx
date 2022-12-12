import { Cabecalho } from "../../components/Cabecalho/cabecalho"
import Galeria from "../../components/Galeria"
import Menu from "../../components/Menu"
import Populares from "../../components/Populares"
import banner from './banner.png'
import styles from './PaginaInicial.module.scss'

const PaginaInicial = () => {
    return(
        <>
        <Cabecalho/>
        <main>
            <section className={styles.principal}>
            <Menu/>
            <div className={styles.principal__imagem}>
                <h1>A galeria mais completa do espaço</h1>
                <img src={banner} alt="banner espaço"/>
            </div>
            </section>
            <div className={styles.galeria}>
            <Galeria/>
            <Populares />
            </div>
        </main>
     
        
        </>
    )
}

export {PaginaInicial}